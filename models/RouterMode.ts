import { Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class RouterMode extends Base {
  radioIspRouter: Locator;
  radioEthCable: Locator;
  radioUsbModem: Locator;

  constructor(page: Page) {
    super(page);
    this.url = /select-specific-function/;
    this.radioIspRouter = page.getByText('Modem/router from your');
    this.radioEthCable = page.getByText('Ethernet cable from your');
    this.radioUsbModem = page.getByText('USB mobile modem (3G/4G/5G)');
  }
}
