const res = require('express/lib/response');
const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
//[GET] /
    index(req, res, next) {
//res.render('home');
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
//[Get] / Search
    search(req, res) {
        res.render('search');
    }
}
//create a instance of the opject
module.exports = new SiteController();
