import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { createTestUser, INVALID_DATA } from "../../helpers/test-user";

test.describe("Registration flow", () => {
  test("user can register with valid data", async ({ page }) => {
    test.skip(
      process.env.CI === "true",
      "Skip registration flow in CI because of Cloudflare captcha",
    );
    const registrationPage = new RegistrationPage(page);
    const user = createTestUser();

    await registrationPage.open();
    await registrationPage.register(user);

    await expect(page).toHaveURL(/auth\/login/);
    await expect(page.locator('[data-test="login-submit"]')).toBeVisible();
  });

  test("shows validation error with invalid phone number", async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.open();
    await registrationPage.fillPhone(INVALID_DATA.invalidPhone);
    await registrationPage.submit();

    await expect(page.locator('[data-test="phone-error"]')).toContainText(
      "Only numbers are allowed",
    );
  });

  test("shows validation error when date of birth is incorrect format", async ({
    page,
  }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.open();
    await registrationPage.fillBirthDate(INVALID_DATA.invalidBirthDate);
    await registrationPage.submit();

    await expect(page.locator('[data-test="dob-error"]')).toContainText(
      "Please enter a valid date in YYYY-MM-DD format",
    );
  });

  test("shows validation error when email is incorrect format", async ({
    page,
  }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.open();
    await registrationPage.fillEmail(INVALID_DATA.invalidEmail);
    await registrationPage.submit();

    await expect(page.locator('[data-test="email-error"]')).toContainText(
      "Email format is invalid",
    );
  });

  test("shows validation error when password is too weak", async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.open();
    await registrationPage.fillPassword(INVALID_DATA.weakPassword);
    await registrationPage.submit();

    await expect(page.locator('[data-test="password-error"]')).toBeVisible();
    await expect(page.locator('[data-test="password-error"]')).toContainText(
      "Password must be minimal 6 characters long",
    );
  });
});
