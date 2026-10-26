
//first add request in 1st line 
const{test, expect, request} = require ('@playwright/test');  
 //in request object you call request, response through api object
 let token;
 const loginPayload ={username:"tanviuser22@gmail.com",userpassword:"Tanvi@123"};
//loginpayload which is store in payload
test.beforeAll(async() =>{
const apiContext = await request.newContext();
//when you did like browser same we have to did in Api
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayload });
// you want to add data in payload 
//await expect(loginResponse.ok()).toBeTruthy();
//next step we want response
const loginResponseJson = await loginResponse.json();
//next we have grab json response
 token = await loginResponseJson.token;
// we want loginresponse token
console.log(token);
});

test('api', async({page})=>{
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);
  const productName= 'iphone 13 pro';
await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
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
  await page.getByRole('button', { name: 'Apply Coupon' }).click();
  //await page.locator(".user_name [type='text']").first().toHaveText("tanviuser22@gmail.com");
  await page.locator(".action__submit").click();
    await page.getByText('Place Order').click();
  await page.getByRole('heading', { name: 'Thankyou for the order.' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Click To Download Order' }).click();
  const download = await downloadPromise;
  await page.getByRole('button', { name: ' HOME' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();

});
