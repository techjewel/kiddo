/// <reference lib="webworker" />
/* Phase 0 stub, built to dist/sw-next.js and registered by nothing.
   It proves the vite-plugin-pwa injectManifest pipeline. Phase 1 moves
   the legacy sw.js into here (same magnet-media and magnet-fonts
   caches, same COUNT_MEDIA / SAVE_MEDIA messages), uses the hashed
   precache list instead of VERSION, and is published as /sw.js. */
import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: Array<{ url: string; revision: string | null }>;
};

precacheAndRoute(self.__WB_MANIFEST);
