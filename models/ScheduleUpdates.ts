import { expect, Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class ScheduleUpdates extends Base {
  readonly chboxAllDay: Locator;
  readonly listFrom: Locator;
  readonly listTo: Locator;
  constructor(page: Page) {
    super(page);
    this.url = /auto-update-schedule/;
    this.chboxAllDay = page.getByRole('checkbox', { name: 'All day' });
    this.listFrom = page.getByText('From');
    this.listTo = page.getByText('To');
  }

  async checkNextDayVisibility() {
    await this.listFrom.click();
    await this.page.getByRole('listbox', { name: 'From' }).getByLabel('02:').click();
    await this.listTo.click();
    await this.page.getByRole('listbox', { name: 'To' }).getByLabel('02:').click();
    await expect(this.page.getByText('Next day')).toBeVisible();
  }
}
