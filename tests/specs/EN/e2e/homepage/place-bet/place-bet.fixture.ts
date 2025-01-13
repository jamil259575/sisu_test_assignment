import { test as baseTest } from "@playwright/test";
import { HomePageEn } from "../../../../../page-objects/EN/homepage/home-page-en";
import { BetSlipContainer } from "../../../../../page-objects/EN/betslip/bet-slip-container";

type CombinedFixtures = {
  homePage: HomePageEn;
  betSlipContainer:BetSlipContainer
};

export const test = baseTest.extend<CombinedFixtures>({
  homePage: async ({ page, context }, use) => {
    const langCode = process.env.LANG_CODE || "en";
    const homePage = new HomePageEn(page, langCode);
    await homePage.open();
    await homePage.clickButton(homePage.cookieConsent);
    await use(homePage);
  },

  betSlipContainer: async ({ page }, use) => {
    const betSlipContainer = new BetSlipContainer(page);
    await use(betSlipContainer);
  },
});
