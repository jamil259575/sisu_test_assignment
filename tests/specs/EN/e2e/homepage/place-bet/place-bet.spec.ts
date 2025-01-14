import { test } from "./place-bet.fixture";
import { generateRandomNumber } from "../../../../../constants/helper/helper-methods";

test.describe("Placing bet", () => {
  test("when user clicks on a match card, place bet button by default should be disabled and input stake should be empty", async ({
    homePage,
  }) => {
    await homePage.matchContainer
      .nth(generateRandomNumber())
      .scrollIntoViewIfNeeded();
    const matchContainer = homePage.matchContainer.nth(generateRandomNumber());
    await matchContainer.scrollIntoViewIfNeeded();
    const firstOutcomeButton = matchContainer
      .getByTestId("outcome-button")
      .nth(0);
    await firstOutcomeButton.scrollIntoViewIfNeeded();
    await firstOutcomeButton.click();
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
    await homePage.fillElement(
      homePage.inputStake,
      generateRandomNumber().toString(),
    );
    await homePage.clickButton(homePage.placeBetButton);
    await homePage.checkElementIsVisible(homePage.authScreen);
  });

  test(
    "when user bets on multiple matches, it should see betslip container with bets & it should be able to clear those bets",
    { tag: ["@mobileOnly"] },
    async ({ homePage, betSlipContainer }) => {
      const firstMatchContainer = homePage.matchContainer.nth(0);
      await firstMatchContainer.scrollIntoViewIfNeeded();
      await firstMatchContainer.getByTestId("outcome-button").nth(0).click();
      const secondMatchContainer = homePage.matchContainer.nth(3);
      await secondMatchContainer.scrollIntoViewIfNeeded();
      await secondMatchContainer.getByTestId("outcome-button").nth(0).click();
      await homePage.clickButton(homePage.betSlipFloaterMini);
      await betSlipContainer.checkElementCount(
        betSlipContainer.betSlipSelection,
        2,
      );
      await betSlipContainer.clickButton(betSlipContainer.betSlipClearButton);
      await homePage.checkElementIsNotVisible(
        betSlipContainer.betSlipContainer,
      );
    },
  );

  test(
    "when user bets for a match and visits another page, it still should see its bet in betslip container below of page",
    { tag: ["@desktopOnly"] },
    async ({ homePage }) => {
      const randomMatchContainer = homePage.matchContainer.nth(
        generateRandomNumber(),
      );
      await randomMatchContainer.scrollIntoViewIfNeeded();
      const secondOutcomeButton = randomMatchContainer
        .getByTestId("outcome-button")
        .nth(1);
      await secondOutcomeButton.scrollIntoViewIfNeeded();
      await secondOutcomeButton.click();
      await homePage.clickButton(homePage.homePageButtonLobbyCategory);
      await homePage.checkElementIsVisible(homePage.betSlipFloater);
    },
  );

  test(
    "when user bets for a match and visits another page, it still should see its bet in betslip container below of page(mobile view)",
    { tag: ["@mobileOnly"] },
    async ({ homePage }) => {
      const randomMatchContainer = homePage.matchContainer.nth(
        generateRandomNumber(),
      );
      await randomMatchContainer.scrollIntoViewIfNeeded();
      const secondOutcomeButton = randomMatchContainer
        .getByTestId("outcome-button")
        .nth(1);
      await secondOutcomeButton.scrollIntoViewIfNeeded();
      await secondOutcomeButton.click();
      await homePage.clickButton(homePage.homePageButtonLobbyCategory);
      await homePage.checkElementIsVisible(homePage.betSlipFloaterMini);
    },
  );
});
