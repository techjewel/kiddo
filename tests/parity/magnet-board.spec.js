import { test, expect } from '@playwright/test';

// Start with the language picker already answered. Seeded once per
// tab, so a reload keeps what the test changed (focus mode, say).
async function dismissLanguageDialog() {}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('seeded')) {
      localStorage.setItem('magnet-board-v1', JSON.stringify({ langs: ['en', 'bn'], lang: 'en', chosen: true }));
      sessionStorage.setItem('seeded', '1');
    }
  });
});

// Back up to the home menu, then open a module from its card.
async function openScreen(page, screen) {
  while (await page.locator('#backBtn').isVisible()) await page.click('#backBtn');
  await page.click(`.home-card[data-screen="${screen}"]`);
}

// The grown-up buttons open only when held.
async function hold(page, selector, ms = 1400) {
  const box = await page.locator(selector).boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(ms);
  await page.mouse.up();
}

test.describe('Magnet Board', () => {
  test('app boots on the home menu without errors', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    await page.goto('/');
    await dismissLanguageDialog(page);
    await expect(page.locator('.board')).toBeVisible();
    await expect(page.locator('#screen-home')).toBeVisible();
    await expect(page.locator('.home-card')).toHaveCount(11);
    await expect(page.locator('#backBtn')).not.toBeVisible();
    expect(consoleErrors).toHaveLength(0);
  });

  test('home menu opens each module and back returns home', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    for (const screen of ['letters', 'numbers', 'pictures', 'colors', 'shapes', 'body',
      'actions', 'feelings', 'opposites', 'where', 'play']) {
      await page.click(`.home-card[data-screen="${screen}"]`);
      await expect(page.locator(`#screen-${screen}`)).toBeVisible();
      await expect(page.locator('#screen-home')).not.toBeVisible();
      await page.click('#backBtn');
      await expect(page.locator('#screen-home')).toBeVisible();
    }
  });

  test('browser back goes up one level at a time', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await page.click('.home-card[data-screen="pictures"]');
    await page.click('.shelf-card[data-group="bird"]');
    await expect(page.locator('#birdGrid')).toBeVisible();
    await page.goBack();
    await expect(page.locator('#shelfMenu')).toBeVisible();
    await expect(page.locator('#birdGrid')).not.toBeVisible();
    await page.goBack();
    await expect(page.locator('#screen-home')).toBeVisible();
  });

  test('a ?screen= shortcut opens on top of the home menu', async ({ page }) => {
    await page.goto('/?screen=numbers');
    await dismissLanguageDialog(page);
    await expect(page.locator('#screen-numbers')).toBeVisible();
    await page.click('#backBtn');
    await expect(page.locator('#screen-home')).toBeVisible();
  });

  test('Pictures: Vehicles shelf loads and tiles work', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await openScreen(page, 'pictures');
    await expect(page.locator('.shelf-card')).toHaveCount(9);
    await page.click('.shelf-card[data-group="vehicle"]');
    await expect(page.locator('#vehicleGrid')).toBeVisible();
    const vehicleTiles = page.locator('#vehicleGrid .magnet');
    await expect(vehicleTiles.first()).toBeVisible();
    await vehicleTiles.first().click();
    await expect(page.locator('#picView')).toBeVisible();
  });

  test('Pictures: Clothes shelf loads and works', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await openScreen(page, 'pictures');
    await page.click('.shelf-card[data-group="clothes"]');
    await expect(page.locator('#clothesGrid')).toBeVisible();
    const clothesTiles = page.locator('#clothesGrid .magnet');
    await expect(clothesTiles.first()).toBeVisible();
    await clothesTiles.first().click();
    await expect(page.locator('#picView')).toBeVisible();
  });

  test('grown-up panel opens only on a held press', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await page.click('#parentBtn');
    await page.waitForTimeout(300);
    await expect(page.locator('#parentWrap')).toBeHidden();
    await hold(page, '#parentBtn');
    await expect(page.locator('#parentWrap')).toBeVisible();
  });

  test('Focus mode: hides chrome and keeps toggle visible', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await openScreen(page, 'letters');
    await expect(page.locator('.score')).toBeVisible();
    await expect(page.locator('#soundBtn')).toBeVisible();
    await expect(page.locator('#parentBtn')).toBeVisible();
    await expect(page.locator('#backBtn')).toBeVisible();
    const focusToggle = page.locator('#focusToggleBtn');
    await expect(focusToggle).toBeVisible();

    // A tap is not enough.
    await focusToggle.click();
    await expect(page.locator('#backBtn')).toBeVisible();

    await hold(page, '#focusToggleBtn');
    await expect(page.locator('.score')).not.toBeVisible();
    await expect(page.locator('#soundBtn')).not.toBeVisible();
    await expect(page.locator('#parentBtn')).not.toBeVisible();
    await expect(page.locator('#backBtn')).not.toBeVisible();
    await expect(focusToggle).toBeVisible();

    await hold(page, '#focusToggleBtn');
    await expect(page.locator('.score')).toBeVisible();
    await expect(page.locator('#soundBtn')).toBeVisible();
    await expect(page.locator('#parentBtn')).toBeVisible();
    await expect(page.locator('#backBtn')).toBeVisible();
  });

  test('Focus mode: hides shuffle buttons and hint', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await openScreen(page, 'pictures');
    await page.click('.shelf-card[data-group="fruit"]');
    const shuffleBtn = page.locator('#shuffleBtn');
    await expect(shuffleBtn).toBeVisible();
    await hold(page, '#focusToggleBtn');
    await expect(shuffleBtn).not.toBeVisible();
    await expect(page.locator('#picsHint')).not.toBeVisible();
  });

  test('Focus mode: persists after page reload', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    const focusToggle = page.locator('#focusToggleBtn');
    await hold(page, '#focusToggleBtn');
    await expect(page.locator('.score')).not.toBeVisible();
    await page.reload();
    await expect(focusToggle).toBeVisible();
    await expect(page.locator('.score')).not.toBeVisible();
    await hold(page, '#focusToggleBtn');
    await expect(page.locator('.score')).toBeVisible();
  });

  test('What\'s that? mode still works', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await openScreen(page, 'pictures');
    await page.click('.shelf-card[data-group="fruit"]');
    const whatsThisBtn = page.locator('#focusBtn');
    await expect(whatsThisBtn).toBeVisible();
    await whatsThisBtn.click();
    await expect(page.locator('#focusStage')).toBeVisible();
  });

  test('Play opens on a game list, and the sound game asks with a recording', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await openScreen(page, 'play');
    await expect(page.locator('.game-card')).toHaveCount(12);
    await expect(page.locator('#playGame')).toBeHidden();
    await page.click('.game-card[data-set="sounds"]');
    await expect(page.locator('#ask')).toHaveText('Who makes this sound?');
    const ids = await page.locator('#choices .magnet').evaluateAll((els) => els.map((e) => e.dataset.id));
    expect(ids).toHaveLength(4);
    const allHaveSound = await page.evaluate((list) => list.every((id) => hasSound(byId.get(id).word)), ids);
    expect(allHaveSound).toBe(true);
    await page.click('#backBtn');
    await expect(page.locator('#playMenu')).toBeVisible();
  });

  test('the turtle claps a word out in beats', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    await openScreen(page, 'pictures');
    await page.click('.shelf-card[data-group="fruit"]');
    await page.locator('#fruitGrid .magnet', { hasText: 'Banana' }).click();
    await page.click('#screen-pictures .speak-btn--slow');
    await expect(page.locator('#screen-pictures .beat')).toHaveText(['Ba', 'na', 'na']);
    // Any other tap takes the beats away.
    await page.locator('#fruitGrid .magnet').first().click();
    await expect(page.locator('#screen-pictures .beat')).toHaveCount(0);
  });

  test('word screens: a tile names itself on the panel', async ({ page }) => {
    await page.goto('/');
    for (const [screen, word] of [['feelings', 'Sad'], ['where', 'Under'], ['opposites', 'Small']]) {
      await openScreen(page, screen);
      await page.locator(`#screen-${screen} .grid .magnet`, { hasText: word }).click();
      await expect(page.locator(`#screen-${screen} .sc-word`)).toHaveText(word);
    }
    // An opposite stands next to its partner, dimmed.
    await expect(page.locator('#screen-opposites .sc-art-img')).toHaveCount(2);
    await expect(page.locator('#screen-opposites .sc-art-img.is-dim')).toHaveCount(1);
  });

  test('actions are not downloaded until the screen opens', async ({ page }) => {
    const asked = [];
    page.on('request', (r) => { if (r.url().includes('/photos/action-')) asked.push(r.url()); });
    await page.goto('/');
    await page.waitForTimeout(800);
    expect(asked).toEqual([]);
    await openScreen(page, 'actions');
    await expect(page.locator('#screen-actions .grid .magnet')).toHaveCount(15);
  });

  test('the feelings game asks who feels what', async ({ page }) => {
    await page.goto('/');
    await openScreen(page, 'play');
    await page.click('.game-card[data-set="feelings"]');
    await expect(page.locator('#ask')).toHaveText(/^Who is \w+\?$/);
    await expect(page.locator('#choices .magnet')).toHaveCount(4);
  });

  test('letter sounds: English only, and the panel shows the sound', async ({ page }) => {
    await page.goto('/');
    await openScreen(page, 'letters');
    await page.click('#letterModeSwitch [data-mode="sound"]');
    await page.click('.magnet[data-id="LB"]');
    await expect(page.locator('#letterLatin')).toHaveText('says /b/');
    await expect(page.locator('#lettersHint')).toHaveText('Tap a letter to hear its sound.');
    // In Bangla the switch goes away.
    await page.locator('#screen-letters .segmented--lang .seg').nth(1).click();
    await expect(page.locator('#letterModeSwitch')).toBeHidden();
  });

  test('your voice: a kept recording plays in place of the board', async ({ page }) => {
    await page.goto('/');
    // Store a recording the way the ● button does, then reload.
    await page.evaluate(() => saveOwnClip('en:S0', new Blob(['x'], { type: 'audio/mp4' })));
    await page.reload();
    await page.waitForFunction(() => ownClips.has('en:S0'));
    await openScreen(page, 'shapes');
    await page.locator('#shapesGrid .magnet').first().click();
    expect(await page.evaluate(() => player.src.startsWith('blob:'))).toBe(true);
    // The grown-up panel offers to delete it.
    await hold(page, '#parentBtn');
    await expect(page.locator('#ownVoiceClear')).toHaveText('Delete my recordings (1)');
  });

  test('the record button shows only when a grown-up turns it on', async ({ page }) => {
    await page.goto('/');
    await openScreen(page, 'colors');
    await expect(page.locator('#screen-colors .speak-btn--own')).toBeHidden();
    await hold(page, '#parentBtn');
    await page.check('#ownVoiceToggle');
    await page.click('#parentClose');
    const own = page.locator('#screen-colors .speak-btn--own');
    // Hidden where the browser can't record at all.
    const canRec = await page.evaluate(() => canRecord);
    if (canRec) await expect(own).toBeVisible();
    else await expect(own).toBeHidden();
  });
});
