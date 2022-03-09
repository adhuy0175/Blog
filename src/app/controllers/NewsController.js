const res = require('express/lib/response');

class NewsController {
//[GET] /news
index(req, res) {
res.render('news');
}
show(req, res) {
res.send('New Details');
}
}
//create a instance of the opject
module.exports = new NewsController();
