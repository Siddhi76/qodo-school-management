import asyncio
import threading
import http.server
import socketserver
import os
from playwright.async_api import async_playwright

DIST_DIR = os.path.join(os.path.dirname(__file__), "dist")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)
    
    def do_GET(self):
        # SPA fallback
        path = self.translate_path(self.path)
        if not os.path.exists(path) or os.path.isdir(path):
            self.path = "/index.html"
        return super().do_GET()

def start_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", 4175), Handler) as httpd:
        httpd.serve_forever()

t = threading.Thread(target=start_server, daemon=True)
t.start()

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto("http://127.0.0.1:4175/")
        await page.wait_for_timeout(1000)
        # Click on About Us link
        await page.click("text=About Us")
        await page.wait_for_timeout(1200)
        await page.screenshot(path="about-preview-full.png", full_page=False, clip={"x": 0, "y": 0, "width": 1440, "height": 600})
        print("Screenshot saved to about-preview-full.png")
        await browser.close()

asyncio.run(main())

