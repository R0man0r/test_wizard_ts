import { test, expect } from '@playwright/test';
import { Welcome } from '../models/Welcome';
import { Country } from '../models/Country';
import { Password } from '../models/Password';
import { Mode } from '../models/Mode';
import { RouterMode } from '../models/RouterMode';
import { Schema } from '../models/Schema';
import { trace } from 'node:console';
import { WanPort } from '../models/WanPort';
import { ConnectToEth } from '../models/ConnectToEth';
import { ScheduleUpdates } from '../models/ScheduleUpdates';
import { WifiSettings } from '../models/WifiSettings';
import { WifiPerformance } from '../models/WifiPerformance';
import { ExtraSegments } from '../models/ExtraSegments';
import { DeviceCreds } from '../models/DeviceCreds';
import { Finish } from '../models/Finish';

async function traceStep(name: string, action: () => Promise<void>) {
  const start = Date.now();
  await test.step(name, action);
  const end = Date.now();
  console.log(`Page ${name} test took ${end - start} ms`);
}

test('Setup Wizard Flow', async ({ page }) => {
  await traceStep('Welcome', async () => {
    await page.goto('http://192.168.1.1/');
    const welcomePage = new Welcome(page);
    await welcomePage.checkUrl();
    await welcomePage.clickNext();
  });

  await traceStep('Country Select', async () => {
    const countryPage = new Country(page);
    await countryPage.checkUrl();
    await countryPage.clickNext();
  });

  await traceStep('Set up password', async () => {
    const passwordPage = new Password(page);
    await passwordPage.checkUrl();
    await passwordPage.fillPwd('admin1234');
    await passwordPage.clickNext();
  });

  await traceStep('Mode Selection', async () => {
    const modePage = new Mode(page);
    await modePage.checkUrl();
    await modePage.radioRouter.click();
    await modePage.clickNext();
  });

  await traceStep('Router Mode Selection', async () => {
    const routerModePage = new RouterMode(page);
    await routerModePage.checkUrl();
    await routerModePage.radioEthCable.click();
    await routerModePage.clickNext();
  });

  await traceStep('Router Schematic', async () => {
    const schematicPage = new Schema(page);
    await schematicPage.checkUrl();
    await schematicPage.clickNext();
  });

  await traceStep('Select WAN Port', async () => {
    const wanPortPage = new WanPort(page);
    await wanPortPage.checkUrl();
    await wanPortPage.choosePort0();
    await wanPortPage.clickNext();
  });

  await traceStep('Connect to Ethernet', async () => {
    const connectToEthPage = new ConnectToEth(page);
    await connectToEthPage.checkUrl();
    await connectToEthPage.clickNext();
  });

  await traceStep('Schedule Updates', async () => {
    const scheduleUpdatesPage = new ScheduleUpdates(page);
    await scheduleUpdatesPage.checkUrl();
    await scheduleUpdatesPage.chboxAllDay.check();
    await scheduleUpdatesPage.clickNext();
  });

  await traceStep('Wifi SSID and Pwd Setup', async () => {
    const wifiSettingsPage = new WifiSettings(page);
    await wifiSettingsPage.checkUrl();
    await wifiSettingsPage.clickNext();
  });

  await traceStep('Wifi Performance Selection', async () => {
    const wifiPerfPage = new WifiPerformance(page);
    await wifiPerfPage.checkUrl();
    await wifiPerfPage.radioMaxPerf.click();
    await wifiPerfPage.clickNext();
  });

  await traceStep('Select Extra Segments', async () => {
    const extraSegmentsPage = new ExtraSegments(page);
    await extraSegmentsPage.checkUrl();
    await extraSegmentsPage.chooseSegment(extraSegmentsPage.chboxGuests);
    await extraSegmentsPage.clickNext();
  });

  await traceStep('Device Credentials', async () => {
    const deviceCredsPage = new DeviceCreds(page);
    await deviceCredsPage.checkUrl();
    await deviceCredsPage.clickNext();
  });

  await traceStep('Finish Setup', async () => {
    const finishPage = new Finish(page);
    await finishPage.checkUrl();
    await finishPage.clickNext();
  });
});
