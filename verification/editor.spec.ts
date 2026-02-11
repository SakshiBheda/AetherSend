import { test, expect } from '@playwright/test';

test('Editor Preview Check', async ({ page }) => {
  await page.goto('http://localhost:3000/editor');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/v_editor_realtime.png', fullPage: true });
});
