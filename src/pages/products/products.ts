import { Page, Locator, expect } from "@playwright/test";
import ElementsJson from "../../elements/products.elemets.json";

export default class Product {
  readonly ItemTitle: Locator;
  readonly productContainer: Locator;
  readonly productName: Locator;
  readonly addCardBtn: Locator;
  readonly cardQuantityItens: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.ItemTitle = page.locator(ElementsJson.product_title_lbl);
    this.productContainer = page.locator(ElementsJson.product_container);
    this.productName = page.locator(ElementsJson.product_name_lbl);
    this.addCardBtn = page.locator(ElementsJson.addCart_btn);
    this.cardQuantityItens = page.locator(ElementsJson.product_badge_lbl);
  }

  async addTocartFirstProduct() {
    const addbtn = this.productContainer
      .filter({ hasText: "Sauce Labs Backpack" })
      .locator(this.page.getByRole("button"));
    await addbtn.click();
    await expect(addbtn).toHaveText("Remove");
  }

  async removeFirstCartItem() {
    const remove = this.productContainer
      .filter({ hasText: "Sauce Labs Backpack" })
      .locator(this.page.getByRole("button"));
    await remove.click();
    await expect(remove).toHaveText("Add to cart");
  }

  async checkcartItemTextIfStarsWithSouceLabs() {
    const itemText = await this.productName.allInnerTexts();

    for (const iterator of itemText) {
      expect(iterator).toMatch(/^Sauce Labs/);
    }
  }
}
