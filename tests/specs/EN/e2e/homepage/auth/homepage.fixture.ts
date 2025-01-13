import { test as baseTest } from "@playwright/test";
import { HomePage } from "../../../../../page-objects/homepage/home-page";
import {AuthPage} from "../../../../../page-objects/auth/auth-page";

type CombinerFixtures = {
  homePage: HomePage;
  authPage: AuthPage
};

export const test = baseTest.extend<CombinerFixtures>({
  homePage: async ({ page, context }, use) => {
    const langCode = process.env.LANG_CODE || "en";
    const homePage = new HomePage(page, langCode);
    await homePage.open();
    await homePage.clickButton(homePage.cookieConsent);
    await use(homePage);
  },
  authPage: async ({ page, context }, use) => {
    const authPage = new AuthPage(page);
    await use(authPage);
  },
});
