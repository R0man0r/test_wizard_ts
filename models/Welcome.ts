import { Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class Welcome extends Base {
  languageList: Locator;
  languageOption: Locator;

  constructor(page: Page) {
    super(page);
    this.url = /welcome/;
    this.nextBtnName = 'I agree';
    this.languageList = page.getByText('Language', { exact: true });
    this.languageOption = page.getByRole('listbox', { name: 'Language' }).getByLabel('English');
  }
}
