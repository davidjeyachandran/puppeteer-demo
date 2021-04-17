const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://2020.drupalcamp.nyc/");
  await page.screenshot({ path: "screenshots/homepage.png" });

  // Goto View Schedule
  const selector =
    "#block-drupalnyc-content > article > div > div.field.field--name-field-content.field--type-entity-reference-revisions.field--label-hidden.field__items > div:nth-child(1) > section > div > div > div > div > a:nth-child(1)";

  await page.waitForSelector(selector);
  await page.click(selector);
  await page.screenshot({ path: "screenshots/schedule.png" });

  await browser.close();
})();
