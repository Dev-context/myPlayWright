import { test, expect } from "@playwright/test";
import Login from "../../pages/login/login";
import Product from "../../pages/products/products";

test.describe("Products", () => {
  test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.visit()
    await login.login("standard_user", "secret_sauce");
  });

  test("add Product Item", async ({ page }) => {
    const products = new Product(page);
    await products.addTocartFirstProduct();
    await expect(products.cardQuantityItens).toHaveText('1')
   
  });

  test("remove product Item",async({page})=>{
    const products = new Product(page);
    await products.addTocartFirstProduct();
    await products.removeFirstCartItem();
    await expect(products.cardQuantityItens).not.toBeVisible()
  })

  test("Check product name starts with Sauce Labs",async({page})=>{
    const products = new Product(page);
    // await products.checkcartItemTextIfStarsWithSouceLabs()
  })
});
