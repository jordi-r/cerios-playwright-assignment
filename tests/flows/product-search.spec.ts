import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe("Product search flow", () => {
  test("allows searching for products and viewing results", async ({
    page,
  }) => {
    const home = new HomePage(page);

    await home.open();
    await home.search("drill");

    await expect(home.searchCaption()).toContainText("Searched for: drill");
    await expect(home.productByName("Cordless Drill 24V")).toBeVisible();
  });

  test("shows no results message when search yields no products", async ({
    page,
  }) => {
    const home = new HomePage(page);

    await home.open();
    await home.search("nonexistentproduct");

    await expect(home.searchCaption()).toContainText(
      "Searched for: nonexistentproduct",
    );
    await expect(page.locator('[data-test="no-results"]')).toBeVisible();
  });
});
