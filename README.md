# express_exam

使用git bash執行 nodemon app.js啟動
瀏覽器中貼上 http://localhost:3000，看到首頁的內容，並
透過點擊導覽列上的按鈕切換到不同的頁面。

const express = require('express');
// 引入所需的模組
const express = require('express');

// 建立 Express 應用程式
const app = express();
const port = 3000;
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set ('view engine', 'handlebars')

// 設定首頁路由
app.get('/', (req, res) => {
  res.send('<h1>首頁</h1>');
});

// 設定 About 路由
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

// 設定 Portfolio 路由
app.get('/portfolio', (req, res) => {
  res.send('<h1>Portfolio</h1>');
});

// 設定 Contact 路由
app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1>');
});

// 啟動應用程式
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
