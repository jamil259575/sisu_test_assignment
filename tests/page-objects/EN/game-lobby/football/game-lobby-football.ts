import { Page } from "@playwright/test";
import { getPathForLang } from "../../../../config/language/languages";
import {BetSlipContainer} from "../../betslip/bet-slip-container";

export class FootballBetPage extends BetSlipContainer {
  constructor(page: Page, langCode: string) {
    super(page);
    this.url = `/${langCode}${getPathForLang(langCode)}/football`;
  }
  readonly sideBetsButton = this.page.getByTestId('expand-sidebets-button')
  readonly betByFirstHalf = this.page.locator('span[role="tab"]', { hasText: '1. half' });
  readonly betBySecondHalf = this.page.locator('span[role="tab"]', { hasText: '2. half' });
  readonly marketGroups = this.page.getByTestId('sidebet-main-markets-container').locator('div').filter({ hasText: 'Market groupsAll' }).nth(3)
  readonly betSlipFloaterMini = this.page.getByTestId('betslip-floater-mini')


}
