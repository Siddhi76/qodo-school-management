const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:5173/features', { waitUntil: 'load', timeout: 30000 });
  await new Promise((resolve) => setTimeout(resolve, 1800));
  await page.screenshot({ path: 'features-preview.png', fullPage: false, clip: { x: 0, y: 0, width: 1440, height: 900 } });

  await browser.close();
  console.log('captured features-preview.png');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
