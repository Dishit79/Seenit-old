import puppeteer from "https://deno.land/x/puppeteer/mod.ts";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://asianembed.io/download?id=Nzg5ODU=&title=Reply+1988+episode+19&typesub=SUB&mip=0.0.0.0&refer=https://watchasian.sh/");
await page.screenshot({ path: "example.png" });
const name = await page.evaluate(() => {
  return document.getElementById("duration");
})
console.log(name);


await browser.close();
