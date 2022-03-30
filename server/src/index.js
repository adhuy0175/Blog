const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const port = 5000;
const app = express();
const route = require('./routes');
const db = require('./config/db');

//connect to database
db.connect()
    .then((r) => {
        console.log('connected to database');
    })
    .catch((e) => {
        console.log('error connecting to database');
    });

app.use(express.static(path.join(path.join(__dirname, 'public'))));
//HTTP logger
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.use(methodOverride('_method'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//Route init
route(app);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
