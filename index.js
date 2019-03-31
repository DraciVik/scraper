import { getHTML } from "./lib/scraper";

async function go() {
    console.log(await getHTML("https://twitter.com/dracivik"));
}

go();