import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(productId: string) {
    await this.goto(`/product/${productId}`);
  }

  ProductName() {
    return this.page.locator('[data-test="product-name"]');
  }

  description() {
    return this.page.locator('[data-test="product-description"]');
  }

  async addToCart() {
    await this.page.locator('[data-test="add-to-cart"]').click();
  }
}
