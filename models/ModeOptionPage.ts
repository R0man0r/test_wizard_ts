import type { Locator, Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";


export class ModeOptionPage extends BaseWizardPage {
    static readonly PATH = 'select-specific-function'
    
    
    constructor(page: Page) {
        super(page)
    }

}