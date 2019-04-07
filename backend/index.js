/* eslint-disable no-console */
import express from 'express';
import { getInstagramCount, getTwitterCount } from './lib/scraper';
import db from './lib/db';
import './lib/cron';

const cors = require('cors');

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
        console.log('Scraping!!!');
        const [iCount, tCount] = await Promise.all([getInstagramCount(), getTwitterCount()]);
        res.json({ iCount, tCount });
});

app.get('/data', async (req, res, next) => {
        // Get scrape data
        const twitter = db.value();
        res.json(twitter);

        // Respond with data
});

app.listen(2093, () => {
        console.log(`Example App running on port http://localhost:2093`);
});
