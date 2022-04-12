const User = require('../models/Post');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
class UserController {
//[GET] /user
show(req, res) {
Post.find()
.then((post) => {
res.send({ post });
})
.catch(res.status(400).send(e));
}
//[]GET /user/create
create(req, res, next) {
var post = new Post({
title: req.body.title,
idRoom: req.body.idRoom,
idUser: req.body.idUser,
description: req.body.description,
linkimage: req.body.linkimage,
});
//Add the new user to the database
post
.save()
.then(() => {
res.send({ post });
})
.catch(next);
}
showById(req, res) {
const { username } = req.body;
//find the user by username and password
User.findOne({ username, password })
.then((user) => {
res.send({ user });
})
.catch(res.status(400).json({ message: 'User not found' }));
}
//[POST] /courses/Store
update(req, res) {
var query = { userName: req.params.userName, password: req.params.password };
//find user and update
Post.findOneAndUpdate(query, req.body)
.then(() => {
res.send({ user });
})
.catch(res.status(400).send(e));
}
delete(req, res) {
var query = { userName: req.params.userName };
//find user and delete
User.findOneAndDelete(query)
.then(() => {
res.send({ user });
})
.catch(res.status(400).send(e));
}
}
//create an instance of the object
module.exports = new UserController();
