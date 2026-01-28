import { expect } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class ConnectionPage extends BaseWizardPage {
    static readonly PATH = "connect-device-to-wall-outlet"

    async clickNextWhenEnabled() {
        await expect(this.nextButton()).toBeEnabled({timeout: 60_000})
        await this.nextButton().click()
    }
}