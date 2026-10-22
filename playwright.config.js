import { defineConfig, devices } from '@playwright/test';

/* The parity suite runs the same tests against two builds:

   KIDDO_TARGET=legacy (default)  the repo root as kiddo.page serves it,
                                  on python's static server, port 8080.
   KIDDO_TARGET=next              app/dist, the Vue + Vite build, on
                                  `vite preview`, port 8081.

   During the migration both must stay green. A test that only makes
   sense for one target says so with test.skip. */
/* Reference devices are Jewel's: an iPhone 15 Pro Max and an iPad Air,
   both on Safari. Playwright WebKit is the closest stand-in we can run in
   CI. It is the same engine, but it is not iOS: no autoplay policy, no
   home-screen install, no storage eviction, no notch. tests/parity/ios.spec.js
   checks what WebKit can show and says what it cannot.

   Playwright has no "iPad Air" descriptor. This is the 11 inch iPad Air
   (M2 and later): 820 x 1180 points, 2x. The viewport leaves room for
   Safari's toolbar, as Playwright's own iPad descriptors do. */
const ipadAir = {
  userAgent: 'Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1',
  screen: { width: 820, height: 1180 },
  viewport: { width: 820, height: 1106 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  defaultBrowserType: 'webkit',
};
const ipadAirLandscape = {
  ...ipadAir,
  screen: { width: 1180, height: 820 },
  viewport: { width: 1180, height: 746 },
};

const target = process.env.KIDDO_TARGET === 'next' ? 'next' : 'legacy';

const server = target === 'next'
  ? {
      command: 'npm --prefix app run build && npm --prefix app run preview',
      url: 'http://localhost:8081',
      timeout: 240000,
    }
  : {
      command: 'python3 -m http.server 8080',
      url: 'http://localhost:8080',
      timeout: 120000,
    };

export default defineConfig({
  testDir: './tests/parity',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: process.env.CI ? 'line' : 'html',
  metadata: { target },
  use: {
    baseURL: server.url,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  /* Run one with --project, e.g. --project=legacy-iphone-15-pro-max.
     The four WebKit projects are the reference. Desktop Chrome stays as a
     quick check and for the tests that need a keyboard. */
  projects: [
    { name: `${target}-iphone-15-pro-max`, use: { ...devices['iPhone 15 Pro Max'] } },
    { name: `${target}-iphone-15-pro-max-landscape`, use: { ...devices['iPhone 15 Pro Max landscape'] } },
    { name: `${target}-ipad-air`, use: { ...ipadAir } },
    { name: `${target}-ipad-air-landscape`, use: { ...ipadAirLandscape } },
    { name: `${target}-chromium`, use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: server.command,
    url: server.url,
    reuseExistingServer: !process.env.CI,
    timeout: server.timeout,
  },
});
