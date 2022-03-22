const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    show(req, res,next) {
        Course.findOne({slug: req.params.slug})
            .then(course =>{
                res.render('courses/show', {course:mongooseToObject(course)});
            })
            .catch(next)
    }
    //[]GET /courses/create
    create(req, res,next) {
       res.render('courses/create');
    }
    //[POST] /courses/Store
    store(req, res,next) {
        //res.json(req.body);
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAdWcXA2WV_Tv-Nn4eFb-7PiRZ5uQ`;
        const courses = new Course(formData);
        courses.save()
            .then(()=>res.redirect('/'))
            .catch(next);
    }

}
//create an instance of the object
module.exports = new CourseController();
