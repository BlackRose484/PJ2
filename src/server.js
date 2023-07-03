const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars').engine;
const db = require('./config/db');
var methodOverride = require('method-override');
const SortMiddleware = require('./app/Middlewares/SortMiddleware');

db.connect();

const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
const route = require('./routes')
app.use(SortMiddleware)

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
        sortable: (key,sort) =>{
          const sortType = key === sort.column ? sort.type: 'default'
          const icons = {
            default : 'oi oi-elevator',
            asc : 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending'
          }
          const types = {
            default :'desc',
            asc:'desc',
            desc:'asc'
          }
          const icon = icons[sortType];
          const type = types[sortType];
          return`<a href="?_sort&column=${key}&type=${type}"><span class="${icon}"></span></a>`;
        }
      },
    }),
  );
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoures/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})