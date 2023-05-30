import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext,Page } from "@playwright/test";
import { chromium } from "playwright-core";

const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;
export let page: Page;

BeforeAll(async function () {
    browser = await chromium.launch({
        headless:false
    })
});

Before(async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    page = await context.newPage();
});

After(async function ({ pickle, result }) {
    await page.close();
    await context.close();
    const oldVideo = await page.video()?.path();
});

AfterAll(async function () {
    await browser.close();
})