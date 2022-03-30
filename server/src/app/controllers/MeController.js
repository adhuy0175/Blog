
const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');

class MeController {
    //[GET] /me
    storedCourses(req, res,next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}
//create an instance of the object
module.exports = new MeController();
