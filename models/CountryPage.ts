import { expect, type Locator, type Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class CountryPage extends BaseWizardPage {
    static readonly PATH = 'select-country-or-region';
    readonly countryList: Locator;
    readonly timezoneList: Locator;
    readonly option: Locator;

    constructor(page: Page) {
        super(page)

        this.countryList = this.countryList = page
        .locator('mat-form-field')
        .filter({ hasText: 'Country'})
        .locator('mat-select')

        this.timezoneList = page
        .locator('mat-form-field')
        .filter({ hasText: 'Time zone'})
        .locator('mat-select')

        this.option = page.locator('.mdc-list-item__primary-text')
    }

    async chooseCountry(country: string) {
        await expect(this.countryList).toBeVisible()
        await this.countryList.click()
        await expect(this.option.getByText(country)).toBeVisible()
        await this.option.getByText(country).click()
    }

    async chooseTimezone(timezone: string) {
        await expect(this.timezoneList).toBeVisible()
        await this.timezoneList.click()
        await expect(this.option.getByText(timezone)).toBeVisible()
        await this.option.getByText(timezone).click()
    }

}