// Setup the DB

import low from 'lowdb';
import FIleSync from 'lowdb/adapters/FIleSync';

const adapter = new FIleSync('db.json');
const db = low(adapter);
db.defaults({ twitter: [], instagram: [] }).write();

export default db;
