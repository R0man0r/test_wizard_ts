import { expect, type Locator, type Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class WelcomePage extends BaseWizardPage {
    static readonly PATH = 'welcome';
    static readonly BtnNextName = 'Start setup';
    readonly languageList: Locator;
    readonly languageOptions: Locator;

    constructor(page: Page) {
        super(page);
        this.languageList = page.locator('#mat-select-value-0')
        this.languageOptions = page.getByRole('listbox')
    }

        async chooseLanguage(language: string) {
        await this.languageList.click()
        await expect(this.languageOptions).toBeVisible()
        await this.languageOptions.getByText(language).click()
    }
}