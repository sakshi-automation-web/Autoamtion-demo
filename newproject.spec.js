const { test, expect } = require('@playwright/test');
//let webcontext;
//test.beforeAll(async({browser})=>{
test('first test', async ({browser})=> {
const context = await browser.newContext();
const page = await context.newPage();
const products= "iphone 13 pro";
const productName = await page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.waitForLoadState('networkidle');
//await page.setDefaultTimeout(3000);
await page.locator("#userEmail").fill("tanviuser22@gmail.com");
await page.locator("#userPassword").fill("Tanvi@123");
await page.locator("//*[@id='login']").click();
await page.locator(".card-body").first().waitFor();
await page.locator(".card-body").allTextContents();
//await context.storageState({ path: 'state.json' });
//webcontext = await browser.newContext({ storageState: 'state.json' });
const count = await productName.count();
for(let i=0; i<count; ++i){
  if(await productName.nth(i).locator("b").textContent()==products){

    await productName.nth(i).locator("text = Add To Cart").click();
   
    break;
  }}
  await page.locator("[routerlink*='cart']").click();
  //waitfor method means in cart whenever item will show it will take fewsecond to show in that time we can write waitfor();
  await page.locator("div li").first().waitFor();
  //means if productname - iphone 13pro in both page (in dashboard and add to cart)
  const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
  expect(bool).toBeTruthy();
  await page.evaluate(()=>window.scrollBy(0,0));
  await page.getByRole("button",{name:"Checkout"}).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('345');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Sakshi');
  await page.locator('input[name="coupon"]').click();
  await page.locator('input[name="coupon"]').fill('rahulshetty');
  /*await page.getByRole('button', { name: 'Apply Coupon' }).click();
  //await page.locator(".user_name [type='text']").first().toHaveText("tanviuser22@gmail.com");
  await page.locator(".action__submit").click();
    await page.getByText('Place Order').click();
  //await page.getByRole('heading', { name: 'Thankyou for the order.' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Click To Download Order' }).click();
  const download = await downloadPromise;
  await page.getByRole('button', { name: ' HOME' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();*/
});


/*test ('second test cases',async ()=> {
const page = await webcontext.newPage();
//page.locator("//button[@class='btn w-40 rounded'][1]").click();
//page.locator("//button[@class='btn w-40 rounded'][1]").click();
page.getBylable(" Add To Cart").click();
page.locator(".btn.btn-primary").click();
page.locator("//button[normalize-space()='Sign Out']").click();
});*/
