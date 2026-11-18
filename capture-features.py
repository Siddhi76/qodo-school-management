import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1320, "height": 1000})
        await page.goto("http://localhost:5173/features")
        await page.wait_for_timeout(1800)
        await page.screenshot(path="features-preview-final.png", full_page=True)
        await browser.close()

asyncio.run(main())
