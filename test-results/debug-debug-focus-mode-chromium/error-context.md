# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: debug.spec.js >> debug focus mode
- Location: tests/debug.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#focusToggleBtn')
    - locator resolved to <button class="icon-btn" id="focusToggleBtn" aria-pressed="false" title="Hide controls for focus">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="overlay-scrim"></div> from <div id="langWrap" class="overlay">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="overlay-scrim"></div> from <div id="langWrap" class="overlay">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    55 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="overlay-scrim"></div> from <div id="langWrap" class="overlay">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - generic [aria-hidden] [ref=e5]: ★
        - generic [ref=e6]: "0"
        - generic [ref=e7]: stars
      - generic [ref=e8]:
        - button "Sound" [ref=e9] [cursor=pointer]:
          - generic [aria-hidden] [ref=e10]: 🔊
        - button "Focus" [ref=e12] [cursor=pointer]:
          - generic [aria-hidden] [ref=e13]: 👁
        - button "Grown-ups" [ref=e15] [cursor=pointer]:
          - generic [aria-hidden] [ref=e16]: ⚙
    - main [ref=e18]:
      - region "Letters" [ref=e19]:
        - paragraph [ref=e21]: Tap a letter to hear it.
        - button "A a 🍎 Apple" [ref=e22] [cursor=pointer]:
          - generic [ref=e23]:
            - generic [ref=e24]: A
            - generic [ref=e25]: a
          - generic [ref=e26]:
            - generic [ref=e27]: 🍎
            - generic [ref=e28]: Apple
        - generic [ref=e29]:
          - button "Letter A" [ref=e30] [cursor=pointer]: A
          - button "Letter B" [ref=e31] [cursor=pointer]: B
          - button "Letter C" [ref=e32] [cursor=pointer]: C
          - button "Letter D" [ref=e33] [cursor=pointer]: D
          - button "Letter E" [ref=e34] [cursor=pointer]: E
          - button "Letter F" [ref=e35] [cursor=pointer]: F
          - button "Letter G" [ref=e36] [cursor=pointer]: G
          - button "Letter H" [ref=e37] [cursor=pointer]: H
          - button "Letter I" [ref=e38] [cursor=pointer]: I
          - button "Letter J" [ref=e39] [cursor=pointer]: J
          - button "Letter K" [ref=e40] [cursor=pointer]: K
          - button "Letter L" [ref=e41] [cursor=pointer]: L
          - button "Letter M" [ref=e42] [cursor=pointer]: M
          - button "Letter N" [ref=e43] [cursor=pointer]: "N"
          - button "Letter O" [ref=e44] [cursor=pointer]: O
          - button "Letter P" [ref=e45] [cursor=pointer]: P
          - button "Letter Q" [ref=e46] [cursor=pointer]: Q
          - button "Letter R" [ref=e47] [cursor=pointer]: R
          - button "Letter S" [ref=e48] [cursor=pointer]: S
          - button "Letter T" [ref=e49] [cursor=pointer]: T
          - button "Letter U" [ref=e50] [cursor=pointer]: U
          - button "Letter V" [ref=e51] [cursor=pointer]: V
          - button "Letter W" [ref=e52] [cursor=pointer]: W
          - button "Letter X" [ref=e53] [cursor=pointer]: X
          - button "Letter Y" [ref=e54] [cursor=pointer]: "Y"
          - button "Letter Z" [ref=e55] [cursor=pointer]: Z
    - navigation "Sections" [ref=e56]:
      - button "Letters" [ref=e57] [cursor=pointer]:
        - generic [aria-hidden] [ref=e58]: A
        - generic [aria-hidden] [ref=e59]: Letters
      - button "Numbers" [ref=e60] [cursor=pointer]:
        - generic [aria-hidden] [ref=e61]: "1"
        - generic [aria-hidden] [ref=e62]: Numbers
      - button "Fruits, vegetables, clothes, vehicles, animals, birds, flowers, things at home and jobs" [ref=e63] [cursor=pointer]:
        - generic [aria-hidden] [ref=e64]: 🍓
        - generic [aria-hidden] [ref=e65]: Pictures
      - button "Colors" [ref=e66] [cursor=pointer]:
        - generic [aria-hidden] [ref=e67]: 🌈
        - generic [aria-hidden] [ref=e68]: Colors
      - button "Shapes" [ref=e69] [cursor=pointer]:
        - generic [aria-hidden] [ref=e70]: 🔷
        - generic [aria-hidden] [ref=e71]: Shapes
      - button "Body" [ref=e72] [cursor=pointer]:
        - generic [aria-hidden] [ref=e73]: 🙋
        - generic [aria-hidden] [ref=e74]: Body
      - button "Play" [ref=e75] [cursor=pointer]:
        - generic [aria-hidden] [ref=e76]: ★
        - generic [aria-hidden] [ref=e77]: Play
  - dialog [ref=e80]:
    - heading "Which languages?" [level=2] [ref=e81]
    - paragraph [ref=e82]: Letters, numbers and the body screen can be in any of these, one at a time, with a switch at the top to change between them. Pictures, colours, shapes and Play are in English.
    - generic [ref=e83]:
      - button "English The board keeps at least one." [disabled] [pressed] [ref=e84]:
        - generic [ref=e85]:
          - generic [ref=e86]: English
          - generic [ref=e87]: The board keeps at least one.
        - generic [aria-hidden] [ref=e88]: ✓
      - button "বাংলা Bangla" [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - generic [ref=e91]: বাংলা
          - generic [ref=e92]: Bangla
      - button "Español Spanish" [ref=e94] [cursor=pointer]:
        - generic [ref=e95]:
          - generic [ref=e96]: Español
          - generic [ref=e97]: Spanish
      - button "Français French" [ref=e99] [cursor=pointer]:
        - generic [ref=e100]:
          - generic [ref=e101]: Français
          - generic [ref=e102]: French
      - button "العربية Arabic" [ref=e104] [cursor=pointer]:
        - generic [ref=e105]:
          - generic [ref=e106]: العربية
          - generic [ref=e107]: Arabic
    - paragraph [ref=e109]: A grown-up can change this later under ⚙.
    - button "Start" [ref=e110] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('debug focus mode', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   
  6  |   // Wait for app to be ready
  7  |   await page.waitForTimeout(1000);
  8  |   
  9  |   // Check if focus toggle exists
  10 |   const focusToggle = page.locator('#focusToggleBtn');
  11 |   console.log('Focus toggle exists:', await focusToggle.count());
  12 |   
  13 |   // Check initial app class
  14 |   const app = page.locator('.app');
  15 |   const initialClass = await app.getAttribute('class');
  16 |   console.log('Initial app class:', initialClass);
  17 |   
  18 |   // Check if nav is visible
  19 |   const nav = page.locator('.nav');
  20 |   console.log('Nav visible before click:', await nav.isVisible());
  21 |   
  22 |   // Click the toggle
> 23 |   await focusToggle.click();
     |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |   await page.waitForTimeout(500);
  25 |   
  26 |   // Check updated app class
  27 |   const updatedClass = await app.getAttribute('class');
  28 |   console.log('Updated app class:', updatedClass);
  29 |   
  30 |   // Check if nav is hidden
  31 |   console.log('Nav visible after click:', await nav.isVisible());
  32 |   
  33 |   // Check localStorage
  34 |   const storage = await page.evaluate(() => {
  35 |     return localStorage.getItem('magnet-board-v1');
  36 |   });
  37 |   console.log('localStorage:', storage);
  38 | });
  39 | 
```