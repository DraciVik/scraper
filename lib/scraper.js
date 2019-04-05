import axios from 'axios';
import cherrio from 'cheerio';
import db from './db';

export async function getHTML(url) {
        const { data: html } = await axios.get(url);
        return html;
}

export async function getTwitterFollowers(html) {
        // load up cheerio
        const $ = cherrio.load(html);
        const span = $('[data-nav="followers"] .ProfileNav-value');
        return span.data('count');
}

export async function getInstagramFollowers(html) {
        const $ = cherrio.load(html);
        const dataInString = $('script[type="application/ld+json"]').html();
        const pageObject = JSON.parse(dataInString);
        return parseInt(pageObject.mainEntityofPage.interactionStatistic.userInteractionCount);
        // const span = $('[data-nav="followers"] .ProfileNav-value');
        // return span.data('count');
        // <script type="application/ld+json">
}

export async function getInstagramCount() {
        const html = await getHTML('https://instagram.com/DraciVik');
        const instagramCount = await getInstagramFollowers(html);
        return instagramCount;
}

export async function getTwitterCount() {
        const html = await getHTML('https://twitter.com/DraciVik');
        const twitterCount = await getTwitterFollowers(html);
        return twitterCount;
}

export async function runCron() {
        const [iCount, tCount] = await Promise.all([getInstagramCount(), getTwitterCount()]);
        console.log(iCount, tCount);
        db.get('twitter')
                .push({ date: Date.now(), count: tCount })
                .write();
        db.get('instagram')
                .push({ date: Date.now(), count: iCount })
                .write();
        console.log('Done');
}
