import { Page, Locator } from "@playwright/test";
import ElementsJson from "../../elements/login.elements.json";

export default class Login {
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator(ElementsJson.userName_ipt);
    this.password = page.locator(ElementsJson.password_ipt);
    this.loginButton = page.locator(ElementsJson.login_btn);
    this.errorMessage = page.locator(ElementsJson.error_alert_lbl);
  }

  async visit() {
    await this.page.goto("/");
  }

  async login(user: string, password: string) {
    await this.userName.fill(user);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
