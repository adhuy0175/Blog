const coursesRouter = require('./course');
const usersRouter = require('./user');
const siteRouter = require('./site');
const postRouter = require('./post');

function route(app) {
app.use('/courses', coursesRouter);
app.use('/', siteRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);
}

module.exports = route;
