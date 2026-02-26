import { expect, Locator, Page } from '@playwright/test';

export class Base {
  readonly page: Page;
  readonly title: Locator;
  readonly spinner: Locator;
  nextBtnName: string;
  url: RegExp;

  constructor(page: Page) {
    this.page = page;
    this.url = /checktonotforgeturlreassignment/;
    this.nextBtnName = 'Next';
    this.title = page.locator('mat-card-title');
    this.spinner = page.locator('mat-spinner');
  }

  get nextBtn(): Locator {
    return this.page.getByRole('button', { name: this.nextBtnName });
  }

  async clickNext() {
    await this.nextBtn.click();
    await this.spinner.waitFor({ state: 'hidden', timeout: 5000 });
  }

  async checkUrl() {
    await expect(this.page).toHaveURL(this.url);
  }
}
