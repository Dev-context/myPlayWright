import { test, expect } from "@playwright/test";
import Login from "../../pages/login/login";

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.visit();
  });
  test("login with success", async ({ page }) => {
    const login = new Login(page);
    await login.login("standard_user", "secret_sauce");
    await expect(login.errorMessage).not.toBeVisible();
  });

  test("login with invalid credentials", async ({ page }) => {
    const login = new Login(page);
    await login.login("error", "wrongUser");
    await expect(login.errorMessage).toBeVisible();
  });
});
