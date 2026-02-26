import { Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class WanPort extends Base {
  listPort: Locator;
  optPort0: Locator;
  optPort5: Locator;

  constructor(page: Page) {
    super(page);
    this.url = /select-matching-wan-port/;
    this.listPort = page.getByText('Internet connection port');
    this.optPort0 = page
      .getByRole('listbox', { name: 'Internet connection port' })
      .getByLabel('Port 0');
    this.optPort5 = page
      .getByRole('listbox', { name: 'Internet connection port' })
      .getByLabel('Port 5');
  }

  async choosePort0() {
    await this.listPort.click();
    await this.optPort0.click();
  }
}
