import type { Locator, Page } from "@playwright/test";
import { BaseWizardPage } from "./BaseWizardPage";

export class ScheduleUpdatesPage extends BaseWizardPage {

    static readonly PATH = "auto-update-schedule"
    readonly chboxAllDay: Locator

    constructor(page: Page){
        super(page)
        this.chboxAllDay = page.getByRole('checkbox', { name: 'All day' })
    }
}