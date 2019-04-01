import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scraper';

async function go() {
        // const html = await getHTML('https://twitter.com/DraciVik');
        // const twCount = await getTwitterFollowers(html);
        // console.log(`You have ${twCount} followers`);

        const followers = await getInstagramFollowers('DraciVik');
}

go();
