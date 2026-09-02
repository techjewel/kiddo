/* ============================================================
   Magnet Board — service worker.

   Two jobs. One: make the app open instantly and keep opening when
   the wifi drops, which on a tablet in a back seat is most of the
   time. Two: let a grown-up put the whole thing — every photograph,
   every recording — on the device on purpose, from the panel, rather
   than hoping the child happened to tap all 125 pictures while there
   was a signal.

   Nothing here is generated. The shell list is short enough to read,
   and the media list arrives from the page, which builds it out of the
   same data it draws the tiles from — so adding a photograph to app.js
   adds it here too, with nothing to remember.
   ============================================================ */

/* Bump with the ?v= in index.html. Same number, one thing to change:
   a new SHELL name is what throws away the old CSS and JS. */
const VERSION = 'v20';

const SHELL = `magnet-shell-${VERSION}`;
const MEDIA = 'magnet-media';   /* Photographs and recordings. They are
                                   named for their content and never
                                   change, so this cache outlives a
                                   release — an 8 MB download should not
                                   be thrown away over a CSS fix. */
const FONTS = 'magnet-fonts';

/* MEDIA is keyed by filename and never expires, which is right until a
   picture turns out to be wrong. `rose.jpg` was a sweetbriar — five flat
   pink petals, nothing a child would point at and call a rose — and the
   file was replaced in place. Anyone who already downloaded it holds the
   old one forever, so name it here and this worker drops it once on
   activation and refetches on the next look. Entries can be deleted
   again a release or two later, once the stale copies are gone. */
const STALE_MEDIA = ['./photos/rose.jpg', './photos/sheep.jpg', './photos/mouse.jpg', './photos/monkey.jpg', './photos/chicken.jpg', './photos/horse.jpg', './photos/jackfruit.jpg', './photos/lychee.jpg', './photos/broom.jpg', './photos/chair.jpg', './photos/bed.jpg', './photos/book.jpg', './photos/bottle.jpg', './photos/bowl.jpg', './photos/bucket.jpg', './photos/clock.jpg', './photos/comb.jpg', './photos/door.jpg', './photos/fan.jpg', './photos/fork.jpg', './photos/key.jpg', './photos/mirror.jpg', './photos/plate.jpg', './photos/shoe.jpg', './photos/soap.jpg', './photos/sofa.jpg', './photos/table.jpg', './photos/television.jpg', './photos/toothbrush.jpg'];

/* Everything needed to draw the first screen. The two versioned URLs
   have to match index.html exactly, query string and all — a cache is
   keyed by the whole URL, and `app.js` is a different entry from
   `app.js?v=20`. */
const SHELL_URLS = [
  './',
  './index.html',
  './styles.css?v=20',
  './app.js?v=20',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/favicon-32.png',
  './apple-touch-icon.png',
];

const isMedia = (url) =>
  url.pathname.includes('/photos/') || url.pathname.includes('/sounds/');

const isFont = (url) =>
  url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

/* ---------- Install / activate -------------------------------- */

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    /* One at a time and forgiving: `addAll` is all-or-nothing, so a
       single icon 404 on a half-finished deploy would leave the app
       with no service worker at all. */
    await Promise.all(SHELL_URLS.map((u) =>
      cache.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keep = new Set([SHELL, MEDIA, FONTS]);
    const names = await caches.keys();
    await Promise.all(names.map((n) => (keep.has(n) ? null : caches.delete(n))));
    if (STALE_MEDIA.length && (await caches.has(MEDIA))) {
      const media = await caches.open(MEDIA);
      await Promise.all(STALE_MEDIA.map((u) => media.delete(u).catch(() => {})));
    }
    /* Navigation preload makes the network half of the navigation
       race start before this worker has even woken up. */
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable().catch(() => {});
    }
    await self.clients.claim();
  })());
});

/* ---------- Fetch ---------------------------------------------- */

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  /* The page itself: network first, so a `?v=` bump is picked up the
     next time the app is opened with a signal, and the cached copy is
     there when there isn't one. */
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const fresh = (await e.preloadResponse) || await fetch(req);
        const cache = await caches.open(SHELL);
        cache.put('./index.html', fresh.clone());
        return fresh;
      } catch {
        return (await caches.match('./index.html'))
          || (await caches.match('./'))
          || Response.error();
      }
    })());
    return;
  }

  /* Photographs and recordings: cache first, forever. A lion is a lion.
     This is also what the offline download fills, so a child who has
     already met an animal never waits for it twice. */
  if (url.origin === self.location.origin && isMedia(url)) {
    e.respondWith(cacheFirst(req, MEDIA));
    return;
  }

  /* The fonts. Google serves them immutable under a hashed URL, so the
     same rule applies — and this is the one thing on the page that
     comes from somewhere else, so it is also the one most worth
     having on the device. */
  if (isFont(url)) {
    e.respondWith(cacheFirst(req, FONTS));
    return;
  }

  /* Everything else of ours — the CSS, the script, the icons. Serve
     what we have and refresh it behind the child's back. */
  if (url.origin === self.location.origin) {
    e.respondWith(staleWhileRevalidate(req, SHELL));
  }
});

async function cacheFirst(req, cacheName) {
  const hit = await caches.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res.ok || res.type === 'opaque') {
      const cache = await caches.open(cacheName);
      cache.put(req, res.clone());
    }
    return res;
  } catch {
    /* A missing photograph is already handled — app.js swaps in the
       emoji when the <img> errors. A dead response is how it hears. */
    return new Response('', { status: 504, statusText: 'Offline' });
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  const fresh = fetch(req).then((res) => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  }).catch(() => null);
  return hit || (await fresh) || new Response('', { status: 504 });
}

/* ---------- The offline download -------------------------------
   The page hands over the list — it is the one that knows which
   photographs and recordings exist — and this counts its way through
   it, reporting back often enough that the progress bar moves.
   ---------------------------------------------------------------- */

const BATCH = 6;   /* Enough to keep a phone's connection busy without
                      opening 240 sockets on someone's home wifi. */

let downloading = false;

self.addEventListener('message', (e) => {
  const msg = e.data || {};
  if (msg.type === 'COUNT_MEDIA') e.waitUntil(countMedia(msg.urls));
  if (msg.type === 'SAVE_MEDIA') e.waitUntil(saveMedia(msg.urls));
});

async function tellEveryone(payload) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  clients.forEach((c) => c.postMessage(payload));
}

/* Sends back what is *missing* rather than a count, because the page
   wants to say how many megabytes are left and only it knows that a
   photograph is four times the size of a recording. */
async function countMedia(urls = []) {
  const cache = await caches.open(MEDIA);
  const missing = [];
  for (const u of urls) if (!(await cache.match(u))) missing.push(u);
  await tellEveryone({ type: 'MEDIA_COUNT', missing, total: urls.length });
}

async function saveMedia(urls = []) {
  if (downloading) return;
  downloading = true;
  const cache = await caches.open(MEDIA);
  let done = 0;
  let failed = 0;

  try {
    for (let i = 0; i < urls.length; i += BATCH) {
      const slice = urls.slice(i, i + BATCH);
      await Promise.all(slice.map(async (u) => {
        try {
          if (await cache.match(u)) return;
          const res = await fetch(u, { cache: 'no-cache' });
          if (res.ok) await cache.put(u, res.clone());
          else failed += 1;
        } catch {
          failed += 1;
        }
      }));
      done += slice.length;
      await tellEveryone({ type: 'MEDIA_PROGRESS', done, total: urls.length });
    }
    await tellEveryone({ type: 'MEDIA_SAVED', total: urls.length, failed });
  } finally {
    downloading = false;
  }
}
