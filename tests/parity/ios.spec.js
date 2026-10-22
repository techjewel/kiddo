import { test, expect } from '@playwright/test';

/* iOS Safari checks, for the reference devices: iPhone 15 Pro Max and
   iPad Air, portrait and landscape.

   Playwright WebKit is the same engine as Safari, but not iOS. It does
   not block audio before a tap, it never evicts storage, it has no
   home-screen mode and it reports every safe-area inset as 0. So these
   tests check the part that is ours: that the app asks for audio inside
   a tap, sizes its targets, fits the screen, declares itself for the
   home screen, and stores the offline download without trouble. The
   rest needs a real device; see the README.

   test.fail() marks a known gap. It passes while the gap is there and
   turns red once it is fixed, so the marker gets removed. */

const isWebKit = ({ browserName }) => browserName === 'webkit';

async function boot(page, saved = { langs: ['en', 'bn'], lang: 'en', chosen: true }) {
  await page.addInitScript((s) => {
    if (!sessionStorage.getItem('seeded')) {
      localStorage.setItem('magnet-board-v1', JSON.stringify(s));
      sessionStorage.setItem('seeded', '1');
    }
  }, saved);
  await page.goto('/');
  await page.waitForFunction(() => typeof LETTERS_BY_LANG !== 'undefined');
}

/* Records, for every way the app makes a sound, whether the page had a
   live user gesture at that moment. iOS only lets audio start inside
   one. navigator.userActivation is in Safari 16.4 and later. */
function recordSound() {
  window.__sound = [];
  const active = () => (navigator.userActivation ? navigator.userActivation.isActive : null);
  const log = (kind, what, el) => window.__sound.push({ kind, what, el, active: active() });
  const play = HTMLMediaElement.prototype.play;
  let ids = 0;
  HTMLMediaElement.prototype.play = function () {
    if (!this.__id) this.__id = ++ids;
    /* The moment of silence the app plays on the first touch, to unlock
       its one audio element. */
    if (this.src.startsWith('data:')) log('unlock', 'silence', this.__id);
    else log('clip', this.src.split('/').slice(-2).join('/'), this.__id);
    return play.call(this);
  };
  if ('speechSynthesis' in window) {
    const speak = speechSynthesis.speak.bind(speechSynthesis);
    speechSynthesis.speak = (u) => { log('voice', u.text); return speak(u); };
  }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (AC) {
    window.AudioContext = new Proxy(AC, {
      construct(T, args) { log('beeps', 'new AudioContext'); return new T(...args); },
    });
  }
}

const SCREENS = ['letters', 'numbers', 'pictures', 'colors', 'shapes', 'body', 'play'];

test.describe('iOS Safari', () => {
  test.beforeEach(({ browserName }) => {
    test.skip(browserName !== 'webkit', 'iOS checks run on the WebKit projects');
  });

  test('no sound before the first tap', async ({ page }) => {
    await page.addInitScript(recordSound);
    await boot(page);
    await page.waitForTimeout(1500);
    expect(await page.evaluate(() => window.__sound)).toEqual([]);
  });

  test('a tap starts its sound inside the tap', async ({ page }, info) => {
    await page.addInitScript(recordSound);
    await boot(page, { langs: ['en', 'bn'], lang: 'bn', chosen: true });

    // Bangla letters are recorded clips: letter, then the word.
    await page.locator('#screen-letters .magnet').first().tap();
    await page.waitForTimeout(2500);
    const bangla = await page.evaluate(() => window.__sound);
    // English letters use the device voice, or a file when there is none.
    await page.evaluate(() => {
      const s = JSON.parse(localStorage.getItem('magnet-board-v1'));
      localStorage.setItem('magnet-board-v1', JSON.stringify({ ...s, lang: 'en' }));
    });
    await page.reload();
    await page.waitForFunction(() => typeof LETTERS_BY_LANG !== 'undefined');
    await page.locator('#screen-letters .magnet').first().tap();
    await page.waitForTimeout(800);
    const english = await page.evaluate(() => window.__sound);
    expect(english.length, 'an English letter makes a sound').toBeGreaterThan(0);
    for (const s of english) expect(s.active, `English ${s.kind} ${s.what} started outside a tap`).toBe(true);

    const sound = bangla;
    const first = sound.find((s) => s.kind === 'clip');
    expect(first, 'a Bangla letter plays a clip').toBeTruthy();
    expect(first.active, `${first.what} started outside a tap`).toBe(true);
    for (const s of sound.filter((x) => x.kind !== 'clip' || x === first)) {
      expect(s.active, `${s.kind} ${s.what} started outside a tap`).toBe(true);
    }
    /* The word clip after a letter starts from the first clip's `ended`
       event, a moment after the tap. iOS allows that only on an element
       that has already played from a tap, so it must be the same one. */
    const followOn = sound.filter((s) => s.kind === 'clip' && s !== first);
    expect(followOn.length, 'a Bangla letter is followed by its word').toBeGreaterThan(0);
    for (const s of followOn) {
      expect(s.el, `${s.what} plays on a different audio element than the letter`).toBe(first.el);
    }
    info.annotations.push({
      type: 'ios-audio',
      description: `follow-on clips: ${followOn.map((s) => `${s.what} (gesture ${s.active})`).join(', ') || 'none'}; English: ${english.map((s) => `${s.kind} ${s.what}`).join(', ')}`,
    });
  });

  test('tiles and tabs are big enough to tap', async ({ page }) => {
    await boot(page);
    const MIN = 44; // Apple's minimum, in points
    /* Controls allowed under 44 points. None, since phase 1. */
    const KNOWN_SMALL = new Set([]);
    for (const screen of SCREENS) {
      await page.tap(`[data-screen="${screen}"]`);
      await page.waitForTimeout(250);
      const small = await page.evaluate((min) => {
        const out = [];
        for (const e of document.querySelectorAll('button, a[href], [role="button"], .magnet')) {
          if (!e.offsetParent || getComputedStyle(e).visibility === 'hidden') continue;
          const r = e.getBoundingClientRect();
          if (!r.width || !r.height) continue;
          if (r.width < min - 0.5 || r.height < min - 0.5) {
            out.push({ key: e.id || e.classList[0] || e.tagName, size: `${Math.round(r.width)}x${Math.round(r.height)}` });
          }
        }
        return out;
      }, MIN);
      const unexpected = small.filter((s) => !KNOWN_SMALL.has(s.key));
      expect(unexpected, `small targets on ${screen}`).toEqual([]);
    }
  });

  test('grown-up buttons reach 44 points', async ({ page }) => {
    await boot(page);
    await page.tap('[data-screen="play"]');
    const sizes = await page.evaluate(() =>
      [...document.querySelectorAll('#soundBtn, #focusToggleBtn, #parentBtn, .seg, #repeatAsk')]
        .filter((e) => e.offsetParent)
        .map((e) => Math.min(e.getBoundingClientRect().width, e.getBoundingClientRect().height)));
    expect(Math.min(...sizes)).toBeGreaterThanOrEqual(44);
  });

  test('every screen fits without sideways scrolling', async ({ page }) => {
    await boot(page);
    for (const screen of SCREENS) {
      await page.tap(`[data-screen="${screen}"]`);
      await page.waitForTimeout(250);
      const fit = await page.evaluate(() => ({
        overflowX: document.documentElement.scrollWidth - innerWidth,
        navBottom: document.querySelector('.nav').getBoundingClientRect().bottom,
        height: innerHeight,
      }));
      expect(fit.overflowX, `${screen} scrolls sideways`).toBeLessThanOrEqual(0);
      expect(fit.navBottom, `${screen} tab bar is off screen`).toBeLessThanOrEqual(fit.height);
    }
  });

  test('ready for the home screen', async ({ page, request }) => {
    await page.goto('/');
    const head = await page.evaluate(() => ({
      viewport: document.querySelector('meta[name="viewport"]')?.content,
      capable: document.querySelector('meta[name="apple-mobile-web-app-capable"]')?.content,
      title: document.querySelector('meta[name="apple-mobile-web-app-title"]')?.content,
      icon: document.querySelector('link[rel="apple-touch-icon"]')?.getAttribute('href'),
      manifest: document.querySelector('link[rel="manifest"]')?.getAttribute('href'),
    }));
    expect(head.viewport).toContain('viewport-fit=cover');
    expect(head.capable).toBe('yes');
    expect(head.title).toBeTruthy();
    expect(head.icon).toBeTruthy();

    const icon = await request.get(head.icon);
    expect(icon.ok()).toBe(true);
    const png = await icon.body();
    expect(png.readUInt32BE(16), 'apple-touch-icon width').toBe(180);
    expect(png.readUInt32BE(20), 'apple-touch-icon height').toBe(180);

    const manifest = await (await request.get(head.manifest)).json();
    expect(manifest.display).toBe('standalone');
    expect(manifest.start_url).toBeTruthy();
  });

  test('opens cleanly as a home-screen app', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    /* What Safari reports when started from the home screen. */
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'standalone', { value: true });
      const mm = window.matchMedia.bind(window);
      window.matchMedia = (q) => (/display-mode:\s*standalone/.test(q)
        ? { matches: true, media: q, onchange: null, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return false; } }
        : mm(q));
    });
    await boot(page);
    await page.goto('/?screen=play');
    await expect(page.locator('#screen-play')).toBeVisible();
    // Safari never offers an install prompt, so the button stays hidden.
    await expect(page.locator('#installBtn')).toBeHidden();
    expect(errors).toEqual([]);
  });

  test('the page respects the safe area on all four sides', async ({ page }) => {
    await page.goto('/');
    const uses = await page.evaluate(() => {
      const found = new Set();
      for (const sheet of document.styleSheets) {
        let rules; try { rules = sheet.cssRules; } catch { continue; }
        for (const r of rules) {
          for (const m of (r.cssText || '').matchAll(/safe-area-inset-(top|bottom|left|right)/g)) found.add(m[1]);
        }
      }
      return [...found].sort();
    });
    expect(uses).toEqual(['bottom', 'left', 'right', 'top']);
  });

  test('landscape iPhone keeps clear of the Dynamic Island', async ({ page }, info) => {
    test.skip(!info.project.name.endsWith('iphone-15-pro-max-landscape'), 'iPhone landscape only');
    await page.goto('/');
    /* WebKit here reports every inset as 0, so this checks the rule
       itself: the whole app is padded by the left and right insets. */
    const app = await page.evaluate(() => {
      for (const sheet of document.styleSheets) {
        let rules; try { rules = sheet.cssRules; } catch { continue; }
        for (const r of rules) {
          if (r.selectorText === '.app') {
            return { left: r.style.getPropertyValue('padding-left'), right: r.style.getPropertyValue('padding-right') };
          }
        }
      }
      return null;
    });
    expect(app?.left).toContain('safe-area-inset-left');
    expect(app?.right).toContain('safe-area-inset-right');
  });

  test('the whole offline download fits and stays in the cache', async ({ page }, info) => {
    test.skip(!info.project.name.endsWith('-ipad-air'), 'Runs once, on iPad Air portrait');
    test.setTimeout(180000);
    await boot(page);
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.reload();
    await page.waitForFunction(() => !!navigator.serviceWorker.controller);
    const result = await page.evaluate(() => new Promise((resolve) => {
      const urls = mediaUrls();
      navigator.serviceWorker.addEventListener('message', async (e) => {
        if (e.data?.type !== 'MEDIA_SAVED') return;
        const cache = await caches.open('magnet-media');
        const notCached = [];
        for (const u of urls) if (!(await cache.match(u))) notCached.push(u);
        const absent = [];
        for (const u of notCached) if ((await fetch(u, { method: 'HEAD' })).status === 404) absent.push(u);
        const est = navigator.storage?.estimate ? await navigator.storage.estimate() : {};
        resolve({ asked: urls.length, reportedFailed: e.data.failed, notCached: notCached.length,
          absent: absent.length, absentSample: absent.slice(0, 3), usage: est.usage, quota: est.quota,
          canPersist: typeof navigator.storage?.persist === 'function' });
      });
      navigator.serviceWorker.controller.postMessage({ type: 'SAVE_MEDIA', urls });
    }));
    info.annotations.push({ type: 'ios-storage', description: JSON.stringify(result) });
    // Everything that exists on the server is in the cache.
    expect(result.notCached, 'files that exist but were not cached').toBe(result.absent);
    // Light budget: the whole download stays well under 100 MB.
    if (result.usage) expect(result.usage).toBeLessThan(100 * 1024 * 1024);
  });

  test('the download asks Safari to keep it', async ({ page }) => {
    await page.addInitScript(() => {
      window.__persist = 0;
      if (navigator.storage) {
        navigator.storage.persist = () => { window.__persist += 1; return Promise.resolve(true); };
      }
    });
    await boot(page);
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.evaluate(() => document.getElementById('offlineBtn').click());
    expect(await page.evaluate(() => window.__persist)).toBe(1);
  });

  test('download says done when only never-recorded files are left', async ({ page }, info) => {
    test.skip(!info.project.name.endsWith('-ipad-air'), 'Runs once, on iPad Air portrait');
    test.setTimeout(180000);
    await boot(page);
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.reload();
    await page.waitForFunction(() => !!navigator.serviceWorker.controller);
    const failed = await page.evaluate(() => new Promise((resolve) => {
      navigator.serviceWorker.addEventListener('message', (e) => {
        if (e.data?.type === 'MEDIA_SAVED') resolve(e.data.failed);
      });
      navigator.serviceWorker.controller.postMessage({ type: 'SAVE_MEDIA', urls: mediaUrls() });
    }));
    expect(failed).toBe(0);
    // And the grown-ups panel does not keep asking for them.
    const left = await page.evaluate(() => new Promise((resolve) => {
      navigator.serviceWorker.addEventListener('message', (e) => {
        if (e.data?.type === 'MEDIA_COUNT') resolve(e.data.missing.length);
      });
      navigator.serviceWorker.controller.postMessage({ type: 'COUNT_MEDIA', urls: mediaUrls() });
    }));
    expect(left).toBe(0);
  });

  test('light speed budget on iPhone', async ({ page }, info) => {
    test.skip(!info.project.name.endsWith('-iphone-15-pro-max'), 'iPhone portrait only');
    await boot(page);
    await expect(page.locator('#screen-letters .magnet').first()).toBeVisible();
    const t = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      const res = performance.getEntriesByType('resource');
      const size = (re) => res.filter((r) => re.test(r.name)).reduce((n, r) => n + (r.decodedBodySize || 0), 0);
      return { dcl: Math.round(nav.domContentLoadedEventEnd), js: size(/\.m?js(\?|$)/), css: size(/\.css(\?|$)/) };
    });
    info.annotations.push({ type: 'speed', description: JSON.stringify(t) });
    expect(t.dcl, 'DOMContentLoaded on a local server, ms').toBeLessThan(2000);
    expect(t.js, 'JS, uncompressed bytes').toBeLessThan(260 * 1024);
    expect(t.css, 'CSS, uncompressed bytes').toBeLessThan(80 * 1024);
  });
});
