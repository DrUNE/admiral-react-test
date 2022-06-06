import { test, expect } from '@playwright/test';
test.describe('search select field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/search_select_field');
  });
  test('search select field click', async ({ page }) => {  
  await page.locator('data-test-id=searchSelectTest >>nth=0').click();
  await page.locator('#selectDropdownContainer div:has-text("teeext 1")').first().click();
  await page.locator('data-test-id="searchSelectTestWithExtraText >>nth=0').click();
  await page.locator('div:has-text("Текст 1Доооп Текст 1")').nth(2).click();
  await page.locator('data-test-id=searchSelectTest >>nth=1').click();
  await page.locator('div:has-text("Текст 2Доп Теttкст 2")').nth(2).click();
  await page.locator('data-test-id=searchSelectTest >>nth=2').click();
  await page.locator('#selectDropdownContainer div:has-text("texttt 6")').click();
});
  });
});
