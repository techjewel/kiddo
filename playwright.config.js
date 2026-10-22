import { defineConfig, devices } from '@playwright/test';

/* The parity suite runs the same tests against two builds:

   KIDDO_TARGET=legacy (default)  the repo root as kiddo.page serves it,
                                  on python's static server, port 8080.
   KIDDO_TARGET=next              app/dist, the Vue + Vite build, on
                                  `vite preview`, port 8081.

   During the migration both must stay green. A test that only makes
   sense for one target says so with test.skip. */
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
  projects: [
    {
      name: `${target}-chromium`,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: server.command,
    url: server.url,
    reuseExistingServer: !process.env.CI,
    timeout: server.timeout,
  },
});
