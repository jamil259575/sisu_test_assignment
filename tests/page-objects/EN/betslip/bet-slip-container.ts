import { BasePage } from "../../base-page";
import { Page } from "@playwright/test";

export class BetSlipContainer extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  readonly betSlipContainer = this.page.getByTestId('betslip-container')
  readonly betSlipClearButton = this.page.getByTestId('betslip-clear-all-button')
  readonly betSlipSelection = this.page.getByTestId('betslip-selection')
  readonly sideBetOptions = this.page.getByTestId('sidebet-market-container')
  readonly betBuilder = this.page.locator('[tab-id="bet-builder"]');
}
