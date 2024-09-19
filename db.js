const sqlite3 = require('sqlite3').verbose();

let db;

function initDb() {
  db = new sqlite3.Database('./videos.sqlite', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('데이터베이스에 연결되었습니다.');
  });

  db.run(`CREATE TABLE IF NOT EXISTS videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    title TEXT NOT NULL
  )`);
}

function getDb() {
  return db;
}

module.exports = {
  initDb,
  getDb
};