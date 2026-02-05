import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import type { TestUser } from "../helpers/test-user";

export class RegistrationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto("/auth/register");
  }

  async register(user: TestUser) {
    // Personal info
    await this.page.locator('[data-test="first-name"]').fill(user.firstName);
    await this.page.locator('[data-test="last-name"]').fill(user.lastName);
    await this.page.locator('[data-test="dob"]').fill(user.dateOfBirth);

    // Address
    await this.page.locator('[data-test="street"]').fill(user.address);
    await this.page.locator('[data-test="postal_code"]').fill(user.postalCode);
    await this.page.locator('[data-test="city"]').fill(user.city);
    await this.page.locator('[data-test="state"]').fill(user.state);

    // Country dropdown
    await this.page.locator('[data-test="country"]').selectOption(user.country);

    // Contact
    await this.page.locator('[data-test="phone"]').fill(user.phone);
    await this.page.locator('[data-test="email"]').fill(user.email);

    // Password
    await this.page.locator('[data-test="password"]').fill(user.password);

    // Submit
    await this.page.locator('[data-test="register-submit"]').click();
  }
}
