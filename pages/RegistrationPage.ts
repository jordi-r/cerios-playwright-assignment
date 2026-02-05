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

  // Field helpers

  async fillFirstName(value: string) {
    await this.page.locator('[data-test="first-name"]').fill(value);
  }

  async fillLastName(value: string) {
    await this.page.locator('[data-test="last-name"]').fill(value);
  }

  async fillBirthDate(value: string) {
    await this.page.locator('[data-test="dob"]').fill(value);
  }

  async fillPhone(value: string) {
    await this.page.locator('[data-test="phone"]').fill(value);
  }

  async fillEmail(value: string) {
    await this.page.locator('[data-test="email"]').fill(value);
  }

  async fillPassword(value: string) {
    await this.page.locator('[data-test="password"]').fill(value);
  }

  async submit() {
    await this.page.locator('[data-test="register-submit"]').click();
  }

  // Happy path

  async register(user: TestUser) {
    // Personal info
    await this.fillFirstName(user.firstName);
    await this.fillLastName(user.lastName);
    await this.fillBirthDate(user.dateOfBirth);

    // Address
    await this.page.locator('[data-test="street"]').fill(user.address);
    await this.page.locator('[data-test="postal_code"]').fill(user.postalCode);
    await this.page.locator('[data-test="city"]').fill(user.city);
    await this.page.locator('[data-test="state"]').fill(user.state);

    // Country dropdown
    await this.page.locator('[data-test="country"]').selectOption(user.country);

    // Contact
    await this.fillPhone(user.phone);
    await this.fillEmail(user.email);

    // Password
    await this.fillPassword(user.password);

    // Submit
    await this.submit();
  }
}
