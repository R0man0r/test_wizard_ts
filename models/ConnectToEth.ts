import { expect, Page } from '@playwright/test';
import { Base } from './Base';

export class ConnectToEth extends Base {
  constructor(page: Page) {
    super(page);
    this.url = /connect-device-to-wall-outlet/;
  }

  override async clickNext(): Promise<void> {
    await expect(this.nextBtn).toBeEnabled({ timeout: 60_000 });
    await this.nextBtn.click();
    await this.spinner.waitFor({ state: 'hidden', timeout: 5000 });
  }
}
