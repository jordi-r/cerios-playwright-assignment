import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { createTestUser } from "../../helpers/test-user";

test("user can register with valid data", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const user = createTestUser();

  await registrationPage.open();
  await registrationPage.register(user);

  await expect(page).toHaveURL(/\/account/);
});
