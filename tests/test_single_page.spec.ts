import {test, expect} from "@playwright/test"
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

test('open welcome page', async({page}) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.open()
    await welcomePage.validatePage('Welcome to the Initial Setup Wizard')
    await welcomePage.chooseLanguage("English")
    await welcomePage.nextButton().click()
})

test('country page, choose country and timezone', async ({page}) => {
    const countryPage = new CountryPage(page);
    await countryPage.open()
    await countryPage.validatePage('Choose Your Location')
    await countryPage.chooseCountry("Russia")
    await countryPage.chooseTimezone("UTC+3 Europe/Moscow")
    await countryPage.nextButton().click()
})

test('open password page and set password', async ({page}) =>{
    const passwordPage = new PasswordPage(page);
    await passwordPage.open()
    await passwordPage.validatePage("Secure Your Device")
    await passwordPage.pwdField.fill('admin1234')
    await passwordPage.nextButton().click()
})

test('open mode page, select router mode', async ({page}) => {
    const modePage = new ModePage(page)
    await modePage.open()
    await modePage.validatePage("What Would You Like to Do?")
    await modePage.radioLabel.filter({hasText: 'Create a new network and connect it to the Internet'}).click()
    await modePage.nextButton().click()
})

test('open mode option page, select via eth', async ({page}) => {
    const modeOptionPage = new ModeOptionPage(page)
    await modeOptionPage.open()
    await modeOptionPage.validatePage("Choose Your Internet Connection")
    await modeOptionPage.radioLabel.filter({hasText: "Ethernet cable from your provider"}).click()
    await Promise.all([
        modeOptionPage.nextButton().click(),
        modeOptionPage.page.waitForURL(/scenario-schematic/)
    ])
})

test('open schematic page, click next', async ({page}) => {
    const schematicPage = new SchematicPage(page)
    await schematicPage.open()
    await schematicPage.validatePage("Confirm Your Internet Connection")
    await schematicPage.nextButton().click()
})

test('open connection page, click next when next button enabled', async ({page}) => {
    const connectionPage = new ConnectionPage(page)
    await connectionPage.open()
    await connectionPage.validatePage("Connect to Your Provider’s Ethernet")
    await connectionPage.clickNextWhenEnabled()
})

test('open schedule updates page, mark "all day" checkbox', async ({page}) => {
    const scheduleUpdatesPage = new ScheduleUpdatesPage(page)
    await scheduleUpdatesPage.open()
    await scheduleUpdatesPage.validatePage("Schedule Automatic Software Updates")
    await scheduleUpdatesPage.chboxAllDay.check()
    await scheduleUpdatesPage.nextButton().click()
})

test('open wifi settings page', async ({page}) => {
    const wifiSettingsPage = new WifiSettingsPage(page)
    await wifiSettingsPage.open()
    await wifiSettingsPage.validatePage("Wi-Fi Network Settings")
    await wifiSettingsPage.nextButton().click()
})

test('open wifi perf page, click balanced mode', async ({page}) => {
    const wifiPerfPage = new WifiPerfPage(page)
    await wifiPerfPage.open()
    await wifiPerfPage.validatePage("Optimize Wi-Fi Network Performance")
    await wifiPerfPage.radioBalanced.click()
    await wifiPerfPage.nextButton().click()
})

test('open share data page, click not now', async ({page}) => {
    const shareDataPage = new ShareDataPage(page)
    await shareDataPage.open()
    await shareDataPage.validatePage("Join the Product Improvement Programme")
    await shareDataPage.btnNotNow.click()
})

test('open device creds page, click next', async ({page}) => {
    const deviceCredentialsPage = new DeviceCredentialsPage(page)
    await deviceCredentialsPage.open()
    await deviceCredentialsPage.validatePage("Store Your Keenetic Device Credentials")
    await deviceCredentialsPage.nextButton().click()
})

test('open finish page, click finish btn', async ({page}) => {
    const finishSetupPage = new FinishSetupPage(page)
    await finishSetupPage.open()
    await finishSetupPage.validatePage("Finishing the Setup")
    await finishSetupPage.nextButton().click()
})