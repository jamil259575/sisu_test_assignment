import { test } from "./place-bet-football.fixture";

test.describe("Football game bet", () => {
  test("when user adds more side bets by bet builder for a game, it should see added bets on bet builder", async ({
    footballBetPage
  }) => {
    await footballBetPage.clickButton(footballBetPage.sideBetsButton.nth(0))
    await footballBetPage.clickButton(footballBetPage.betBuilder)
    await footballBetPage.clickButton(footballBetPage.marketGroups)
    await footballBetPage.clickButton(footballBetPage.betByFirstHalf)
    await footballBetPage.clickButton(footballBetPage.sideBetOptions.nth(0).locator('button').nth(0))
    await footballBetPage.clickButton(footballBetPage.marketGroups)
    await footballBetPage.clickButton(footballBetPage.betBySecondHalf)
    await footballBetPage.clickButton(footballBetPage.sideBetOptions.nth(0).locator('button').nth(0))
    await footballBetPage.clickButton(footballBetPage.betSlipFloaterMini)
    await footballBetPage.checkElementCount(footballBetPage.betSlipSelection,2)
  });
});
