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
const title = await page.locator(".card-body").allTextContents();
await console.log(title);
await page.getByRole("button",{name:" Add To Cart"}).nth(1).click();
//await page.getByRole("button",{name:" Cart"}).click();
await page.locator("button[routerlink='/dashboard/cart']").click();
await page.getByRole("button",{name:"checkout"}).click();
  //await page.getByRole('textbox').nth(1).click();
  //await page.getByRole('textbox').nth(1).fill('234');
  //await page.getByRole('textbox').nth(2).click();
  //await page.getByRole('textbox').nth(2).fill('credit');
});

test('second test', async ({page})=>{
//const context = await browser.newContext();
//const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
const title = await page.locator(".product-name").allTextContents();
console.log(title);
await page.getByRole("link", {name:"+"}).first().click();
await page.getByRole("button",{name:"ADD TO CART"}).first().click();
await page.getByRole("link",{name:"Cart"}).click();
await page.getByRole("button",{name:"PROCEED TO CHECKOUT"}).click();
await page.getByRole("button",{name:"Place Order"}).click();
//await page.getByRole("button",{name:"Select"}).click();
await page.getByRole("combobox").selectOption('India');
await page.getByRole("checkbox").check();
await page.getByRole("button",{name:"Proceed"}).click();
const title1 = await page.getByText("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").isVisible();
console.log(title);
await page.close();
});





