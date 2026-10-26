const { test, expect } = require('@playwright/test');
test.only('frist tab in chrome',async ({browser})=>{
const context =  await browser.newContext();
const page = await context.newPage();
viewport: null ;
//1st tab
await page.goto("https://www.google.com");
//second tab
const [newPage] = await Promise.all([
context.waitForEvent("page"),
page.evaluate(()=>{
window.open("https://rahulshettyacademy.com/client/#/auth/login");
})
]);
//thid tab 
  const [eventhub] = await Promise.all([
  context.waitForEvent("page"),
  page.evaluate(()=>{
  window.open("https://rahulshettyacademy.com/practice");
 })
]);

  await newPage.bringToFront();
  await newPage.waitForLoadState('networkidle');
//await page.setDefaultTimeout(3000);
await newPage.locator("#userEmail").fill("tanviuser22@gmail.com");
await newPage.locator("#userPassword").fill("Tanvi@123");
await newPage.locator("//*[@id='login']").click();

 await eventhub.bringToFront();
  await eventhub.waitForLoadState('domcontentloaded');
//await page.locator(".fa.fa-envelope").scrollIntoViewIfNeeded();

  await page.close();
});






/*test('open Google then switch to Rahul Shetty tab', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
 await page.goto('https://www.google.com');
 console.log('First tab URL:', page.url());
  const [newPage] = await Promise.all([
     context.waitForEvent("page"),
     page.evaluate(()=>{

        window.open("https://rahulshettyacademy.com/practice");
    })
  ]);
  // Switch focus to the new tab
  await newPage.bringToFront();
  //console.log('Second tab URL:', newPage.url());
  // Assertions
  //await expect(page).toHaveTitle(/Google/);
  //await expect(newPage).toHaveTitle(/QA Automation Pratice Site/);
});*/
