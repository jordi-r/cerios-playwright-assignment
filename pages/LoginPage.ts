import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto("/auth/login");
  }

  async login(email: string, password: string) {
    await this.page.locator('[data-test="email"]').fill(email);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-submit"]').click();
  }

  async assertLoginError() {
    await expect(this.page.locator('[data-test="login-error"]')).toBeVisible();
  }
}
