import { test } from "./homepage.fixture";

test.describe("Auth screen", () => {
  test("when user clicks login or signup buttons, it should see auth tab", async ({
    homePage,
    authPage,
  }) => {
    await homePage.clickButton(homePage.loginButton);
    await authPage.checkElementIsVisible(authPage.authScreen);
    await authPage.clickButton(authPage.closeAuthScreen);
    await homePage.clickButton(homePage.signupButton);
    await authPage.checkElementIsVisible(authPage.authScreen);
    await authPage.clickButton(authPage.closeAuthScreen);
    await homePage.checkElementIsNotVisible(homePage.authScreen);
  });

  test("when user clicks register button on auth tab, it should not see login options ", async ({
    homePage,
    authPage,
  }) => {
    await homePage.clickButton(homePage.loginButton);
    await authPage.clickButton(authPage.registerTabButton)
    await authPage.checkElementIsNotVisible(authPage.emailOption)
    await authPage.checkElementIsNotVisible(authPage.pnpOption)
  });
});
