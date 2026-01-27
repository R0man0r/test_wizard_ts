import { type Locator, type Page } from "@playwright/test";


export abstract class BaseWizardPage {
    readonly page: Page;
    static readonly BASE_URL = 'http://192.168.1.1/wizards/initial-setup/';
    static PATH = '';
    static BtnNextName = 'Next';
    readonly title: Locator;



    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.mat-mdc-card-title')

    }

    async open() {
        const ctor = this.constructor as typeof BaseWizardPage;
        await this.page.goto(BaseWizardPage.BASE_URL + ctor.PATH)
    }


    nextButton() {
        const ctor = this.constructor as typeof BaseWizardPage;
        return this.page.getByRole('button', {name: ctor.BtnNextName})
    }


}