const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
{
username: {
type: String,
unique: true,
},
password: {
type: String,
},
name: {
type: String,
default: '',
},
email: {
type: String,
default: '',
},
},
{ timestamps: true },
);
module.exports = mongoose.model('User', User);
