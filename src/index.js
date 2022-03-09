const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const port = 3000;
const app = express();

const route = require('./routes');
app.use(express.static(path.join(path.join(__dirname, 'public'))));
//HTTP logger
//app.use(morgan('combined'));
app.use(express.urlencoded());
app.use(express.json());
//template engine
app.engine(
'hbs',
engine({
extname: '.hbs',
}),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
//Route init
route(app);

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});
