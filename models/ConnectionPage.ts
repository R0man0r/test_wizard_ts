import { expect } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class ConnectionPage extends BaseWizardPage {
    static readonly PATH = "connect-device-to-wall-outlet"

    override async goToNextPage(nextPagePath: string): Promise<void> {
        await expect(this.nextButton()).toBeEnabled({timeout: 60_000})

        await Promise.all([
            this.nextButton().click(),
            this.page.waitForURL(`**/${nextPagePath}`)
        ])
    }
}