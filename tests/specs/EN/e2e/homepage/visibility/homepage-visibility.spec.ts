import { test } from "./homepage-visibility.fixture";

test.describe("Verify homepage elements", () => {
  test(
    "when user visits the home page, header and category list elements should be visible",
    { tag: ["@desktopOnly"] },
    async ({ homePage }) => {
      await homePage.checkElementIsVisible(homePage.sportsButton);
      await homePage.checkElementIsVisible(homePage.casinoButton);
      await homePage.checkElementIsVisible(homePage.liveCasinoButton);
      await homePage.checkElementIsVisible(homePage.roadMapButton);
      await homePage.checkElementIsVisible(homePage.promotionsButton);
      await homePage.checkElementIsVisible(homePage.categoryList);
      await homePage.checkElementIsVisible(homePage.loginButton);
      await homePage.checkElementIsVisible(homePage.signupButton);
      await homePage.checkElementIsVisible(homePage.languageOptionButton);
      await homePage.checkElementIsVisible(homePage.searchButton);
    },
  );

  test("when user clicks all sports button, it should see all categories container", async ({
    homePage,
  }) => {
    await homePage.clickButton(homePage.allSportsButton);
    await homePage.checkElementIsVisible(homePage.allSportsContainer);
  });
});
