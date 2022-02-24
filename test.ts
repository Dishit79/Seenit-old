import puppeteer from "https://deno.land/x/puppeteer/mod.ts";

const browser = await puppeteer.launch({ headless: false , product: 'firefox' });
const page = await browser.newPage();
await page.setUserAgent('5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36');
await page.goto("https://asianembed.io/download?id=Nzg5ODU=&title=Reply+1988+episode+19&typesub=SUB&mip=0.0.0.0&refer=https://watchasian.sh/");
await page.setViewport({
            width: 1920 + Math.floor(Math.random() * 100),
            height: 3000 + Math.floor(Math.random() * 100),
            deviceScaleFactor: 1,
            hasTouch: false,
            isLandscape: false,
            isMobile: false,
        });
await page.screenshot({ path: "example.png" });
const name = await page.evaluate(() => {
  return document.getElementById("duration");
})
console.log(name);


//  await browser.close();
