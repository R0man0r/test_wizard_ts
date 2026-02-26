import { Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class Country extends Base {
  readonly countryList: Locator;
  readonly timezoneList: Locator;

  constructor(page: Page) {
    super(page);
    this.url = /select-country-or-region/;
    this.countryList = page.getByText('Country or region');
    this.timezoneList = page.getByText('Time zone', { exact: true });
    this.nextBtnName = 'Next';
  }
}
