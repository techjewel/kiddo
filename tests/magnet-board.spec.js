import { test, expect } from '@playwright/test';

// Helper to dismiss the language selection dialog if present
async function dismissLanguageDialog(page) {
  const langDialog = page.locator('#langWrap');
  const isVisible = await langDialog.isVisible().catch(() => false);
  
  if (isVisible && !(await langDialog.evaluate(el => el.classList.contains('is-hidden')))) {
    // Click the "Start" button to dismiss the language dialog
    await page.click('#langDone');
    await page.waitForTimeout(500);
  }
}

test.describe('Magnet Board', () => {
  test('app boots correctly without errors', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await dismissLanguageDialog(page);
    
    // Check that the board is visible
    await expect(page.locator('.board')).toBeVisible();
    
    // Check that we're not on a blank page - letters screen should be visible
    await expect(page.locator('#screen-letters')).toBeVisible();
    
    // Check for script/asset loading errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('can switch bottom tabs with focus mode OFF', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    
    // Start on Letters (default)
    await expect(page.locator('#screen-letters')).toBeVisible();
    
    // Switch to Numbers
    await page.click('[data-screen="numbers"]');
    await expect(page.locator('#screen-numbers')).toBeVisible();
    
    // Switch to Pictures
    await page.click('[data-screen="pictures"]');
    await expect(page.locator('#screen-pictures')).toBeVisible();
    
    // Switch to Body
    await page.click('[data-screen="body"]');
    await expect(page.locator('#screen-body')).toBeVisible();
    
    // Switch back to Letters
    await page.click('[data-screen="letters"]');
    await expect(page.locator('#screen-letters')).toBeVisible();
  });

  test('Pictures tab: Vehicles shelf loads and tiles work', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    
    // Navigate to Pictures
    await page.click('[data-screen="pictures"]');
    await expect(page.locator('#screen-pictures')).toBeVisible();
    
    // Default should show Fruits, switch to Vehicles
    await page.click('[data-group="vehicle"]');
    
    // Wait for vehicle grid to become visible
    await expect(page.locator('#vehicleGrid')).toBeVisible();
    
    // Check that vehicle tiles are present
    const vehicleTiles = page.locator('#vehicleGrid .magnet');
    await expect(vehicleTiles.first()).toBeVisible();
    
    // Click a vehicle tile and verify showcase updates
    const firstTile = vehicleTiles.first();
    await firstTile.click();
    
    // The showcase should show something (not blank)
    const showcase = page.locator('#picView');
    await expect(showcase).toBeVisible();
  });

  test('Pictures tab: Clothes shelf loads and works', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    
    // Navigate to Pictures
    await page.click('[data-screen="pictures"]');
    await expect(page.locator('#screen-pictures')).toBeVisible();
    
    // Switch to Clothes
    await page.click('[data-group="clothes"]');
    
    // Wait for clothes grid to become visible
    await expect(page.locator('#clothesGrid')).toBeVisible();
    
    // Check that clothes tiles are present
    const clothesTiles = page.locator('#clothesGrid .magnet');
    await expect(clothesTiles.first()).toBeVisible();
    
    // Click a clothes tile
    await clothesTiles.first().click();
    
    // Showcase should update
    await expect(page.locator('#picView')).toBeVisible();
  });

  test('Focus mode: hides chrome and keeps toggle visible', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    
    // Verify chrome is visible initially
    await expect(page.locator('.score')).toBeVisible();
    await expect(page.locator('#soundBtn')).toBeVisible();
    await expect(page.locator('#parentBtn')).toBeVisible();
    await expect(page.locator('.nav')).toBeVisible();
    
    // Focus toggle should be visible
    const focusToggle = page.locator('#focusToggleBtn');
    await expect(focusToggle).toBeVisible();
    
    // Click focus toggle to enable focus mode
    await focusToggle.click();
    
    // Chrome should now be hidden
    await expect(page.locator('.score')).not.toBeVisible();
    await expect(page.locator('#soundBtn')).not.toBeVisible();
    await expect(page.locator('#parentBtn')).not.toBeVisible();
    await expect(page.locator('.nav')).not.toBeVisible();
    
    // Focus toggle should STILL be visible
    await expect(focusToggle).toBeVisible();
    
    // Click focus toggle again to disable focus mode
    await focusToggle.click();
    
    // Chrome should be visible again
    await expect(page.locator('.score')).toBeVisible();
    await expect(page.locator('#soundBtn')).toBeVisible();
    await expect(page.locator('#parentBtn')).toBeVisible();
    await expect(page.locator('.nav')).toBeVisible();
  });

  test('Focus mode: hides language switches and shuffle buttons', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    
    // Go to Pictures screen (has shuffle and category buttons)
    await page.click('[data-screen="pictures"]');
    const shuffleBtn = page.locator('#shuffleBtn');
    const categoryButtons = page.locator('.segmented--pics');
    
    await expect(shuffleBtn).toBeVisible();
    await expect(categoryButtons).toBeVisible();
    
    // Enable focus mode
    await page.click('#focusToggleBtn');
    
    // Controls should now be hidden
    await expect(shuffleBtn).not.toBeVisible();
    await expect(categoryButtons).not.toBeVisible();
    
    // Screen hint should also be hidden
    await expect(page.locator('#picsHint')).not.toBeVisible();
  });

  test('Focus mode: persists after page reload', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    
    // Enable focus mode
    const focusToggle = page.locator('#focusToggleBtn');
    await focusToggle.click();
    
    // Verify focus mode is on
    await expect(page.locator('.nav')).not.toBeVisible();
    
    // Reload the page
    await page.reload();
    
    // Focus mode should still be on (no language dialog this time)
    await expect(focusToggle).toBeVisible();
    await expect(page.locator('.nav')).not.toBeVisible();
    await expect(page.locator('.score')).not.toBeVisible();
    
    // Toggle should still work to turn it off
    await focusToggle.click();
    await expect(page.locator('.nav')).toBeVisible();
    await expect(page.locator('.score')).toBeVisible();
  });

  test('What\'s that? mode still works', async ({ page }) => {
    await page.goto('/');
    await dismissLanguageDialog(page);
    
    // Navigate to Pictures
    await page.click('[data-screen="pictures"]');
    
    // The "What's that?" button (focusBtn on Pictures screen, different from focus mode toggle)
    const whatsThisBtn = page.locator('#focusBtn');
    await expect(whatsThisBtn).toBeVisible();
    
    // Click it to enter what's that mode
    await whatsThisBtn.click();
    
    // Focus stage should become visible
    await expect(page.locator('#focusStage')).toBeVisible();
  });
});
