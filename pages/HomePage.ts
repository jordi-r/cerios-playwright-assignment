import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto("/");
  }

  async search(query: string) {
    await this.page.locator('[data-test="search-query"]').fill(query);
    await this.page.locator('[data-test="search-submit"]').click();
  }

  searchCaption() {
    return this.page.locator('[data-test="search-caption"]');
  }

  productByName(name: string) {
    return this.page
      .locator('[data-test="product-name"]')
      .filter({ hasText: name });
  }
}
