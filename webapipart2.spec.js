//save authentication wiht statestorage state 

const { test, expect } = require('@playwright/test');

let webContext;
test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("tanviuser22@gmail.com");
  await page.locator("#userPassword").fill("Tanvi@123");
  await page.locator("#login").click();
  await page.waitForURL("**/dashboard/**");
  await context.storageState({ path: 'state.json' });
  webContext = await browser.newContext({ storageState: 'state.json' });
});

test('second test cases', async () => {
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
  await page.locator(".card-body").first().waitFor();
  const title = await page.locator(".card-body").allTextContents();
  console.log(title);

  await page.getByRole("button", { name: " Add To Cart" }).nth(1).click();
  await page.locator("button[routerlink='/dashboard/cart']").click();
  await page.getByRole("button", { name: /checkout/i }).click();

  await page.getByRole('textbox').nth(1).fill('234');
  await page.getByRole('textbox').nth(2).fill('credit');
});