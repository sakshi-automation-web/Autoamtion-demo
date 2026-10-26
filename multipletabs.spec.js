/*const { test, expect } = require('@playwright/test');
// open new tabs in different difference link
test('open two tabs', async ({ browser }) => {
  const context = await browser.newContext();
 //context.newpage open new page
  const page1 = await context.newPage();
  await page1.goto('https://google.com');
  page1.setDefaultTimeout(5000);

  const page2 = await context.newPage();
  await page2.goto('https://wikipedia.org');
  page1.setDefaultTimeout(5000);
  // Switch focus
  await page1.bringToFront();
  await page2.bringToFront();

  await context.close();
});

test('open two tabs in switching tabs', async ({ browser }) => {
 const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto("https://google.com");   // load a real page
  await page.waitForLoadState();

  await expect(page).toHaveTitle(/Google/); // check actual title

  await context.close();

});
test('search YouTube in first tab and Google in second tab', async ({ browser }) => {
  const context = await browser.newContext();

  // First tab → YouTube
    const rahul = await context.newPage();
    await rahul.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await rahul.title());
    await expect(rahul).toHaveTitle(/LoginPage Practise|Rahul Shetty Acadamy/);
    await rahul.getByLabel("Username").fill("rahulshettyacademy");
    await rahul.getByLabel("Password").fill("Learning@830$3mK2");
    await rahul.getByText("Sign In").click();
  // Second tab → Google
  const googleTab = await context.newPage();
   await googleTab.goto("https://rahulshettyacademy.com/angularpractice/");
   await googleTab.getByLabel("Check me out if you Love IceCreams!").click();
   await googleTab.getByLabel("Employed").click();
   await googleTab.getByLabel("Gender").selectOption("Female");
  await context.close();
});



test.only('switch between old and new tab with extra actions', async ({ browser }) => {
  const context = await browser.newContext();

  // Old tab → Login page
  const oldTab = await context.newPage();
  await oldTab.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(oldTab).toHaveTitle(/LoginPage Practise|Rahul Shetty Academy/);
  await oldTab.getByLabel("Username").fill("rahulshettyacademy");
  await oldTab.getByLabel("Password").fill("Learning@830$3mK2");
 // await oldTab.getByText("Sign In").click();

  // New tab → Angular practice page
  const newTab = await context.newPage();
  await newTab.goto("https://rahulshettyacademy.com/angularpractice/");
  await newTab.getByLabel("Name").fill("Sakshi gulhane");
  await newTab.getByLabel("Email").fill("sakshi20@gmail.com");
  await newTab.getByLabel("Gender").selectOption("Female");
  await newTab.getByText("Submit").click();

  // Switch back to old tab and continue actions
  await oldTab.bringToFront();
  console.log('Back on old tab (Login page)');
  // 👉 Add more actions here
  await oldTab.getByLabel("Username").fill("anotherUser");
  await oldTab.getByLabel("Password").fill("newPassword123");
  await oldTab.getByText("Sign In").click();

  // Switch again to new tab
  await newTab.bringToFront();
  console.log('Back on new tab (Angular practice page)');
  //await newTab.locator("/html/body/app-root/form-comp/div/h4/input").fill("Sakshi Gulhane");

  await context.close();
});*/
