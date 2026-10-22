import { test, expect } from '@playwright/test';

/* A missing photograph or recording must come back as a 404, and the
   service worker must never file a page under a sound's or a picture's
   name. Before v35 the host answered a missing file with index.html and
   a 200, and the worker kept that page as the file for good. */

async function controlled(page) {
  await page.goto('/');
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) {
      await new Promise((r) => navigator.serviceWorker.addEventListener('controllerchange', r, { once: true }));
    }
  });
}

test.describe('Missing media', () => {
  test('a missing recording and a missing photo are 404s', async ({ request }) => {
    for (const path of ['/sounds/no-such-sound.m4a', '/photos/no-such-photo.jpg']) {
      const res = await request.get(path);
      expect(res.status(), path).toBe(404);
    }
  });

  test('the worker does not cache an HTML answer for a sound or a photo', async ({ page, context }) => {
    /* Stand in for the old host: a 200 with the app's page in it. */
    await context.route(/\/(sounds\/poison\.m4a|photos\/poison\.jpg)$/, (route) =>
      route.fulfill({ status: 200, contentType: 'text/html', body: '<!doctype html><title>Kiddo</title>' }));
    await controlled(page);
    const result = await page.evaluate(async () => {
      for (const u of ['sounds/poison.m4a', 'photos/poison.jpg']) await fetch(u).then((r) => r.text());
      await new Promise((r) => setTimeout(r, 300));
      const media = await caches.open('magnet-media');
      return {
        sound: !!(await media.match('sounds/poison.m4a')),
        photo: !!(await media.match('photos/poison.jpg')),
      };
    });
    expect(result).toEqual({ sound: false, photo: false });
  });

  test('a real recording is still cached', async ({ page }) => {
    await controlled(page);
    const cached = await page.evaluate(async () => {
      await fetch('sounds/cat.m4a').then((r) => r.arrayBuffer());
      await new Promise((r) => setTimeout(r, 300));
      const media = await caches.open('magnet-media');
      return !!(await media.match('sounds/cat.m4a'));
    });
    expect(cached).toBe(true);
  });

  test('HTML already filed under sounds/ and photos/ is cleaned up', async ({ page }) => {
    await controlled(page);
    const left = await page.evaluate(async () => {
      const media = await caches.open('magnet-media');
      const html = () => new Response('<!doctype html>', { headers: { 'content-type': 'text/html' } });
      await media.put('sounds/arabic/stale/1.m4a', html());
      await media.put('photos/stale.jpg', html());
      await media.put('sounds/good.m4a', new Response(new Uint8Array(8), { headers: { 'content-type': 'audio/mp4' } }));
      const purged = new Promise((r) => navigator.serviceWorker.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'MEDIA_PURGED') r(e.data.dropped);
      }));
      navigator.serviceWorker.controller.postMessage({ type: 'PURGE_BAD_MEDIA' });
      const dropped = await purged;
      return {
        dropped,
        sound: !!(await media.match('sounds/arabic/stale/1.m4a')),
        photo: !!(await media.match('photos/stale.jpg')),
        good: !!(await media.match('sounds/good.m4a')),
      };
    });
    expect(left).toEqual({ dropped: 2, sound: false, photo: false, good: true });
  });
});
