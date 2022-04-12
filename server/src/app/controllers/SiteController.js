const Room = require('../models/Room');
const User = require('../models/User');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
class SiteController {
//[GET] /
index(req, res) {
Room.find({}, function (err, room) {
if (!err) res.json(room);
else res.status(400).json(err);
});
}
//[Get] / Search

show(req, res) {
User.find()
.then((user) => {
res.send({ user });
})
.catch();
}
//POST /register
async register(req, res) {
const { username, password, name, email } = req.body.username;
//Validate username and password
if (!username || !password) {
return res
.status(400)
.send({ success: false, message: 'Vui lòng nhập tài khoản' });
}
try {
const user = await User.findOne({ username });
if (user) {
return res.status(400).send({ success: false, message: 'User already taken' });
}
const hashedPassword = await argon2.hash(password);
const newUser = new User({
username,
password: hashedPassword,
name,
email,
});
await newUser.save();
} catch (error) {
res.status(400).send(error);
}
}
create(req, res, next) {
const { username, password } = req.body;
var user = new User({
username,
password,
});
//Add the new user to the database
user
.save()
.then(() => {
res.send({ user });
})
.catch(next);
}
async showById(req, res) {
const { username, password } = req.body;
const arr = await User.find({ username, password });
res.json(arr);
}
}
//create a instance of the opject
module.exports = new SiteController();
