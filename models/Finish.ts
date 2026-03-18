import test, { Page } from '@playwright/test';
import { Base } from './Base';

export class Finish extends Base {
  constructor(page: Page) {
    super(page);
    this.url = /finish/;
    this.nextBtnName = 'Finish';
  }

  override async clickNext(): Promise<void> {
    test.setTimeout(120000);
    await this.nextBtn.click();

    await this.page.waitForURL(/dashboard/, {
      waitUntil: 'load',
    });
  }
}
