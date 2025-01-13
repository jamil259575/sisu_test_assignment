import { BasePage } from "../../base-page";
import { Page } from "@playwright/test";

export class AuthPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  readonly authScreen = this.page.getByTestId('auth-modal')
  readonly closeAuthScreen = this.page.getByTestId('close-modal')
  readonly registerTabButton  =this.page.getByTestId('register-tab-button')
  readonly emailOption = this.page.getByTestId('email-option-button')
  readonly pnpOption = this.page.getByTestId('pnp-option-button')
}
