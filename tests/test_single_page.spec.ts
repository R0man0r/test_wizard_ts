import {test, expect} from "@playwright/test"
import { WelcomePage } from "../models/WelcomePage"
import { CountryPage } from "../models/CountryPage"
import { PasswordPage } from "../models/PasswordPage";
import { ModePage } from "../models/ModePage";
import { ModeOptionPage } from "../models/ModeOptionPage";

test('open welcome page', async({page}) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.open()
    await expect(welcomePage.nextButton()).toBeVisible()
    await expect(welcomePage.title).toHaveText('Welcome to the Initial Setup Wizard')
    await welcomePage.chooseLanguage("English")
    await welcomePage.nextButton().click()
})

test('country page, choose country and timezone', async ({page}) => {
    const countryPage = new CountryPage(page);
    await countryPage.open()
    await expect(countryPage.nextButton()).toBeVisible()
    await expect(countryPage.title).toHaveText('Choose Your Location')
    await countryPage.chooseCountry("Russia")
    await countryPage.chooseTimezone("UTC+3 Europe/Moscow")
    await countryPage.nextButton().click()
})

test('open password page and set password', async ({page}) =>{
    const passwordPage = new PasswordPage(page);
    await passwordPage.open()
    await expect(passwordPage.nextButton()).toBeVisible()
    await expect(passwordPage.title).toHaveText("Secure Your Device")
    await passwordPage.pwdField.fill('admin1234')
    await passwordPage.nextButton().click()
})

test('open mode page, select router mode', async ({page}) => {
    const modePage = new ModePage(page)
    modePage.open()
    await expect(modePage.nextButton()).toBeVisible()
    await expect(modePage.title).toHaveText("What Would You Like to Do?")
    await modePage.radioLabel.filter({hasText: 'Create a new network and connect it to the Internet'}).click()
    await modePage.nextButton().click()
})

test('open mode option page, select via eth', async ({page}) => {
    const modeOptionPage = new ModeOptionPage(page)
    modeOptionPage.open()
    await expect(modeOptionPage.nextButton()).toBeVisible()
    await expect(modeOptionPage.title).toHaveText("Choose Your Internet Connection")
    await modeOptionPage.radioLabel.filter({hasText: "Ethernet cable from your provider"}).click()
    await modeOptionPage.nextButton().click()
})
