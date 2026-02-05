import { Page, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/RegistrationPage";
import { createTestUser, type TestUser } from "./test-user";

export async function registerNewUser(page: Page): Promise<TestUser> {
  const user = createTestUser();
  const registrationPage = new RegistrationPage(page);

  await registrationPage.open();
  await registrationPage.register(user);

  await page.waitForLoadState("networkidle");

  return user;
}
