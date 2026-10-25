/// <reference lib="webworker" />
/* ============================================================
   Kiddo service worker, built by Vite into /sw.js.

   It is the legacy sw.js (v36) moved into the build, with one change:
   the shell list and its version come from the build instead of by
   hand. Vite names every script, stylesheet and font after its own
   contents, and vite-plugin-pwa writes that list into
   self.__WB_MANIFEST below. The shell cache is named after the list,
   so a release that changes one byte gets a new cache and the old one
   is thrown away on activation, as a VERSION bump did before.

   Everything else keeps its name, on purpose. A tablet that downloaded
   the pictures and sounds under v35 still has them under this worker:
     magnet-media   the photographs and recordings, never versioned
     magnet-fonts   the typefaces (now our own woff2 files)
     magnet-absent  files the server does not have, rechecked each release
   The page talks to it with the same messages: COUNT_MEDIA, SAVE_MEDIA,
   PURGE_BAD_MEDIA.
   ============================================================ */
import { isGoodMedia, isMediaPath } from './services/media-guard';

declare const self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: Array<{ url: string; revision: string | null }>;
};

const PRECACHE = self.__WB_MANIFEST;

/* A short fingerprint of the precache list. Same files, same name. */
function fingerprint(entries: typeof PRECACHE): string {
  let h = 0x811c9dc5;
  for (const e of entries) {
    const s = `${e.url}|${e.revision ?? ''};`;
    for (let i = 0; i < s.length; i += 1) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
  }
  return h.toString(16).padStart(8, '0');
}

const SHELL = `magnet-shell-${fingerprint(PRECACHE)}`;
const MEDIA = 'magnet-media';
const FONTS = 'magnet-fonts';
const ABSENT = 'magnet-absent';

/* As in the legacy worker: pictures replaced in place, dropped once. */
const STALE_MEDIA = ['./photos/rose.jpg', './photos/sheep.jpg', './photos/mouse.jpg', './photos/monkey.jpg', './photos/chicken.jpg', './photos/horse.jpg', './photos/jackfruit.jpg', './photos/lychee.jpg', './photos/broom.jpg', './photos/chair.jpg', './photos/bed.jpg', './photos/book.jpg', './photos/bottle.jpg', './photos/bowl.jpg', './photos/bucket.jpg', './photos/clock.jpg', './photos/comb.jpg', './photos/door.jpg', './photos/fan.jpg', './photos/fork.jpg', './photos/key.jpg', './photos/mirror.jpg', './photos/plate.jpg', './photos/shoe.jpg', './photos/soap.jpg', './photos/sofa.jpg', './photos/table.jpg', './photos/television.jpg', './photos/toothbrush.jpg'];

const isWoff2 = (u: string) => u.endsWith('.woff2');

/* The fonts go in FONTS, which outlives a release; the rest in SHELL.
   './' is the page itself, as the navigation handler files it. */
const SHELL_URLS = ['./', ...PRECACHE.map((e) => e.url).filter((u) => !isWoff2(u))];
const FONT_URLS = PRECACHE.map((e) => e.url).filter(isWoff2);

const isMedia = (url: URL) => url.pathname.includes('/photos/') || url.pathname.includes('/sounds/');

const isFont = (url: URL) =>
  url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'
  || (url.origin === self.location.origin && url.pathname.endsWith('.woff2'));

async function purgeBadMedia(): Promise<number> {
  if (!(await caches.has(MEDIA))) return 0;
  const media = await caches.open(MEDIA);
  let dropped = 0;
  for (const req of await media.keys()) {
    const url = new URL(req.url);
    if (!isMediaPath(url.pathname)) continue;
    const res = await media.match(req);
    if (!isGoodMedia(url, res)) {
      await media.delete(req);
      dropped += 1;
    }
  }
  return dropped;
}

/* kiddo.page answers /index.html with a 307 to / (Cloudflare's
   auto-trailing-slash), so fetching it gives a response marked as
   redirected. A browser will not take a redirected response from a
   worker for a page load: Safari says "Response served by service
   worker has redirections", Chrome fails with ERR_FAILED. Filed as the
   offline page, it stopped the app opening without a signal until the
   page had been loaded once more with one. Keep the body and headers,
   drop the redirect. */
async function unredirected(res: Response): Promise<Response> {
  if (!res.redirected) return res;
  return new Response(await res.blob(), {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers,
  });
}

/* The cached page, for a page load with no signal. */
async function offlinePage(): Promise<Response> {
  const hit = (await caches.match('./index.html')) || (await caches.match('./'));
  return hit ? unredirected(hit) : Response.error();
}

/* ---------- Install / activate -------------------------------- */

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const shell = await caches.open(SHELL);
    const fonts = await caches.open(FONTS);
    /* One at a time and forgiving, as before: one 404 must not leave
       the app with no worker at all. A font already on the device is
       not fetched again; its name changes when its contents do. */
    await Promise.all([
      ...SHELL_URLS.map((u) => (async () => {
        const res = await fetch(new Request(u, { cache: 'reload' }));
        if (res.ok) await shell.put(u, await unredirected(res));
      })().catch(() => {})),
      ...FONT_URLS.map(async (u) => {
        if (await fonts.match(u)) return;
        await fonts.add(new Request(u, { cache: 'reload' })).catch(() => {});
      }),
    ]);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keep = new Set([SHELL, MEDIA, FONTS]);
    const names = await caches.keys();
    await Promise.all(names.map((n) => (keep.has(n) ? null : caches.delete(n))));
    if (await caches.has(FONTS)) {
      /* Google's copies, from before the fonts were our own. */
      const fonts = await caches.open(FONTS);
      for (const req of await fonts.keys()) {
        if (!req.url.startsWith(self.location.origin)) await fonts.delete(req);
      }
    }
    if (STALE_MEDIA.length && (await caches.has(MEDIA))) {
      const media = await caches.open(MEDIA);
      await Promise.all(STALE_MEDIA.map((u) => media.delete(u).catch(() => false)));
    }
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable().catch(() => {});
    }
    await self.clients.claim();
    await purgeBadMedia().catch(() => 0);
  })());
});

/* ---------- Fetch ---------------------------------------------- */

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* The page: network first, the cached copy when there is no signal. */
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const fresh = ((await e.preloadResponse) as Response | undefined) || await fetch(req);
        if (fresh.ok) {
          const cache = await caches.open(SHELL);
          cache.put('./index.html', fresh.clone());
        }
        return fresh;
      } catch {
        return offlinePage();
      }
    })());
    return;
  }

  if (url.origin === self.location.origin && isMedia(url)) {
    e.respondWith(cacheFirst(req, MEDIA, (res) => isGoodMedia(url, res)));
    return;
  }

  if (isFont(url)) {
    e.respondWith(cacheFirst(req, FONTS));
    return;
  }

  if (url.origin === self.location.origin) {
    e.respondWith(staleWhileRevalidate(req, SHELL));
  }
});

async function cacheFirst(
  req: Request,
  cacheName: string,
  keep: (res: Response) => boolean = (res) => res.ok || res.type === 'opaque',
): Promise<Response> {
  const hit = await caches.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (keep(res)) {
      const cache = await caches.open(cacheName);
      cache.put(req, res.clone());
    }
    return res;
  } catch {
    return new Response('', { status: 504, statusText: 'Offline' });
  }
}

async function staleWhileRevalidate(req: Request, cacheName: string): Promise<Response> {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  const fresh = fetch(req).then((res) => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  }).catch(() => null);
  return hit || (await fresh) || new Response('', { status: 504 });
}

/* ---------- The offline download ------------------------------- */

const BATCH = 6;
let downloading = false;

self.addEventListener('message', (e) => {
  const msg = (e.data || {}) as { type?: string; urls?: string[] };
  if (msg.type === 'COUNT_MEDIA') e.waitUntil(countMedia(msg.urls));
  if (msg.type === 'SAVE_MEDIA') e.waitUntil(saveMedia(msg.urls));
  if (msg.type === 'PURGE_BAD_MEDIA') {
    e.waitUntil(purgeBadMedia().then((dropped) => tellEveryone({ type: 'MEDIA_PURGED', dropped })));
  }
});

async function tellEveryone(payload: unknown): Promise<void> {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  clients.forEach((c) => c.postMessage(payload));
}

async function countMedia(urls: string[] = []): Promise<void> {
  const cache = await caches.open(MEDIA);
  const absent = await caches.open(ABSENT);
  const missing: string[] = [];
  for (const u of urls) {
    if (!(await cache.match(u)) && !(await absent.match(u))) missing.push(u);
  }
  await tellEveryone({ type: 'MEDIA_COUNT', missing, total: urls.length });
}

async function saveMedia(urls: string[] = []): Promise<void> {
  if (downloading) return;
  downloading = true;
  const cache = await caches.open(MEDIA);
  const absent = await caches.open(ABSENT);
  let done = 0;
  let failed = 0;
  let notOnServer = 0;
  try {
    for (let i = 0; i < urls.length; i += BATCH) {
      const slice = urls.slice(i, i + BATCH);
      await Promise.all(slice.map(async (u) => {
        try {
          if (await cache.match(u)) return;
          if (await absent.match(u)) { notOnServer += 1; return; }
          const res = await fetch(u, { cache: 'no-cache' });
          if (isGoodMedia(new URL(u, self.location.href), res)) {
            await cache.put(u, res.clone());
          } else if (res.status === 404) {
            notOnServer += 1;
            await absent.put(u, new Response(null, { status: 204 }));
          } else {
            failed += 1;
          }
        } catch {
          failed += 1;
        }
      }));
      done += slice.length;
      await tellEveryone({ type: 'MEDIA_PROGRESS', done, total: urls.length });
    }
    await tellEveryone({ type: 'MEDIA_SAVED', total: urls.length, failed, notOnServer });
  } finally {
    downloading = false;
  }
}
