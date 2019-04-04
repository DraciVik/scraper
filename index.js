import express from 'express';
import lowdb from 'lowdb';
import FIleSync from 'lowdb/adapters/FIleSync';
import { getInstagramCount, getTwitterCount } from './lib/scraper';

// Setup the DB

const adapter = new FIleSync('db.json');

const app = express();

app.get('/scrape', async (req, res, next) => {
        console.log('Scraping!!!');
        const [iCount, tCount] = await Promise.all([getInstagramCount(), getTwitterCount()]);
        console.log(iCount, tCount);
        res.json({ iCount, tCount });
});

app.listen(2093, () => console.log(`Example App running on port 2093`));
