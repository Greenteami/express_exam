
// 引入EXPRESS
// 建立 Express 應用程式

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// 設定首頁路由
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 設定 About 路由
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// 設定 Portfolio 路由
app.get('/portfolio', (req, res) => {
  res.sendFile(__dirname + '/public/portfolio.html');
});

// 設定 Contact 路由
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

// 監聽程式
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

