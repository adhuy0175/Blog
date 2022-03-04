const res = require("express/lib/response");

class SiteController{

    //[GET] /
    index(req, res){
        res.render('home');
    }
    //[Get] / Search
    search(req, res){
        res.render('search');
    }
}
//create a instance of the opject
module.exports = new SiteController;
