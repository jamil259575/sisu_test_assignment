import { test as baseTest } from "@playwright/test";
import { HomePageEn } from "../../../../../page-objects/EN/homepage/home-page-en";
import {AuthPage} from "../../../../../page-objects/EN/auth/auth-page";

type CombinedFixtures = {
  homePage: HomePageEn;
  authPage: AuthPage
};

export const test = baseTest.extend<CombinedFixtures>({
  homePage: async ({ page, context }, use) => {
    const langCode = process.env.LANG_CODE || "en";
    const homePage = new HomePageEn(page, langCode);
    await homePage.open();
    await homePage.clickButton(homePage.cookieConsent);
    await use(homePage);
  },
  authPage: async ({ page }, use) => {
    const authPage = new AuthPage(page);
    await use(authPage);
  },
});
