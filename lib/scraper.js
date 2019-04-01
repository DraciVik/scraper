import axios from 'axios';
import cherrio from 'cheerio';

async function getHTML(url) {
        const { data: html } = await axios.get('https://twitter.com/DraciVik');
        return html;
}

async function getTwitterFollowers(html) {
        // load up cheerio
        const $ = cherrio.load(html);
        const span = $('[data-nav="followers"] .ProfileNav-value');
        return span.data('count');
}

export { getHTML, getTwitterFollowers };
