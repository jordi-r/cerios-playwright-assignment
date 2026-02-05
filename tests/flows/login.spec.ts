import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { registerNewUser } from "../../helpers/account-setup";

const WRONG_PASSWORD = "wrong-password";

test.describe("Login flow", () => {
  test("shows an error message when password is invalid", async ({ page }) => {
    const user = await registerNewUser(page);
    const loginPage = new LoginPage(page);

    // Act: try to log in with wrong password
    await loginPage.open();
    await loginPage.login(user.email, WRONG_PASSWORD);

    // Assert: error message is shown
    await loginPage.assertLoginError();
  });

  test("allows login with valid credentials", async ({ page }) => {
    const user = await registerNewUser(page);
    const loginPage = new LoginPage(page);

    // Act: log in with correct credentials
    await loginPage.open();
    await loginPage.login(user.email, user.password);

    // Assert: user is logged in
    // Explicit wait for logged-in UI
    await page.locator('[data-test="nav-profile"]').click();

    await page.waitForSelector('[data-test="nav-menu"]', {
      state: "visible",
      timeout: 50000,
    });

    // Assert logged-in state
    await expect(page.locator('[data-test="nav-menu"]')).toContainText(
      user.firstName,
    );
  });
});
