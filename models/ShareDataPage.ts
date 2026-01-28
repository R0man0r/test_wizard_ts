import type { Locator, Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";


export class ShareDataPage extends BaseWizardPage {
    static readonly PATH = "product-improvement"
    readonly btnNotNow: Locator
    static BtnNextName = "Join"

    constructor(page: Page){
        super(page)
        this.btnNotNow = page.getByRole('button', {name: 'Not now'})
    }
}