import { test as baseTest } from "@playwright/test";
import {FootballBetPage} from "../../../../../../page-objects/EN/game-lobby/football/game-lobby-football";

type FootBallPageFixture = {
  footballBetPage:FootballBetPage
};

export const test = baseTest.extend<FootBallPageFixture>({
  footballBetPage: async ({ page }, use) => {
    const langCode = process.env.LANG_CODE || "en";
    const footballBetPage = new FootballBetPage(page,langCode);
    await footballBetPage.open()
    await footballBetPage.clickButton(footballBetPage.cookieConsent);
    await use(footballBetPage);
  },
});
