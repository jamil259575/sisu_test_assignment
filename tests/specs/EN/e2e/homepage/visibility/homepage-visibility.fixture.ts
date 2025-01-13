import { test as baseTest } from "@playwright/test";
import { HomePageEn } from "../../../../../page-objects/EN/homepage/home-page-en";

type HomePageFixture = {
  homePage: HomePageEn;
};

export const test = baseTest.extend<HomePageFixture>({
  homePage: async ({ page, context }, use) => {
    const langCode = process.env.LANG_CODE || "en";
    const homePage = new HomePageEn(page, langCode);
    await homePage.open();
    await homePage.clickButton(homePage.cookieConsent);
    await use(homePage);
  },
});
