/* ============================================================
   Screenshot pages at real device sizes.

     node brand/shot.mjs jobs.json

   where jobs.json is a list of
     { "url": "...", "w": 412, "h": 915, "scale": 2,
       "mobile": true, "out": "icons/shot-phone.png" }

   Chrome's own --screenshot flag can't do this: on a Mac it refuses to
   make a window narrower than 500px, so it lays the page out at 500 and
   then crops the picture down to whatever you asked for — a phone
   screenshot that is really a tablet screenshot with the right-hand
   side cut off. Driving it over the debugging protocol overrides the
   viewport properly, meta tag and device pixel ratio and all.

   One browser, one tab, re-pointed at each job in turn. Opening a tab
   per shot and closing it works exactly once: the second /json/new on
   the same browser comes back with a target that rejects every
   Emulation call as "Invalid parameters".

   No dependencies: Node 24 has WebSocket and fetch built in.
   ============================================================ */
import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const jobs = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const CHROME = process.env.CHROME
  || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333 + (process.pid % 400);
const PROFILE = `/tmp/magnet-shot-${process.pid}`;

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars',
  '--force-color-profile=srgb', '--allow-file-access-from-files',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${PROFILE}`,
  'about:blank',
], { stdio: 'ignore', detached: true });

const send = (ws, id, method, params) => new Promise((resolve, reject) => {
  const onMessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id !== id) return;
    ws.removeEventListener('message', onMessage);
    msg.error ? reject(new Error(`${method}: ${msg.error.message}`)) : resolve(msg.result);
  };
  ws.addEventListener('message', onMessage);
  ws.send(JSON.stringify({ id, method, params: params || {} }));
});

try {
  let page;
  for (let i = 0; i < 100 && !page; i += 1) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      page = list.find((t) => t.type === 'page');
    } catch { /* not up yet */ }
    if (!page) await sleep(120);
  }
  if (!page) throw new Error('Chrome never answered on the debugging port');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));

  let id = 0;
  const call = (m, p) => send(ws, ++id, m, p);
  await call('Page.enable');

  for (const job of jobs) {
    await call('Emulation.setDeviceMetricsOverride', {
      width: job.w, height: job.h,
      deviceScaleFactor: job.scale || 1,
      mobile: !!job.mobile,
      screenWidth: job.w, screenHeight: job.h,
    });

    /* Via about:blank first, so moving between two ?screen= URLs that
       differ only in the query is a real load and not a no-op. Its own
       load event has to be out of the way before we start listening,
       or the wait below ends on the blank page and everything after it
       runs against a document that hasn't got the app in it yet —
       which fails silently, because the markup is all there and only
       the listeners are missing. */
    await call('Page.navigate', { url: 'about:blank' });
    await sleep(150);

    const loaded = new Promise((resolve) => {
      const onMessage = (e) => {
        if (JSON.parse(e.data).method === 'Page.loadEventFired') {
          ws.removeEventListener('message', onMessage);
          resolve();
        }
      };
      ws.addEventListener('message', onMessage);
    });
    await call('Page.navigate', { url: job.url });
    await Promise.race([loaded, sleep(20000)]);

    /* A job can drive the page first — `"js": "..."` is evaluated in
       the page, which is how a screen behind a switch gets shot. */
    if (job.js) {
      const ran = await call('Runtime.evaluate', {
        /* Wrapped in an async IIFE: awaitPromise refuses anything that
           isn't already a promise, `el.click()` returns undefined, and
           a `.then(() => {...})` around it would resolve the moment the
           body started rather than when it finished — so a job that
           waits for the app would be shot mid-wait. This way the job
           may use `await` and the screenshot honours it. */
        expression: `(async () => { ${job.js} })()`,
        awaitPromise: true,
      }).catch((e) => ({ exceptionDetails: { text: e.message } }));
      /* A throw inside the page comes back as a normal result carrying
         exceptionDetails, not as a protocol error — so it has to be
         looked for, or the shot is silently of the wrong thing. */
      if (ran && ran.exceptionDetails) {
        const d = ran.exceptionDetails;
        console.error(`  ! ${job.out}: ${(d.exception && d.exception.description) || d.text}`);
      }
      await sleep(400);
    }

    /* Webfonts arrive after load, and a screenshot taken before they
       do is a screenshot of the fallback face. */
    await call('Runtime.evaluate', {
      expression: 'document.fonts.ready.then(() => 1)', awaitPromise: true,
    }).catch(() => {});
    await sleep(job.settle || 800);

    const shot = await call('Page.captureScreenshot', { format: 'png' });
    writeFileSync(job.out, Buffer.from(shot.data, 'base64'));
    console.log(`  ${job.out}  ${job.w}×${job.h}${job.scale > 1 ? ` @${job.scale}` : ''}`);
  }
  ws.close();
} catch (err) {
  console.error(String((err && err.message) || err));
  process.exitCode = 1;
} finally {
  /* An open socket keeps Node alive forever, and a screenshot script
     that hangs instead of failing is worse than one that fails. */
  /* The whole group: killing the launcher alone leaves the browser
     process behind, holding the port for the next run. */
  try { process.kill(-chrome.pid, 'SIGKILL'); } catch { /* already gone */ }
}
