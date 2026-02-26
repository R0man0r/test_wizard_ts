import { Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class Password extends Base {
  pwdField: Locator;

  constructor(page: Page) {
    super(page);
    this.url = /password/;
    this.pwdField = page.getByRole('textbox', { name: 'Admin password' });
  }

  async fillPwd(text: string) {
    await this.pwdField.fill(text);
  }
}
