import { test } from "./place-bet-football.fixture";
import { generateRandomNumber } from "../../../../../constants/helper/helper-methods";
import {
  fistHalf,
  secondHalf,
} from "../../../../../constants/test-keys/test-keys-market-options";

test.describe("Football game bets", () => {
  test(
    "when user adds more bets by bet builder for a soccer game, it should see added bets on bet builder and able to add stake",
    { tag: ["@desktopOnly"] },
    async ({ footballBetPage, homePage }) => {
      await footballBetPage.clickButton(
        footballBetPage.sideBetsButton.nth(5),
      );
      await footballBetPage.clickButton(footballBetPage.betBuilder);
      await footballBetPage.clickButton(footballBetPage.betByFirstHalf);
      await footballBetPage.clickButton(
        footballBetPage.sideBetOptions.nth(1).locator("button").nth(0),
      );
      await footballBetPage.clickButton(footballBetPage.betBySecondHalf);
      await footballBetPage.clickButton(
        footballBetPage.sideBetOptions.nth(1).locator("button").nth(0),
      );
      await footballBetPage.checkElementIsVisible(
        footballBetPage.betSlipContainer,
      );
      await footballBetPage.fillElement(
        homePage.inputStake,
        generateRandomNumber().toString(),
      );
      await footballBetPage.checkElementIsVisible(
        footballBetPage.betSlipSelection.first(),
      );
      await footballBetPage.checkElementIsVisible(
        footballBetPage.betSlipSelection.nth(1),
      );
      await footballBetPage.clickButton(homePage.placeBetButton);
      await footballBetPage.checkElementIsVisible(homePage.authScreen);
    },
  );

  test(
    "when user adds more bets by bet builder for a soccer game, it should see added bets on bet builder (mobile view)",
    { tag: ["@mobileOnly"] },
    async ({ footballBetPage, homePage }) => {
      await footballBetPage.clickButton(
        footballBetPage.sideBetsButton.nth(4),
      );
      await footballBetPage.clickButton(footballBetPage.betBuilder);
      await footballBetPage.clickButton(footballBetPage.marketGroups);
      const selectMenu = footballBetPage.popOverSelectmenu;
      const firstHalfOption = selectMenu.locator(fistHalf);
      await footballBetPage.clickButton(firstHalfOption);
      await footballBetPage.clickButton(
        footballBetPage.sideBetOptions.nth(1).locator("button").nth(0),
      );
      await footballBetPage.clickButton(footballBetPage.marketGroups);
      const secondHalfOption = selectMenu.locator(secondHalf);
      await footballBetPage.clickButton(secondHalfOption);
      await footballBetPage.clickButton(
        footballBetPage.sideBetOptions.nth(1).locator("button").nth(0),
      );
      await footballBetPage.clickButton(footballBetPage.betSlipFloaterMini);
      await footballBetPage.checkElementIsVisible(
        footballBetPage.betSlipContainer,
      );
      await footballBetPage.fillElement(
        homePage.inputStake,
        generateRandomNumber().toString(),
      );
      await footballBetPage.checkElementIsVisible(
        footballBetPage.betSlipSelection.first(),
      );
      await footballBetPage.checkElementIsVisible(
        footballBetPage.betSlipSelection.nth(1),
      );
      await footballBetPage.clickButton(homePage.placeBetButton);
      await footballBetPage.checkElementIsVisible(homePage.authScreen);
    },
  );
});
