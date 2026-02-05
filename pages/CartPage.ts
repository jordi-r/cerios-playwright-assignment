import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.page.locator('[data-test="nav-cart"]').click();
  }

  productTitle() {
    return this.page.locator('[data-test="product-title"]');
  }

  productPrice() {
    return this.page.locator('[data-test="product-price"]');
  }

  async assertItem(name: string, price: string) {
    await expect(this.productTitle()).toHaveText(name);
    await expect(this.productPrice()).toHaveText(price);
  }

  async removeFirstItem() {
    await this.page.locator(".btn.btn-danger").nth(0).click();
  }

  async assertEmpty() {
    await expect(this.page.locator(".wizard-steps.horizontal")).toContainText(
      "The cart is empty. Nothing to display",
    );
  }
}
