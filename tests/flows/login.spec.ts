import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

const VALID_EMAIL = process.env.TEST_USER_EMAIL;
const VALID_PASSWORD = process.env.TEST_USER_PASSWORD;
const WRONG_PASSWORD = "wrong-password";

// Validate environment variables immediately
if (!VALID_EMAIL || !VALID_PASSWORD) {
  throw new Error("TEST_USER_EMAIL and TEST_USER_PASSWORD must be set in .env");
}

test.describe("Login flow", () => {
  test("user can log in with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(VALID_EMAIL, VALID_PASSWORD);

    // Assert: user is logged in
    await expect(page.locator('[data-test="nav-menu"]')).toContainText(
      "Jordi Ruijs",
    );
    await expect(page).toHaveURL(/\/account/);
  });

  test("user sees error message with invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(VALID_EMAIL, WRONG_PASSWORD);

    // Assert: error message is shown
    await loginPage.assertLoginError();
  });
});
