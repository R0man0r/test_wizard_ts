import { Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class WifiPerformance extends Base {
  radioMaxPerf: Locator;
  radioBalancedPerf: Locator;
  constructor(page: Page) {
    super(page);
    this.url = /wifi-performance-settings/;
    this.radioMaxPerf = page.getByText('Maximum performance mode');
    this.radioBalancedPerf = page.getByText('Balanced performance mode');
  }
}
