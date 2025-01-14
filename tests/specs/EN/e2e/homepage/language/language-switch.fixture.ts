import { test as baseTest } from "@playwright/test";
import { HomePage } from "../../../../../page-objects/EN/homepage/home-page";

type HomePageFixture = {
  homePage: HomePage;
};

export const test = baseTest.extend<HomePageFixture>({
  homePage: async ({ page, context }, use) => {
    const langCode = process.env.LANG_CODE || "en";
    const homePage = new HomePage(page, langCode);
    await homePage.open();
    await homePage.clickButton(homePage.cookieConsent);
    await use(homePage);
  },
});
