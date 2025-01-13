import { expect, Locator, Page, test } from "@playwright/test";
import {
  DOM_CONTENT_LOADED,
  TIMEOUT_WAIT_FOR_ELEMENT,
  TIMEOUT_WAIT_FOR_PAGES,
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

  public async reload(): Promise<void> {
    const currentUrl = this.page.url();
    await test.step(`Reloading page with url "${currentUrl}"`, async () => {
      await this.page.reload({
        waitUntil: DOM_CONTENT_LOADED,
        timeout: TIMEOUT_WAIT_FOR_ELEMENT,
      });
    });
  }

  public async clickButtonByText(name: string): Promise<void> {
    await test.step(`Click button ${name}`, async () => {
      await this.page
        .getByRole("button", { name })
        .waitFor({ state: "visible", timeout: TIMEOUT_WAIT_FOR_ELEMENT });
      await this.page.getByText(name).click();
    });
  }

  public async clickButton(element: Locator): Promise<void> {
    await test.step(`Click button: ${element}`, async () => {
      await element.waitFor({
        state: "visible",
        timeout: TIMEOUT_WAIT_FOR_ELEMENT,
      });
      await element.scrollIntoViewIfNeeded()
      await element.click();
    });
  }

  public async hover(element: Locator): Promise<void> {
    await test.step(`Hover to element: ${element}`, async () => {
      await element.hover({ timeout: TIMEOUT_WAIT_FOR_ELEMENT });
    });
  }

  public async clickCheckBox(element: Locator): Promise<void> {
    await test.step(`Click checkbox: ${element}`, async () => {
      await element.waitFor({
        state: "visible",
        timeout: TIMEOUT_WAIT_FOR_ELEMENT,
      });
      await element.click();
    });
  }

  public async fillElement(element: Locator, text: string): Promise<void> {
    await test.step("Fill element", async () => {
      await element.scrollIntoViewIfNeeded()
      await element.fill(text);
    });
  }

  public async pressEnter(): Promise<void> {
    await test.step("Press Enter", async () => {
      await this.page.keyboard.press("Enter");
    });
  }

  public async selectElement(element: Locator, value: string): Promise<void> {
    await test.step(`Select element: ${element} with value: ${value}`, async () => {
      await element.waitFor({ state: "visible" });
      await element.selectOption({ value });
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
      isNotVisible = true
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

  public async checkElementIsEnabled(
    element: Locator,
    isEnabled = true,
  ): Promise<void> {
    const stepName = `Check if element ${isEnabled ? "enabled" : "not enabled"}`;
    await test.step(stepName, async () => {
      await element.scrollIntoViewIfNeeded();
      await expect
        .soft(async () => {
          expect(await element.isEnabled()).toBe(isEnabled);
        })
        .toPass({ timeout: TIMEOUT_WAIT_FOR_ELEMENT });
    });
  }

  public async checkElementIsHidden(
    element: Locator,
    isHidden = false,
  ): Promise<void> {
    const stepName = `Check if element ${isHidden ? "not hidden" : "hidden"}`;
    await test.step(stepName, async () => {
      await expect
        .soft(async () => {
          expect(await element.isHidden());
        })
        .toPass({ timeout: TIMEOUT_WAIT_FOR_ELEMENT });
    });
  }

  public async waitForRequest(
    urlPattern: string,
    method: string,
  ): Promise<void> {
    await test.step(`Waiting for request matching pattern: "${urlPattern}"`, async () => {
      await this.page.waitForRequest(
        (request) =>
          request.url().includes(urlPattern) && request.method() === method,
        { timeout: TIMEOUT_WAIT_FOR_PAGES },
      );
    });
  }

  public async waitForUrl(urlPattern: string): Promise<void> {
    await test.step(`Waiting for URL matching pattern: "${urlPattern}"`, async () => {
      await this.page.waitForURL(urlPattern, {
        timeout: TIMEOUT_WAIT_FOR_PAGES,
      });
    });
  }

  public async waitForLoadState(
    loadState: "domcontentloaded" | "load" | "networkidle",
  ): Promise<void> {
    await test.step(`Waiting for load state: "${loadState}"`, async () => {
      await this.page.waitForLoadState(loadState);
    });
  }

  public async scrollToContainer(element: Locator): Promise<void> {
    await test.step("Scroll down to the specified container", async () => {
      await element.scrollIntoViewIfNeeded({
        timeout: TIMEOUT_WAIT_FOR_ELEMENT,
      });
    });
  }

  public async checkInputIsEmpty(inputLocator: Locator) {
    await test.step("Check if input value is empty",async ()=>{
      const value = await inputLocator.inputValue();
      test.expect(value).toBe('');
    })
  }

  public async checkElementCount(
      locator: Locator,
      expectedCount: number
  ): Promise<void> {
    const stepName = `Check if element count is ${expectedCount}`;
    await test.step(stepName, async () => {
      const actualCount = await locator.count();
      expect(actualCount).toBe(expectedCount);
    });
  }
}
