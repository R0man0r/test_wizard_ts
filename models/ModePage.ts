import { type Locator, type Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class ModePage extends BaseWizardPage {
    static readonly PATH = "select-desired-function";
    readonly radioLabel: Locator;


    constructor(page: Page) {
        super(page)
        this.radioLabel = page.locator('label')
    }

}