import { Page } from '@playwright/test';
import { Base } from './Base';

export class Schema extends Base {
  constructor(page: Page) {
    super(page);
    this.url = /scenario-schematic/;
    this.nextBtnName = 'Confirm';
  }
}
