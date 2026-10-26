const { test, expect, request } = require('@playwright/test');

const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "67a8dde5c0d3e6622a297cc8" }] };

let token;
let orderId;

test.beforeAll(async () => {
  const apiContext = await request.newContext();

  // Login
  const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayLoad });
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;
  console.log("Token:", token);

  // Create order
  const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
    data: orderPayLoad,
    headers: { 'Authorization': token, 'Content-type': 'application/json' }
  });

  const orderResponseJson = await orderResponse.json();
  orderId = orderResponseJson.orderId || (orderResponseJson.orders && orderResponseJson.orders[0]);
  console.log("Order ID:", orderId);
});

// Test
test('Place the order', async ({ page }) => {
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

  const rows = await page.locator("tbody tr");
  for (let i = 0; i < await rows.count(); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderId === rowOrderId) {   
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }

  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId).toBe(orderIdDetails); 
});
