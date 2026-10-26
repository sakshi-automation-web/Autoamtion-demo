const{test} = require ('@playwright/test');
test('apple url', async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.apple.com/");

const[Macbook] = await Promise.all([
 context.waitForEvent('page'),
 page.evaluate(()=>{
    window.open("https://www.apple.com/shop/buy-mac/macbook-air")
 }),
]);
const book1 = await Macbook.locator("img.rf-bfe-gallery-image[data-autom='galleryImage0']");
await book1.screenshot({path:'mackbook.png'});


});