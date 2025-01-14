import { test as baseTest } from "@playwright/test";
import { FootballBetPage } from "../../../../../../page-objects/EN/game-lobby/football/game-lobby-football";
import { HomePage } from "../../../../../../page-objects/EN/homepage/home-page";

type CombinedFixtures = {
  footballBetPage: FootballBetPage;
  homePage: HomePage;
};

export const test = baseTest.extend<CombinedFixtures>({
  footballBetPage: async ({ page }, use) => {
    const langCode = process.env.LANG_CODE || "en";
    const footballBetPage = new FootballBetPage(page, langCode);
    await footballBetPage.open();
    await footballBetPage.clickButton(footballBetPage.cookieConsent);
    await use(footballBetPage);
  },

  homePage: async ({ page, context }, use) => {
    const langCode = process.env.LANG_CODE || "en";
    const homePage = new HomePage(page, langCode);
    await use(homePage);
  },
});
