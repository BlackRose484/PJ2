const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars').engine;
const db = require('./config/db');
var methodOverride = require('method-override')

db.connect();

const app = express()
const port = 3000

app.use(methodOverride('_method'))
const route = require('./routes')

app.use(
    express.urlencoded({
      extended: true,
    }),
  );
  app.use(express.json());
  
  app.engine(
    'hbs',
    exphbs({
      extname: '.hbs',
      helpers: {
        sum: (a, b) => a + b,
      },
    }),
  );
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoures/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})