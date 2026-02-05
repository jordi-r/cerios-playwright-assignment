import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { createTestUser } from "../../helpers/test-user";
import { registerNewUser } from "../../helpers/account-setup";

const WRONG_PASSWORD = "wrong-password";

test.describe("Login flow", () => {
  test("user sees error message with invalid password", async ({ page }) => {
    const user = createTestUser();
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);

    // Arrange: register a new user
    await registrationPage.open();
    await registrationPage.register(user);

    // Act: try to log in with wrong password
    await loginPage.open();
    await loginPage.login(user.email, WRONG_PASSWORD);

    // Assert: error message is shown
    await loginPage.assertLoginError();
  });

  test("user can log in with valid credentials", async ({ page }) => {
    const user = createTestUser();
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);

    // Arrange: register a new user
    await registrationPage.open();
    await registrationPage.register(user);

    await expect(page).toHaveURL(/auth\/login/);

    // Act: log in with correct credentials
    await loginPage.open();
    await loginPage.login(user.email, user.password);

    // Assert: user is logged in

    await expect(page).toHaveURL(/\/account/, { timeout: 10000 });
    await expect(page.locator('[data-test="nav-menu"]')).toContainText(
      "Test User",
    );
  });
});
