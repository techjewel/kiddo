import { test, expect } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/* Parity checks that pin down what must not change in the migration:
   item ids and tile colours (saved progress and a child's memory of
   the board depend on them), which clip each language plays, the
   saved-board shape, and the Arabic English names.

   They read the legacy globals (LETTERS_BY_LANG, allItems, ...). When a
   phase replaces those, it exposes the same data for these tests. */

const FIXTURE = join(process.cwd(), 'tests/parity/fixtures/items.json');

async function boot(page, saved) {
  if (saved) {
    await page.addInitScript((s) => {
      if (!sessionStorage.getItem('seeded')) {
        localStorage.setItem('magnet-board-v1', JSON.stringify(s));
        sessionStorage.setItem('seeded', '1');
      }
    }, saved);
  }
  await page.goto('/');
  await page.waitForFunction(() => typeof LETTERS_BY_LANG !== 'undefined');
}

test('item ids and tile colours match the snapshot', async ({ page }) => {
  await boot(page);
  const items = await page.evaluate(() => {
    const row = (it) => `${it.id}|${it.face ?? ''}|${colorFor(it)}`;
    const out = { letters: {}, numbers: {} };
    for (const c of LANG_CODES) {
      out.letters[c] = LETTERS_BY_LANG[c].map(row);
      out.numbers[c] = NUMBERS_BY_LANG[c].map(row);
    }
    out.pictures = pictureAll.map((it) => `${it.id}|${it.slug}|${colorFor(it)}`);
    out.colors = colorItems.map(row);
    out.shapes = shapeItems.map((it) => `${it.id}|${colorFor(it)}`);
    out.body = bodyItems.map((it) => `${it.id}|${it.key}`);
    return out;
  });
  if (process.env.UPDATE_SNAPSHOT) writeFileSync(FIXTURE, JSON.stringify(items, null, 1) + '\n');
  expect(items).toEqual(JSON.parse(readFileSync(FIXTURE, 'utf8')));
});

test('each language with recordings plays its own clip for a letter', async ({ page }) => {
  await boot(page);
  const result = await page.evaluate(async () => {
    const out = {};
    const orig = HTMLMediaElement.prototype.play;
    for (const code of LANG_CODES) {
      const L = LANGS[code];
      if (!L.clips || !L.clips.letter) continue;
      out[code] = [];
      for (const it of LETTERS_BY_LANG[code].slice(0, 3)) {
        let played = null;
        HTMLMediaElement.prototype.play = function () { played = this.src; return Promise.resolve(); };
        state.muted = false;
        sayLetter(it);
        const want = new URL(L.clips.letter(it), location.href).href;
        out[code].push(played === want ? 'ok' : `${it.face}: ${played} != ${want}`);
      }
    }
    HTMLMediaElement.prototype.play = orig;
    return out;
  });
  expect(Object.keys(result).sort()).toEqual(['ar', 'bn', 'es', 'fr']);
  for (const [code, rows] of Object.entries(result)) {
    expect(rows, code).toEqual(['ok', 'ok', 'ok']);
  }
});

test('a tapped letter is saved in the magnet-board-v1 shape', async ({ page }) => {
  await boot(page, { stars: 3, seen: [], muted: true, focusMode: false, langs: ['en'], lang: 'en', chosen: true });
  await page.locator('#lettersGrid .magnet').first().click();
  await page.waitForTimeout(300);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('magnet-board-v1')));
  expect(Object.keys(saved).sort()).toEqual(['chosen', 'focusMode', 'lang', 'langs', 'muted', 'seen', 'stars']);
  expect(saved.stars).toBe(3);
  expect(saved.seen).toContain('LA');
  await page.reload();
  await page.waitForFunction(() => typeof state !== 'undefined');
  expect(await page.evaluate(() => state.seen.has('LA'))).toBe(true);
});

test('Arabic letters show their English names, the game does not', async ({ page }) => {
  await boot(page, { stars: 0, seen: [], muted: true, focusMode: false, langs: ['en', 'ar'], lang: 'ar', chosen: true });
  const names = await page.locator('#lettersGrid .magnet-latin').allTextContents();
  expect(names).toHaveLength(28);
  expect(names.slice(0, 3)).toEqual(['Alif', 'Ba', 'Ta']);
  expect(names).toContain('Ṭa');
  expect(names).toContain('Ḥa');
});

test('the Vue entry boots in the new build', async ({ page }, info) => {
  test.skip(info.config.metadata.target !== 'next', 'new build only');
  await boot(page);
  await expect(page.locator('#kiddo-next [data-kiddo-next="ready"]')).toHaveCount(1);
});
