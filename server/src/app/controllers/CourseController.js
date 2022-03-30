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
    edit(req, res,next) {
        Course.findById(req.params.id)
            .then(course =>{
                res.render('courses/edit', {course:mongooseToObject(course)});
            })
            .catch(next)
    }
    //[]PUT /courses/:id
    update(req, res,next) {
       Course.updateOne({_id:req.params.id}, req.body)
           .then(()=>res.redirect('/me/stored/courses'))
           .catch(next)
    }
    //[]DELETE /courses/:id
    destroy(req, res,next) {
        Course.deleteOne({_id:req.params.id})
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(next)
    }

}
//create an instance of the object
module.exports = new CourseController();
