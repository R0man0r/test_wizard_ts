import { Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class WifiSettings extends Base {
  wifiSsid: Locator;
  wifiPwd: Locator;
  constructor(page: Page) {
    super(page);
    this.url = /wifi-settings/;
    this.wifiSsid = this.page.getByRole('textbox', { name: 'Network name (SSID)' });
    this.wifiPwd = this.page.getByRole('textbox', { name: 'Password' });
  }
}
