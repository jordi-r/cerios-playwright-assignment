import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { createTestUser } from "../../helpers/test-user";

test.skip(
  process.env.CI === "true",
  "Skip registration flow in CI because of Cloudflare captcha",
);

test("user can register with valid data", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const user = createTestUser();

  await registrationPage.open();
  await registrationPage.register(user);

  await expect(page).toHaveURL(/auth\/login/);
  await expect(page.locator('[data-test="login-submit"]')).toBeVisible();
});
