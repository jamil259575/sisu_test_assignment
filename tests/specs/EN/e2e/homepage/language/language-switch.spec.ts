import { test } from "./language-switch.fixture";
import { estoniaOption } from "../../../../../constants/test-keys/test-keys-language";
import { estonianLanguagePath } from "../../../../../config/paths/paths";

test.describe("URl verification", () => {
  test(
    "when user switches language from English to Estonian, website url should change ",
    { tag: ["@desktopOnly"] },
    async ({ homePage }) => {
      await homePage.clickButton(homePage.languageOptionButton);
      const languageMenu = homePage.languageMenu;
      const estonianLangOption = languageMenu.locator(estoniaOption);
      await homePage.clickButton(estonianLangOption);
      await homePage.assertUrlContains(estonianLanguagePath.path);
    },
  );

  test(
    "when user switches language from English to Estonian, website url should change (mobile view)",
    { tag: ["@mobileOnly"] },
    async ({ homePage }) => {
      await homePage.clickButton(homePage.menuButton);
      await homePage.clickButton(homePage.languageOptionButton.nth(1));
      const languageMenu = homePage.languageMenu;
      const estonianLangOption = languageMenu.locator(estoniaOption);
      await homePage.clickButton(estonianLangOption);
      await homePage.assertUrlContains(estonianLanguagePath.path);
    },
  );
});
