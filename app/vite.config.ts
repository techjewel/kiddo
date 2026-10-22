import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const legacyIndex = `${repoRoot}index.html`;
const legacyScript = `${repoRoot}app.js`;

/* The page is the legacy index.html, read fresh on every build, with
   three changes:
   - the Google Fonts links go; src/legacy.css brings our own copies;
   - styles.css?v= becomes src/legacy.css, which Vite bundles and hashes;
   - app.js?v= becomes /assets/app-<hash>.js in a build. It stays a
     classic script, because its globals are what the parity tests read
     and the board still runs on it.
   And the hidden Vue mount from phase 0. */
function legacyShell(): Plugin {
  let isBuild = false;
  let scriptName = '';
  let scriptSource = '';
  return {
    name: 'kiddo-legacy-shell',
    configResolved(c) { isBuild = c.command === 'build'; },
    buildStart() {
      if (!isBuild) return;
      scriptSource = readFileSync(legacyScript, 'utf8');
      const hash = createHash('sha256').update(scriptSource).digest('hex').slice(0, 8);
      scriptName = `assets/app-${hash}.js`;
      this.emitFile({ type: 'asset', fileName: scriptName, source: scriptSource });
    },
    transformIndexHtml: {
      order: 'pre',
      handler() {
        let html = readFileSync(legacyIndex, 'utf8');
        const swap = (re: RegExp, to: string, what: string) => {
          if (!re.test(html)) throw new Error(`kiddo-legacy-shell: ${what} not found in index.html`);
          html = html.replace(re, to);
        };
        swap(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*/, '', 'fonts preconnect');
        swap(/<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin>\s*/, '', 'fonts preconnect');
        swap(/<link href="https:\/\/fonts\.googleapis\.com\/css2[^"]*" rel="stylesheet">/, '', 'Google Fonts link');
        swap(/<link rel="stylesheet" href="styles\.css\?v=\d+">/, '<link rel="stylesheet" href="/src/legacy.css">', 'styles.css link');
        if (isBuild) {
          swap(/<script src="app\.js\?v=\d+"><\/script>/, `<script src="/${scriptName}"></script>`, 'app.js script');
        }
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
      /* Our own worker, published as /sw.js: the URL the live site has
         always registered, so every tablet picks it up as an update. */
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      injectRegister: false,
      manifest: false,
      injectManifest: {
        globPatterns: [
          'index.html',
          'assets/*.{js,css}',
          /* The scripts the app writes in. latin-ext, Vietnamese and the rest stay
             on the server and come only if a page ever needs them. */
          'assets/*-{latin,bengali,arabic}-[0-9]*.woff2',
          'manifest.webmanifest',
          'icons/icon-192.png',
          'icons/icon-512.png',
          'icons/favicon-32.png',
          'apple-touch-icon.png',
        ],
        /* app.js and the hashed assets are named after their contents. */
        dontCacheBustURLsMatching: /^assets\//,
      },
    }),
  ],
  publicDir: 'legacy-public',
  /* A missing file is a 404 here too, as on kiddo.page since v35. */
  appType: 'mpa',
  server: { fs: { allow: ['..'] } },
  build: {
    /* The repo root's dist/ is what Cloudflare serves after the cutover. */
    outDir: '../dist',
    emptyOutDir: true,
    /* Small inline fonts would dodge the font cache; keep them as files. */
    assetsInlineLimit: (file) => (file.endsWith('.woff2') ? false : undefined),
  },
  preview: { port: 8081, strictPort: true },
});
