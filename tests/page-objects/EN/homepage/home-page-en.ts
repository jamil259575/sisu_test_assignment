import { BasePage } from "../../base-page";
import { Page } from "@playwright/test";
import { getPathForLang } from "../../../config/language/languages";

export class HomePageEn extends BasePage {
  constructor(page: Page, langCode: string) {
    super(page);
    this.url = `/${langCode}${getPathForLang(langCode)}`;
  }
  readonly sportsButton = this.page.getByTestId("sport-button");
  readonly casinoButton = this.page.getByTestId("casino-button");
  readonly liveCasinoButton = this.page.getByTestId("live-casino-button");
  readonly roadMapButton = this.page.getByTestId("roadmap-button");
  readonly promotionsButton = this.page.locator(
    '[data-testkey="user.account.promotions"]',
  );
  readonly categoryList = this.page.getByTestId("category-list");
  readonly loginButton = this.page.getByTestId("login-button");
  readonly signupButton = this.page.getByTestId("signup-button");
  readonly languageOptionButton = this.page.getByTestId("language-button");
  readonly searchButton = this.page.getByTestId("search-button");
  readonly loadMoreButton = this.page.getByTestId("load-more-button");
  readonly matchContainer = this.page.getByTestId("match-container");
  readonly outcomeButton = this.page.getByTestId("outcome-button");
  readonly inputStake = this.page.getByTestId("stake-input");
  readonly placeBetButton = this.page.getByTestId("place-bet-button");
  readonly continueButton = this.page.getByTestId("continue-button");
  readonly authScreen = this.page.getByTestId('auth-modal')
  readonly closeAuthScreen = this.page.getByTestId('close-modal')
  readonly betSlipFloater = this.page.getByTestId('betslip-floater')
  readonly betSlipFloaterMini = this.page.getByTestId('betslip-floater-mini')
  readonly sideBetsButton = this.page.getByTestId('expand-sidebets-button')
  readonly menuButton = this.page.getByTestId('menu-button')
  readonly potReturnValue = this.page.locator('[data-testid="quickbet-container"] ._1bhxhwd4._1bhxhwd5');
  readonly oddValue = this.page.locator('[data-testid="quickbet-container"] ._1bhxhwd4');
}
