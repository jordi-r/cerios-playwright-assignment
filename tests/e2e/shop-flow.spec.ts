import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";

const productName = "Combination Pliers";

test.describe("Shop happy flow (e2e)", () => {
  test("user can search, add product to cart and remove it", async ({
    page,
  }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);

    // Search product
    await home.open();
    await home.search("pliers");
    await home.productByName(productName).click();

    // Add to cart
    await product.addToCart();

    // Remove from cart
    await cart.open();
    await cart.removeFirstItem();
    await cart.assertEmpty();
  });
});
