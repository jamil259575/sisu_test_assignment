import { test } from "./place-bet.fixture";

test.describe("Placing bet", () => {
  test("when user clicks on a match card, place bet button by default should be disabled and input stake should be empty", async ({
    homePage,
  }) => {
    await homePage.clickButton(homePage.matchContainer.nth(6));
    await homePage.checkInputIsEmpty(homePage.inputStake);
    await homePage.checkElementIsDisabled(homePage.placeBetButton);
  });

  test.only("when unauthenticated user bets on a match and clicks place bet button, it should see auth tab", async ({
    homePage,
  }) => {
    const inputStake = "10"
        const randomMatchContainer = homePage.matchContainer.nth(6);
    const secondOutcomeButton = randomMatchContainer
      .getByTestId("outcome-button")
      .nth(1);
    await secondOutcomeButton.click();
    await homePage.fillElement(homePage.inputStake, inputStake);
    const potReturnValue = homePage.potReturnValue
    const oddValue = homePage.oddValue

    await homePage.clickButton(homePage.placeBetButton);

    await homePage.checkElementIsVisible(homePage.authScreen);
  });

  test("when user bets on multiple matches, it should see betslip container with bets & it should be able to clear those bets", async ({
    homePage,
  }) => {
    await homePage.matchContainer
      .nth(1)
      .getByTestId("outcome-button")
      .nth(0)
      .click();
    await homePage.matchContainer
      .nth(2)
      .getByTestId("outcome-button")
      .nth(0)
      .click();
    await homePage.clickButton(homePage.betSlipFloater);
    await homePage.checkElementCount(homePage.betSlipSelection, 2);
    await homePage.clickButton(homePage.betSlipClearButton);
  });

  test("when user adds more bets by bet builder for a game, it should see chosen added bets on bet builder ", async ({
    homePage,
  }) => {
    await homePage.clickButton(homePage.sideBetsButton.nth(3));
    await homePage.checkElementIsVisible(homePage.betSlipClearButton);
    // yazacam bunu
  });

});
