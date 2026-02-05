import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";

const productName = "Combination Pliers";
const productPrice = "$14.15";

test.describe("Cart flow", () => {
  test("user can add products to the cart", async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);

    await home.open();
    await home.productByName(productName).click();

    await expect(product.ProductName()).toHaveText(productName);

    await product.addToCart();
    await expect(page.getByLabel("Product added to shopping")).toContainText(
      "Product added to shopping cart",
    );
    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText("1");
  });

  test("user can remove product from cart", async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);

    // precondition: item in cart
    await home.open();
    await home.productByName(productName).click();
    await product.addToCart();

    await cart.open();

    await cart.assertItem(productName, productPrice);
    await cart.removeFirstItem();
    await expect(page.getByLabel("Product deleted.")).toContainText(
      "Product deleted",
    );
    await cart.assertEmpty();
  });
});
