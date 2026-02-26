import { Page } from '@playwright/test';
import { Base } from './Base';

export class Finish extends Base {
  constructor(page: Page) {
    super(page);
    this.url = /finish/;
    this.nextBtnName = 'Finish';
  }

  override async clickNext(): Promise<void> {
    await this.nextBtn.click();
    await this.spinner.waitFor({ state: 'hidden', timeout: 120_000 });
  }
}
