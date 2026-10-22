/* Phase 0: the new build serves the legacy app as it is. This copies
   the files kiddo.page serves today from the repo root into
   app/legacy-public/, which Vite uses as its public folder, so the
   build output has every legacy URL unchanged. index.html is read by
   the kiddo-legacy-shell plugin in vite.config.ts instead.

   Each later phase moves one piece out of this list into src/. When
   the list is empty, the legacy app is gone (phase 7). */
import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../..', import.meta.url));
const out = fileURLToPath(new URL('../legacy-public', import.meta.url));

export const LEGACY_FILES = [
  'app.js', 'styles.css', 'sw.js', 'manifest.webmanifest', '_headers',
  'favicon.ico', 'apple-touch-icon.png', 'og.png', '404.html',
  'icons', 'photos', 'sounds',
];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const f of LEGACY_FILES) {
  const from = join(root, f);
  if (!existsSync(from)) throw new Error(`sync-legacy: missing ${f}`);
  cpSync(from, join(out, f), {
    recursive: true,
    filter: (src) => !src.includes('/.gstack') && !src.endsWith('.md') && !src.endsWith('credits.json'),
  });
}
console.log(`sync-legacy: ${LEGACY_FILES.length} entries copied to app/legacy-public/`);
