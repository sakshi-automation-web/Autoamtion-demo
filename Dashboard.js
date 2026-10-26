class Dashboard{

constructor(page){
this.page=page;
this.cart= page.locator(".card-body");
this.addtocart = page.locator("button[routerlink='/dashboard/cart']");
this.cart= page.getByRole("button",{name:" Add To Cart"});
this.checkout=page.getByRole("button",{name:"checkout"});
}
async goto(){
await this.page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
const title = await this.cart.allTextContents();
await console.log(title);
await this.cart.nth(1).click();
await this.addtocart.click();
await this.checkout.click();
await this.page.pause();
}

}
module.exports ={Dashboard};