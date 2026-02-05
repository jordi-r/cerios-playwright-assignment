import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { registerNewUser } from "../../helpers/account-setup";
import { INVALID_DATA } from "../../helpers/test-user";

test.describe("Login flow", () => {
  test("shows an error message when credentials are invalid", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(INVALID_DATA.invalidEmail, INVALID_DATA.weakPassword);

    await loginPage.assertLoginError();
    await expect(page).toHaveURL(/auth\/login/i);
  });

  test("allows login with valid credentials", async ({ page }) => {
    test.skip(
      process.env.CI === "true",
      "Skip valid login flow in CI because registration is blocked by Cloudflare captcha",
    );

    const user = await registerNewUser(page);
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(user.email, user.password);

    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
    await expect(page.locator('[data-test="nav-menu"]')).toContainText(
      user.firstName,
    );
  });
});
