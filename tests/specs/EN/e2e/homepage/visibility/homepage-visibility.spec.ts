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

  // test.only("when user visits the home page, match cards should be visible and the count should be multiple", async ({
  //   homePage,
  // }) => {
  //   const matchContainers = homePage.matchContainer;
  //   const count = await matchContainers.count();
  //   test.expect(count).toBeGreaterThan(0);
  //   for (let i = 0; i < count; i++) {
  //     const matchContainer = matchContainers.nth(i);
  //     await test.expect(matchContainer).toBeVisible();
  //   }
  //   await homePage.checkElementIsVisible(homePage.loadMoreButton);
  // });
});
