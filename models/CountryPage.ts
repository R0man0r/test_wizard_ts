import { expect, type Locator, type Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class CountryPage extends BaseWizardPage {
    static readonly PATH = 'select-country-or-region';
    readonly countryList: Locator;
    readonly timezoneList: Locator;
    readonly option: Locator;

    constructor(page: Page) {
        super(page);
        this.countryList = this.countryList = page.locator('#mat-select-0 svg')
        this.timezoneList = page.locator('#mat-select-1 svg')
        this.option = page.locator('.mdc-list-item__primary-text')
    }

    async chooseCountry(country: string) {
        await this.countryList.click()
        // const option = this.page.locator('div[role="listbox"] >> text=' + country)
        // await option.waitFor({ state: 'visible'})
        await expect(this.option.getByText(country)).toBeVisible()
        await this.option.getByText(country).click()
    }

    async chooseTimezone(timezone: string) {
        await this.timezoneList.click()
        // const option = this.page.locator('div[role="listbox"] >> text=' + timezone)
        // await option.waitFor({state:'visible'})
        await expect(this.option.getByText(timezone)).toBeVisible()
        await this.option.getByText(timezone).click()
    }

}