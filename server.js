const express = require('express');
const { getDb, initDb } = require('./db');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

initDb();

app.get('/', (req, res) => {
  const db = getDb();
  db.all('SELECT * FROM videos', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('데이터베이스 오류');
    } else {
      res.render('index', { videos: rows });
    }
  });
});

app.post('/add', (req, res) => {
  const { url, title } = req.body;
  const db = getDb();
  db.run('INSERT INTO videos (url, title) VALUES (?, ?)', [url, title], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('데이터베이스 오류');
    } else {
      res.redirect('/');
    }
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다`);
});