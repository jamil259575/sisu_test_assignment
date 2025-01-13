import { test } from "./place-bet.fixture";

test.describe("Placing bet", () => {
  test("when user clicks on a match card, place bet button by default should be disabled and input stake should be empty", async ({
    homePage,
  }) => {
    await homePage.clickButton(homePage.matchContainer.nth(0));
    await homePage.checkInputIsEmpty(homePage.inputStake);
    await homePage.checkElementIsDisabled(homePage.placeBetButton);
  });

  test("when unauthenticated user bets on a match and clicks place bet button, it should see auth tab", async ({
    homePage,
  }) => {
    const randomMatchContainer = homePage.matchContainer.nth(0);
    await randomMatchContainer.scrollIntoViewIfNeeded();
    const secondOutcomeButton = randomMatchContainer
      .getByTestId("outcome-button")
      .nth(1);
    await secondOutcomeButton.scrollIntoViewIfNeeded();
    await secondOutcomeButton.click();
    await homePage.fillElement(homePage.inputStake, "10");
    await homePage.clickButton(homePage.placeBetButton);
    await homePage.checkElementIsVisible(homePage.authScreen);
  });

  test(
    "when user bets on multiple matches, it should see betslip container with bets & it should be able to clear those bets",
    { tag: ["@mobileOnly"] },
    async ({ homePage,betSlipContainer }) => {
      const firstMatchContainer = homePage.matchContainer.nth(0);
      await firstMatchContainer.scrollIntoViewIfNeeded();
      await firstMatchContainer.getByTestId("outcome-button").nth(0).click();
      const secondMatchContainer = homePage.matchContainer.nth(3);
      await secondMatchContainer.scrollIntoViewIfNeeded();
      await secondMatchContainer.getByTestId("outcome-button").nth(0).click();
      await homePage.clickButton(homePage.betSlipFloaterMini);
      await betSlipContainer.checkElementCount(betSlipContainer.betSlipSelection, 2);
      await betSlipContainer.clickButton(betSlipContainer.betSlipClearButton);
      await homePage.checkElementIsNotVisible(betSlipContainer.betSlipContainer);
    },
  );
  // test.only("when user adds more side bets by bet builder for a game, it should see added bets on bet builder ", async ({
  //   homePage,betSlipContainer
  // }) => {
  //   await homePage.clickButton(homePage.sideBetsButton.nth(5))
  //     await betSlipContainer.clickButton(betSlipContainer.betBuilder)
  //   await betSlipContainer.clickButton(betSlipContainer.sideBetOptions.nth(2).locator('button').nth(0))
  //   await betSlipContainer.clickButton(betSlipContainer.sideBetOptions.nth(3).locator('button').nth(0))
  //   await betSlipContainer.checkElementCount(betSlipContainer.betSlipSelection,2)
  //   //await betSlipContainer.checkElementIsEnabled(homePage.placeBetButton)
  // });
});
