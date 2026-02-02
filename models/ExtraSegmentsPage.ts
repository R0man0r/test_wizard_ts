import type { Locator, Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class ExtraSegmentsPage extends BaseWizardPage {

    static readonly PATH = "select-extra-segments"
    readonly chboxGuests: Locator

    constructor(page: Page){
        super(page)

        this.chboxGuests = this.page.getByRole('checkbox', { name: 'Guests Network' })
    }

}