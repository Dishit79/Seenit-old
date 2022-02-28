import puppeteer from "https://deno.land/x/puppeteer/mod.ts";
import { sleep } from "https://deno.land/x/sleep/mod.ts";

const browser = await puppeteer.launch({ headless: true});
const page = await browser.newPage();
await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36');
await page.goto("https://fembed-hd.com/f/x4kj7h5p8zrwx35");
await page.screenshot({ path: "example.png" });

await page.click('[id="download"]');

console.log("sleep start");
await sleep(11);
console.log("sleep done");

const name = await page.evaluate(() => {
  return document.querySelector("#downloads > p:nth-child(3)").innerHTML;
})
console.log(name);

//  await browser.close();
