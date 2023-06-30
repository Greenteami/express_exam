const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set ('view engine', 'handlebars')

 app.get('/', (req, res ) => {
   res.render('index')
 })

//  app.listen(port, () => {
//    console.log(`Express is listening on  http://localhost:${port}`)
//  })
//  app.use(express.static('public'));


//  app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/views/index.html');
//  });


//  app.get('/about', (req, res) => {
//    res.sendFile(__dirname + '/views/about.html');
//  });


//  app.get('/portfolio', (req, res) => {
//    res.sendFile(__dirname + '/views/portfolio.html');
//  });


//  app.get('/contact', (req, res) => {
//    res.sendFile(__dirname + '/views/contact.html');
//  });

 
//  app.listen(port, () => {
//    console.log(`Server is running on  http://localhost:${port}`);
//  });