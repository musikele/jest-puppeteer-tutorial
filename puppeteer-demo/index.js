const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://michelenasti.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
