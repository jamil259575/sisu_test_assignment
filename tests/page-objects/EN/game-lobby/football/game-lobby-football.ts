import { Page } from "@playwright/test";
import { getPathForLang } from "../../../../config/paths/paths";
import { BetSlipContainer } from "../../betslip/bet-slip-container";

export class FootballBetPage extends BetSlipContainer {
  constructor(page: Page, langCode: string) {
    super(page);
    this.url = `/${langCode}${getPathForLang(langCode)}/football`;
  }
  readonly sideBetsButton = this.page.getByTestId("expand-sidebets-button");
  readonly betByFirstHalf = this.page.getByRole("tab", { name: "1. half" });
  readonly betBySecondHalf = this.page.getByRole("tab", { name: "2. Half" });
  readonly marketGroups = this.page
    .getByTestId("sidebet-main-markets-container")
    .getByRole("img")
    .first();
  readonly betSlipFloaterMini = this.page.getByTestId("betslip-floater-mini");
  readonly popOverSelectmenu = this.page.getByTestId("popover-select-menu");
}
