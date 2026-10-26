const { test } = require('@playwright/test');

test('simulate minimise and maximise', async ({ browser }) => {
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
  await page.goto('https://google.com');

  // Simulate fullscreen (like maximize)
  await page.keyboard.press('F11');
  await page.waitForTimeout(3000);

  // Exit fullscreen (like minimize back to normal window)
  await page.keyboard.press('F11');
  await page.waitForTimeout(3000);
});
