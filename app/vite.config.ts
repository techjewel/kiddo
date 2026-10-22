import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const legacyIndex = fileURLToPath(new URL('../index.html', import.meta.url));

/* Phase 0: the page is the live index.html, read fresh on every build,
   with one hidden mount point and the Vue entry added. Nothing visible
   changes; the legacy app.js still draws the board. */
function legacyShell(): Plugin {
  return {
    name: 'kiddo-legacy-shell',
    transformIndexHtml: {
      order: 'pre',
      handler() {
        const html = readFileSync(legacyIndex, 'utf8');
        return html.replace(
          '</body>',
          '<div id="kiddo-next" hidden></div>\n<script type="module" src="/src/main.ts"></script>\n</body>',
        );
      },
    },
  };
}

export default defineConfig({
  plugins: [
    legacyShell(),
    vue(),
    VitePWA({
      /* Built but not registered in phase 0: the legacy sw.js still
         owns /sw.js. Phase 1 moves its logic into src/sw-next.ts and
         publishes it as /sw.js, keeping the magnet-media cache. */
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw-next.ts',
      injectRegister: false,
      manifest: false,
      injectManifest: {
        globPatterns: ['index.html', 'assets/*.{js,css}'],
      },
    }),
  ],
  publicDir: 'legacy-public',
  /* A missing file is a 404 here too, as on kiddo.page since v35. */
  appType: 'mpa',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  preview: { port: 8081, strictPort: true },
});
