import { BaseWizardPage } from "./BaseWizardPage";


export class FinishSetupPage extends BaseWizardPage {
    static readonly PATH = 'finish'
    static BtnNextName = 'Finish'
    static readonly dashboardPath = 'dashboard'

    override async goToNextPage(nextPagePath: string): Promise<void> {
        await Promise.all([
            this.nextButton().click(),
            this.page.waitForURL(`**/${nextPagePath}`, {timeout: 120_000})
            ])
    }
}