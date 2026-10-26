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
//if you want to captured full screen so you write like this
await page.screenshot({path:'screenshot.png'});
//if you want to captured perticular element testbox you can write locator 
await page.locator("#userEmail").screenshot({path:"partialscreenshot.png"});
});