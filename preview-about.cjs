const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

const distDir = path.join(__dirname, 'dist');
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  let filePath = path.join(distDir, reqPath);
  
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading file');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pup-preview-'));

server.listen(4173, async () => {
  console.log('Server running on 4173');
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      userDataDir: tempDir,
      headless: true
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 30000 });
    // Click on About Us link
    await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      const aboutLink = links.find(a => a.textContent.includes('About'));
      if (aboutLink) aboutLink.click();
    });
    await new Promise(r => setTimeout(r, 1500));

    // Capture the top portion (Navbar + Hero)
    await page.screenshot({
      path: path.join(__dirname, 'about-preview.png'),
      clip: { x: 0, y: 0, width: 1440, height: 500 }
    });
    console.log('Saved about-preview.png');
    await browser.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch (_) {}
    server.close();
  }
});
