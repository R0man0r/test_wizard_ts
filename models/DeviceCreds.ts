import { Page } from '@playwright/test';
import { Base } from './Base';

export class DeviceCreds extends Base {
  constructor(page: Page) {
    super(page);
    this.url = /your-device-credentials/;
  }
}
