import type { Locator, Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class PasswordPage extends BaseWizardPage {
    static readonly PATH = "password"
    readonly pwdField: Locator

    constructor(page: Page) {
        super(page);
        this.pwdField = page.getByRole('textbox', { name: 'Admin password' })
    }
}