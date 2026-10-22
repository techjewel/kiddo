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
   build, as Cloudflare will. */

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
    offline(on) { down = on; },
  };
}

test.describe('upgrade from the live site', () => {
  let site;
  let base;
  let oldDir;

  test.beforeAll(async () => {
    if (!isNext) return;
    oldDir = mkdtempSync(join(tmpdir(), 'kiddo-live-'));
    execSync(`git archive origin/master | tar -x -C ${oldDir}`);
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
    test.skip(!/(-chromium|-iphone-15-pro-max)$/.test(info.project.name), 'Chromium and iPhone portrait');
    test.setTimeout(120000);

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
    const before = await page.evaluate(() => caches.keys());
    expect(before).toContain('magnet-shell-v35');

    // 2. The cutover: same origin, the new build.
    site.use('new');
    await page.reload();
    await expect.poll(async () => {
      await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r && r.update())).catch(() => {});
      return page.evaluate(async () => {
        const reg = await navigator.serviceWorker.getRegistration();
        const names = await caches.keys();
        return reg?.active?.state === 'activated' && !reg.installing && !reg.waiting
          && !names.includes('magnet-shell-v35');
      });
    }, { timeout: 60000 }).toBe(true);
    const after = await page.evaluate(() => caches.keys());
    expect(after.some((n) => /^magnet-shell-[0-9a-f]{8}$/.test(n)), `new shell cache in ${after}`).toBe(true);
    await page.reload();
    await page.waitForFunction(() => typeof LETTERS_BY_LANG !== 'undefined');
    expect(await page.evaluate(() => document.querySelector('script[src*="/assets/app-"]') !== null)).toBe(true);

    const kept = await page.evaluate(async (urls) => {
      const media = await caches.open('magnet-media');
      let n = 0;
      for (const u of urls) if (await media.match(u)) n += 1;
      return n;
    }, saved);
    expect(kept, 'downloaded files still on the device').toBe(saved.length);
    expect(await page.evaluate(() => localStorage.getItem('magnet-board-v1'))).toBe(progress);

    // 3. No signal: the new build still opens, in Bangla, with its fonts.
    site.offline(true);
    await page.reload();
    await page.waitForFunction(() => typeof LETTERS_BY_LANG !== 'undefined');
    await expect(page.locator('#screen-letters .magnet').first()).toBeVisible();
    const offline = await page.evaluate(async (photo) => ({
      bangla: (await document.fonts.load('800 40px "Baloo Da 2"', 'অ')).length,
      photo: (await fetch(photo)).ok,
    }), saved[0]);
    site.offline(false);
    info.annotations.push({ type: 'upgrade', description: JSON.stringify({ before, after, kept, offline }) });
    expect(offline.bangla, 'Bangla font offline').toBe(1);
    expect(offline.photo, 'a downloaded photo offline').toBe(true);
  });
});
