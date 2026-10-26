const {test} = require ('@playwright/test');
const { captureTrimmedScreenshot } = require('../utils/screenshotHelper');
test('1st url', async({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.apple.com/");
await page.bringToFront();
await page.getByRole('link', { name: 'Buy, iPad Air' }).click();
await page.waitForTimeout(2000);

/*const inch = page.locator('img.rf-bfe-gallery-image[data-autom="galleryImage0"]');
await inch.scrollIntoViewIfNeeded();
await inch.waitForTimeout(5000);
await inch.screenshot({ path: 'ipadAirImage.png' });*/

await page.waitForLoadState('networkidle');
 await captureTrimmedScreenshot(page,
    'img.rf-bfe-gallery-image[data-autom="galleryImage0"]',
    'ipadAirImage.png'
  );
await page.locator('input[data-autom="dimensionScreensize11inch"]').check({ force: true });


const spaceGrayInput = page.locator('input[value="space_gray"]');
  await spaceGrayInput.scrollIntoViewIfNeeded();
  await spaceGrayInput.check({ force: true });

  
const storage = page.locator('input[value="128gb"]');
  await storage.scrollIntoViewIfNeeded();
  await storage.check({ force: true });


/*await page.waitForTimeout(3000);
const wifiCellularImage = page.locator('img.rf-bfe-gallery-image[src*="ipad-air-connectivity-select"]');
await wifiCellularImage.screenshot({ path: 'face.png' });*/

await page.waitForLoadState('networkidle');
 await captureTrimmedScreenshot(page,
    'img.rf-bfe-gallery-image[src*="ipad-air-connectivity-select"]',
    'face.png'
  );


 const wificell= page.locator('input[value="wificell"]');
   await wificell.scrollIntoViewIfNeeded();
 await wificell.check({ force: true });

//await page.waitForTimeout(3000);
//const noengrave = page.locator('img[alt*="laser engraved"]');
//await noengrave.screenshot({ path: 'nongrave.png' });

await page.waitForLoadState('networkidle');
 await captureTrimmedScreenshot(page,
    'img[alt*="laser engraved"]',
    'nongrave.png'
  );


const noEngravingInput = page.locator('input[data-autom="noEngraving-app"]');
await noEngravingInput.scrollIntoViewIfNeeded();
await noEngravingInput.check({ force: true });

//await page.waitForTimeout(3000);
//const pencil = page.locator('img[alt="iPad Air and Apple Pencil models: Apple Pencil Pro and Apple Pencil (USB-C), iPad Air screens display colorful artwork and handwritten notes"]');
//await pencil.screenshot({ path: 'pencil.png' });

await page.waitForLoadState('networkidle');
 await captureTrimmedScreenshot(page,
    'img[alt="iPad Air and Apple Pencil models: Apple Pencil Pro and Apple Pencil (USB-C), iPad Air screens display colorful artwork and handwritten notes"]]',
    'pencil.png'
  );


const applepencil= page.locator("//label[@id='acc_pencil_grp_usbc']");
await applepencil.scrollIntoViewIfNeeded();
await applepencil.check({ force: true });

//await page.waitForTimeout(3000);
//const magic = page.locator('img[alt="iPad Air attached to Magic Keyboard, landscape orientation, iPad Air is raised above keyboard"]');
//await magic.screenshot({ path: 'magic.png' });

await page.waitForLoadState('networkidle');
 await captureTrimmedScreenshot(page,
    'img[alt="iPad Air attached to Magic Keyboard, landscape orientation, iPad Air is raised above keyboard"]',
    'magic.png'
  );

 const noEngravingInput2 =page.locator("//label[@id='acc_magickeyboard_11inch']")
await noEngravingInput2.scrollIntoViewIfNeeded();
await noEngravingInput2.check({ force: true });
await page.waitForTimeout(3000);

const whiteKeyboard = page.locator('input[value="white"][name="acc_magickeyboard_11inch_dimensionColor"]');
await whiteKeyboard.scrollIntoViewIfNeeded();
await whiteKeyboard.check({ force: true });
await page.locator('#acc_magickeyboard_11inch_add').click();

//need to check
//await page.waitForTimeout(3000);
//const notradeimg = page.locator('img.rf-bfe-gallery-image[src*="ipad-air-trade-in-select"]');
//await notradeimg.screenshot({ path: 'notrade.png' });

await page.waitForLoadState('networkidle');
 await captureTrimmedScreenshot(page,
    'img.rf-bfe-gallery-image[src*="ipad-air-trade-in-select"]',
    'notrade.png'
  );


const notrade = page.locator('input[value="noTradeIn"]');
await notrade.scrollIntoViewIfNeeded();
await notrade.check({ force: true });

  
//await page.waitForTimeout(3000);
//const buyimg = page.locator('img[alt="iPad Air, Wi-Fi + Cellular, back exterior, Space Gray, single-lens camera, iPad Air, front exterior, black display bezel, rounded corners"]');
//await buyimg.screenshot({ path: 'buy.png' });

await page.waitForLoadState('networkidle');
 await captureTrimmedScreenshot(page,
    'img[alt="iPad Air, Wi-Fi + Cellular, back exterior, Space Gray, single-lens camera, iPad Air, front exterior, black display bezel, rounded corners"]',
    'buy.png'
  );



const price = page.locator('input[value="fullprice"]');
await price.scrollIntoViewIfNeeded();
await price.check({ force: true });

const attPrice = (await page.locator('label[for="_r_p_"]').textContent()).trim();
const verizonPrice = (await page.locator('label[for="_r_q_"]').textContent()).trim();
const connectPrice = (await page.locator('label[for="_r_r_"]').textContent()).trim();

console.log('AT&T Price:', attPrice);
console.log('Verizon Price:', verizonPrice);
console.log('Connect to any carrier later Price:', connectPrice);

// Expected stable values for Verizon and Connect
const expectedVerizon = '$1,247.00';   
const expectedConnect = '$1,247.00';   

// Check Verizon and Connect remain unchanged
if (verizonPrice !== expectedVerizon) {
  console.error(`Verizon price changed! Expected ${expectedVerizon}, found ${verizonPrice}`);
} else {
  console.log('Verizon price is stable.');
}

if (connectPrice !== expectedConnect) {
  console.error(`Connect price changed! Expected ${expectedConnect}, found ${connectPrice}`);
} else {
  console.log('Connect price is stable.');
}

// AT&T can change — just report it
console.log(`Current AT&T price is: ${attPrice}`);

await page.waitForTimeout(2000);
//const buy = page.locator('img.rf-bfe-gallery-image:visible').nth(0);
//await buy.screenshot({ path: 'buy.png' });
const buy = page.locator('img.rf-bfe-gallery-image[data-autom="galleryImage0"]:visible');
await buy.screenshot({ path: 'buy.png' });

});



test('Check response code and capture screenshot with network logs', async ({ browser }) => {
  const context = await browser.newContext({
    recordHar: { path: 'network.har' } // saves network activity in HAR file
  });

  const page = await context.newPage();

  // Navigate and capture response
  const response = await page.goto('https://www.apple.com/');
  if (response.status() === 200) {
    console.log('Response code is 200');
  } else {
    console.error(`Response code is ${response.status()}`);
  }
  await page.screenshot({ path: 'apple_home.png', fullPage: true });
  await context.close();
});