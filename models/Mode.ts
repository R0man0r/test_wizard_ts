import { Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class Mode extends Base {
  radioRouter: Locator;
  radioExtender: Locator;
  radioBackup: Locator;

  constructor(page: Page) {
    super(page);
    this.url = /select-desired-function/;
    this.radioRouter = page.getByText('Create a new network and');
    this.radioExtender = page.getByText('Extend an existing Wi-Fi');
    this.radioBackup = page.getByText('Restore settings from a');
  }
}
