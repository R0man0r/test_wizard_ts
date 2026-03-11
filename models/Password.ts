import { expect, Locator, Page } from '@playwright/test';
import { Base } from './Base';

export class Password extends Base {
  pwdField: Locator;
  pwdInfo: Locator;

  constructor(page: Page) {
    super(page);
    this.url = /password/;
    this.pwdField = page.getByRole('textbox', { name: 'Admin password' });
    this.pwdInfo = page.locator('ndw-user-password-input');
  }

  async fillPwd(text: string) {
    await this.pwdField.fill(text);
  }

  async fillPwdWeak() {
    this.pwdField.clear();
    this.fillPwd('weak');
    await expect(this.pwdInfo).toContainText('At least 8 characters.');
    await expect(this.nextBtn).toBeDisabled();
  }

  async fillPwdRus() {
    this.pwdField.clear();
    this.fillPwd('админ');
    await expect(this.pwdInfo).toContainText(
      'Only numbers and characters from Latin alphabet are allowed',
    );
    await expect(this.nextBtn).toBeDisabled();
  }

  async fillPwdKnown() {
    this.pwdField.clear();
    this.fillPwd('password');
    await expect(this.pwdInfo).toContainText(
      'This password is well-known; please choose a different one.',
    );
    await expect(this.nextBtn).toBeDisabled();
  }

  async fillPwdFair() {
    this.pwdField.clear();
    this.fillPwd('admin1234');
    await expect(this.pwdInfo).toContainText(
      'Fair. Add upper/lower case, numbers, and symbols to make it stronger.',
    );
    await expect(this.nextBtn).toBeEnabled();
  }

  async fillPwdStrong() {
    this.pwdField.clear();
    this.fillPwd('M3tricell!_1_1');
    await expect(this.pwdInfo).toContainText('Strong password.');
    await expect(this.nextBtn).toBeEnabled();
  }
}
