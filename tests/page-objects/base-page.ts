import { expect, Locator, Page, test } from "@playwright/test";
import {
  TIMEOUT_WAIT_FOR_ELEMENT,
} from "../constants/wait-conditions";

export abstract class BasePage {
  public url: string;
  readonly page: Page;
  readonly cookieConsent: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.cookieConsent = this.page.locator(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
    );
  }

  public async open(directUrl = this.url): Promise<void> {
    await test.step(`Opening the url "${directUrl}"`, async () => {
      await this.page.goto(directUrl);
    });
  }


  public async clickButton(element: Locator): Promise<void> {
    await test.step(`Click button: ${element}`, async () => {
      await element.waitFor({
        state: "visible",
        timeout: TIMEOUT_WAIT_FOR_ELEMENT,
      });
      await element.scrollIntoViewIfNeeded();
      await element.click();
    });
  }

  public async fillElement(element: Locator, text: string): Promise<void> {
    await test.step("Fill element", async () => {
      await element.scrollIntoViewIfNeeded();
      await element.fill(text);
    });
  }

  public async checkElementIsVisible(
    element: Locator,
    isVisible = true,
  ): Promise<void> {
    const stepName = `Check if element ${isVisible ? "visible" : "not visible"}`;
    await test.step(stepName, async () => {
      await expect
        .soft(async () => {
          expect(await element.isVisible()).toBe(isVisible);
        })
        .toPass({ timeout: TIMEOUT_WAIT_FOR_ELEMENT });
    });
  }

  public async checkElementIsNotVisible(
    element: Locator,
    isNotVisible = true,
  ): Promise<void> {
    const stepName = `Check if element ${isNotVisible ? "not visible" : "visible"}`;
    await test.step(stepName, async () => {
      await expect
        .soft(async () => {
          expect(await element.isVisible()).toBe(!isNotVisible);
        })
        .toPass({ timeout: TIMEOUT_WAIT_FOR_ELEMENT });
    });
  }

  public async checkElementIsDisabled(
    element: Locator,
    isDisabled = true,
  ): Promise<void> {
    const stepName = `Check if element ${isDisabled ? "disabled" : "not disabled"}`;
    await test.step(stepName, async () => {
      await element.scrollIntoViewIfNeeded();
      await expect
        .soft(async () => {
          expect(await element.isDisabled()).toBe(isDisabled);
        })
        .toPass({ timeout: TIMEOUT_WAIT_FOR_ELEMENT });
    });
  }

  public async checkInputIsEmpty(inputLocator: Locator) {
    await test.step("Check if input value is empty", async () => {
      const value = await inputLocator.inputValue();
      test.expect(value).toBe("");
    });
  }

  public async checkElementCount(
    locator: Locator,
    expectedCount: number,
  ): Promise<void> {
    const stepName = `Check if element count is ${expectedCount}`;
    await test.step(stepName, async () => {
      const actualCount = await locator.count();
      expect(actualCount).toBe(expectedCount);
    });
  }

  public async assertUrlContains(expectedUrl: string): Promise<void> {
    const stepName = `Assert the URL contains: "${expectedUrl}"`;
    await test.step(stepName, async () => {
      const currentUrl = this.page.url();
      expect(currentUrl).toContain(expectedUrl);
    });
  }
}
