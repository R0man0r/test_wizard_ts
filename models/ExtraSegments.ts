import { Page } from '@playwright/test';
import { Base } from './Base';

export class ExtraSegments extends Base {
  chboxGuests: string;
  chboxIot: string;
  chboxKids: string;
  chboxTeens: string;
  constructor(page: Page) {
    super(page);
    this.url = /select-extra-segments/;
    this.chboxGuests = 'Guests Network';
    this.chboxIot = 'IoT Network';
    this.chboxKids = 'Kids Network';
    this.chboxTeens = 'Teens Network';
  }

  async chooseSegment(chboxName: string) {
    await this.page.getByText(chboxName);
  }
}
