import type { Locator, Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class WifiPerfPage extends BaseWizardPage {
    static readonly PATH = "wifi-performance-settings"
    readonly radioBalanced: Locator

    constructor(page: Page) {
        super(page)
        this.radioBalanced = page.getByRole('radio', {name: "Balanced performance mode"} )
    }
}