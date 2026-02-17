import {test} from "@playwright/test"
import { WelcomePage } from "../models/WelcomePage"
import { CountryPage } from "../models/CountryPage"
import { PasswordPage } from "../models/PasswordPage";
import { ModePage } from "../models/ModePage";
import { ModeOptionPage } from "../models/ModeOptionPage";
import { SchematicPage } from "../models/SchematicPage";
import { ConnectionPage } from "../models/ConnectionPage";
import { ScheduleUpdatesPage } from "../models/ScheduleUpdatesPage";
import { WifiSettingsPage } from "../models/WifiSettingsPage";
import { WifiPerfPage } from "../models/WifiPerfPage";
import { ShareDataPage } from "../models/ShareDataPage";
import { DeviceCredentialsPage } from "../models/DeviceCredentialsPage";
import { FinishSetupPage } from "../models/FinishSetupPage";
import { ExtraSegmentsPage } from "../models/ExtraSegmentsPage";

test.describe.serial('Setup wizard flow', () => {
    test.setTimeout(120_000)
    test('full setup flow', async ({ page }) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.open()
    await welcomePage.validatePage('Welcome to the Initial Setup Wizard')
    await welcomePage.chooseLanguage("English")
    await welcomePage.goToNextPage(CountryPage.PATH)

    const countryPage = new CountryPage(page);
    await countryPage.validatePage('Choose Your Location')
    await countryPage.chooseCountry("Russia")
    await countryPage.chooseTimezone("UTC+3 Europe/Moscow")
    await countryPage.goToNextPage(PasswordPage.PATH)

    const passwordPage = new PasswordPage(page);
    await passwordPage.validatePage("Secure Your Device")
    await passwordPage.pwdField.fill('admin1234')
    await passwordPage.goToNextPage(ModePage.PATH)

    const modePage = new ModePage(page)
    await modePage.validatePage("What Would You Like to Do?")
    await modePage.radioLabel.filter({hasText: 'Create a new network and connect it to the Internet'}).click()
    await modePage.goToNextPage(ModeOptionPage.PATH)

    const modeOptionPage = new ModeOptionPage(page)
    await modeOptionPage.validatePage("Choose Your Internet Connection")
    await modeOptionPage.radioLabel.filter({hasText: "Ethernet cable from your provider"}).click()
    await modeOptionPage.goToNextPage(SchematicPage.PATH)

    const schematicPage = new SchematicPage(page)
    await schematicPage.validatePage("Confirm Your Internet Connection")
    await schematicPage.goToNextPage(ConnectionPage.PATH)

    const connectionPage = new ConnectionPage(page)
    await connectionPage.validatePage("Connect to Your Provider’s Ethernet")
    await connectionPage.goToNextPage(ScheduleUpdatesPage.PATH)

    const scheduleUpdatesPage = new ScheduleUpdatesPage(page)
    await scheduleUpdatesPage.validatePage("Schedule Automatic Software Updates")
    await scheduleUpdatesPage.chboxAllDay.check()
    await scheduleUpdatesPage.goToNextPage(WifiSettingsPage.PATH)

    const wifiSettingsPage = new WifiSettingsPage(page)
    await wifiSettingsPage.validatePage("Wi-Fi Network Settings")
    await wifiSettingsPage.goToNextPage(WifiPerfPage.PATH)

    const wifiPerfPage = new WifiPerfPage(page)
    await wifiPerfPage.validatePage("Optimize Wi-Fi Network Performance")
    await wifiPerfPage.radioBalanced.click()
    await wifiPerfPage.goToNextPage(ExtraSegmentsPage.PATH)

    const extraSegmentsPage = new ExtraSegmentsPage(page)
    await extraSegmentsPage.validatePage("Create Additional Wi-Fi Networks")
    await extraSegmentsPage.chboxGuests.click()
    await extraSegmentsPage.goToNextPage(ShareDataPage.PATH)

    const shareDataPage = new ShareDataPage(page)
    await shareDataPage.validatePage("Join the Product Improvement Programme")
    await shareDataPage.goToNextPage(DeviceCredentialsPage.PATH)

    const deviceCredentialsPage = new DeviceCredentialsPage(page)
    await deviceCredentialsPage.validatePage("Store Your Keenetic Device Credentials")
    await deviceCredentialsPage.goToNextPage(FinishSetupPage.PATH)

    const finishSetupPage = new FinishSetupPage(page)
    await finishSetupPage.validatePage("Finishing the Setup")
    await finishSetupPage.goToNextPage(FinishSetupPage.dashboardPath)
    })

})
