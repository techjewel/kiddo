import { test, expect } from '@playwright/test';
import { createServer } from 'node:http';
import { execSync } from 'node:child_process';
import { mkdtempSync, readFileSync, existsSync, statSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, extname, normalize } from 'node:path';

/* Phase 1: the Vite build is what kiddo.page serves. These only make
   sense for the build, so they skip on the legacy target. */
const isNext = process.env.KIDDO_TARGET === 'next';

test.describe('phase 1 build', () => {
  test.beforeEach(() => {
    test.skip(!isNext, 'Checks the Vite build only');
  });

  test('fonts come from our own site', async ({ page }) => {
    const outside = [];
    page.on('request', (r) => {
      if (/fonts\.(googleapis|gstatic)\.com/.test(r.url())) outside.push(r.url());
    });
    await page.addInitScript(() => {
      localStorage.setItem('magnet-board-v1', JSON.stringify({ langs: ['en', 'bn'], lang: 'bn', chosen: true }));
    });
    await page.goto('/');
    await page.waitForFunction(() => typeof LETTERS_BY_LANG !== 'undefined');
    const loaded = await page.evaluate(async () => {
      const faces = await Promise.all([
        document.fonts.load('800 40px "Baloo Da 2"', 'অ'),
        document.fonts.load('600 40px "Baloo 2"', 'A'),
        document.fonts.load('800 40px "Baloo Bhaijaan 2"', 'ب'),
        document.fonts.load('400 40px "Andika"', 'a'),
      ]);
      return faces.map((f) => f.length);
    });
    expect(loaded, 'each family has a face for its script').toEqual([1, 1, 1, 1]);
    expect(outside, 'requests to Google Fonts').toEqual([]);
  });
});

/* ---------- Upgrading a tablet from the live site ----------------
   A tablet that has the live site (the legacy v35 worker, a full or
   half download, progress in localStorage) opens kiddo.page after the
   cutover. One server on one origin serves the old tree, then the new
   build, as Cloudflare will.

   It answers the way Cloudflare does, too. With html_handling
   "auto-trailing-slash", /index.html is a 307 to /. A worker that files
   that redirected answer as its offline page cannot use it for a page
   load: the browser refuses a redirected response for a navigation, and
   the app does not open without a signal. */

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml', '.m4a': 'audio/mp4', '.mp3': 'audio/mpeg', '.json': 'application/json',
  '.webmanifest': 'application/manifest+json', '.woff2': 'font/woff2', '.woff': 'font/woff',
};

function twoReleases(oldDir, newDir) {
  let dir = oldDir;
  let down = false;
  const server = createServer((req, res) => {
    /* "No signal": the connection drops without an answer. */
    if (down) { req.socket.destroy(); return; }
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    /* Cloudflare's auto-trailing-slash. */
    if (path.endsWith('/index.html')) {
      res.writeHead(307, { location: path.slice(0, -'index.html'.length), 'cache-control': 'no-cache' }).end();
      return;
    }
    let file = normalize(join(dir, path));
    if (!file.startsWith(dir)) { res.writeHead(403).end(); return; }
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
    if (!existsSync(file)) {
      res.writeHead(404, { 'content-type': TYPES['.html'] });
      res.end(existsSync(join(dir, '404.html')) ? readFileSync(join(dir, '404.html')) : 'Not found');
      return;
    }
    res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream', 'cache-control': 'no-cache' });
    res.end(readFileSync(file));
  });
  return {
    server,
    use(which) { dir = which === 'old' ? oldDir : newDir; },
    /* Losing the signal also drops the connections already open, as a
       tablet leaving the wifi does. Leaving them pooled and resetting
       each request on them instead trips a libsoup assertion in
       Playwright's Linux WebKit ("This is a WebKit bug"), which then
       loses the worker and the caches for the rest of the page load. */
    offline(on) {
      down = on;
      if (on) server.closeAllConnections();
    },
  };
}

/* The tree kiddo.page served before the cutover: the repo root with the
   v35 worker, master at 3a56187. Pinned, because once this branch is
   merged master is the new build and no longer the release a tablet is
   upgrading from. */
const LIVE_RELEASE = '3a5618766fc03ea6e7cf388c4015426b3fc149e0';

test.describe('upgrade from the live site', () => {
  let site;
  let base;
  let oldDir;

  test.beforeAll(async () => {
    if (!isNext) return;
    oldDir = mkdtempSync(join(tmpdir(), 'kiddo-live-'));
    execSync(`git archive ${LIVE_RELEASE} | tar -x -C ${oldDir}`);
    site = twoReleases(oldDir, join(process.cwd(), 'dist'));
    await new Promise((r) => site.server.listen(0, '127.0.0.1', r));
    base = `http://127.0.0.1:${site.server.address().port}`;
  });

  test.afterAll(async () => {
    if (site) await new Promise((r) => site.server.close(r));
    if (oldDir) rmSync(oldDir, { recursive: true, force: true });
  });

  test('keeps the download and the progress, drops the old shell, works offline', async ({ page }, info) => {
    test.skip(!isNext, 'Checks the Vite build only');
    test.skip(!/(-chromium|-iphone-15-pro-max|-ipad-air)$/.test(info.project.name), 'Chromium, iPhone and iPad portrait');
    test.setTimeout(120000);

    /* The new page has booted: the board script ran and drew the letters. */
    const booted = async (what) => {
      await page.waitForFunction(() => typeof LETTERS_BY_LANG !== 'undefined', null, { timeout: 20000 })
        .catch(() => { throw new Error(`${what}: the app did not start (blank or unstyled page)`); });
      await expect(page.locator('#screen-letters .magnet').first(), what).toBeVisible();
      expect(await page.evaluate(() => document.querySelector('script[src*="/assets/app-"]') !== null), `${what}: new build`).toBe(true);
    };
    /* Opening without a signal: the new build, in Bangla, with its fonts
       and a downloaded photo. */
    const opensOffline = async (what, photo) => {
      site.offline(true);
      try {
        await page.reload();
        await booted(what);
        const offline = await page.evaluate(async (p) => ({
          bangla: (await document.fonts.load('800 40px "Baloo Da 2"', 'অ')).length,
          photo: (await fetch(p)).ok,
        }), photo);
        expect(offline.bangla, `${what}: Bangla font offline`).toBe(1);
        expect(offline.photo, `${what}: a downloaded photo offline`).toBe(true);
        return offline;
      } finally {
        site.offline(false);
      }
    };

    // 1. The live site, as a tablet has it today.
    site.use('old');
    /* Pictures the old worker drops on every activation are left out:
       the new one drops them too, as it should. */
    const stale = JSON.parse(readFileSync(join(oldDir, 'sw.js'), 'utf8')
      .match(/const STALE_MEDIA = (\[[^\]]*\])/)[1].replace(/'/g, '"'));
    const progress = JSON.stringify({ langs: ['en', 'bn'], lang: 'bn', chosen: true, stars: 7 });
    await page.goto(`${base}/`);
    await page.evaluate((p) => localStorage.setItem('magnet-board-v1', p), progress);
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.reload();
    await page.waitForFunction(() => !!navigator.serviceWorker.controller);
    const saved = await page.evaluate((staleList) => new Promise((resolve) => {
      const urls = mediaUrls().filter((u) => u.startsWith('photos/') && !staleList.includes(`./${u}`)).slice(0, 12)
        .concat(mediaUrls().filter((u) => u.startsWith('sounds/bangla/')).slice(0, 12));
      navigator.serviceWorker.addEventListener('message', (e) => {
        if (e.data?.type === 'MEDIA_SAVED') resolve(urls);
      });
      navigator.serviceWorker.controller.postMessage({ type: 'SAVE_MEDIA', urls });
    }), stale);
    expect(saved.length, 'files downloaded under the old site').toBe(24);
    /* A font of ours already on the device, and one of Google's from
       the old page. The fonts cache outlives the release; Google's
       copies go. */
    await page.evaluate(async () => {
      const fonts = await caches.open('magnet-fonts');
      await fonts.put('/assets/kept-by-upgrade-test.woff2', new Response('x', { headers: { 'content-type': 'font/woff2' } }));
      await fonts.put('https://fonts.gstatic.com/s/upgrade-test.woff2', new Response('x'));
    });
    const before = await page.evaluate(() => caches.keys());
    expect(before).toContain('magnet-shell-v35');
    expect(before).toContain('magnet-media');

    // 2. The cutover: same origin, the new build. The tablet opens it once
    //    with a signal, and the new worker takes over.
    site.use('new');
    const navigations = [];
    page.on('framenavigated', (f) => { if (f === page.mainFrame()) navigations.push(f.url()); });
    await page.reload();
    await booted('first open after the cutover');
    await expect.poll(async () => {
      await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r && r.update())).catch(() => {});
      return page.evaluate(async () => {
        const reg = await navigator.serviceWorker.getRegistration();
        const names = await caches.keys();
        return reg?.active?.state === 'activated' && !reg.installing && !reg.waiting
          && /\/sw\.js$/.test(navigator.serviceWorker.controller?.scriptURL || '')
          && reg.active.scriptURL === navigator.serviceWorker.controller.scriptURL
          && !names.includes('magnet-shell-v35');
      });
    }, { timeout: 60000 }).toBe(true);
    /* No reload loop: the one reload above, and nothing after it. */
    await page.waitForTimeout(1500);
    expect(navigations.length, `page loads after the cutover: ${navigations}`).toBe(1);

    const after = await page.evaluate(async (urls) => {
      const names = await caches.keys();
      const media = await caches.open('magnet-media');
      let kept = 0;
      for (const u of urls) if (await media.match(u)) kept += 1;
      const fonts = await caches.open('magnet-fonts');
      const fontKeys = (await fonts.keys()).map((r) => r.url);
      const shellName = names.find((n) => /^magnet-shell-[0-9a-f]{8}$/.test(n));
      const shell = shellName ? await caches.open(shellName) : null;
      const shellRedirected = [];
      if (shell) for (const r of await shell.keys()) if ((await shell.match(r)).redirected) shellRedirected.push(r.url);
      return { names, kept, fontKeys, shellName, shellRedirected };
    }, saved);
    expect(after.shellName, `new shell cache in ${after.names}`).toBeTruthy();
    expect(after.kept, 'downloaded files still on the device').toBe(saved.length);
    expect(after.fontKeys.some((u) => u.endsWith('/assets/kept-by-upgrade-test.woff2')), 'fonts cache kept').toBe(true);
    expect(after.fontKeys.some((u) => u.includes('/assets/baloo-da-2-bengali-800')), 'new fonts cached').toBe(true);
    expect(after.fontKeys.filter((u) => !u.startsWith(base)), 'Google font copies dropped').toEqual([]);
    expect(after.shellRedirected, 'redirected answers in the shell cache').toEqual([]);
    expect(await page.evaluate(() => localStorage.getItem('magnet-board-v1'))).toBe(progress);

    // 3. The next time the tablet opens, there is no signal. Nothing has
    //    loaded the page under the new worker yet, so this is the offline
    //    copy the new worker filed when it installed.
    const firstOffline = await opensOffline('first open with no signal after the upgrade', saved[0]);

    // 4. Back online, then offline again: still the new build, still the
    //    download and the progress.
    await page.reload();
    await booted('back online');
    expect(await page.evaluate(() => localStorage.getItem('magnet-board-v1'))).toBe(progress);
    const secondOffline = await opensOffline('offline again', saved[saved.length - 1]);
    info.annotations.push({ type: 'upgrade', description: JSON.stringify({ before, after, firstOffline, secondOffline }) });
  });
});
