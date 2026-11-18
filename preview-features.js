const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:5173/features', { waitUntil: 'networkidle0' });
  await page.waitForSelector('.features-page', { timeout: 20000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'features-preview.png', fullPage: false, clip: { x: 0, y: 0, width: 1280, height: 900 } });
  await browser.close();
  console.log('saved features-preview.png');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
