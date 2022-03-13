import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";




const url = 'https://watchasian.sh/the-presidents-wife-boss-2021-episode-19.html'


const rawHtml = await fetch(url)
const readableHtml = await rawHtml.text()
//console.log(readableHtml);

const $ = cheerio.load(readableHtml)

const t = $('.xstreamcdn').attr('data-video')
console.log(t);
