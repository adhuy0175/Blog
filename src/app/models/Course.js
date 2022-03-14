const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Course = new Schema({
name: {
type: String,
required: true,
maxlength: [50, 'Course name must be less than 50 characters'],
},
description: {
type: String,
required: true,
maxlength: [500, 'Course description must be less than 500 characters'],
},
image: {
type: String,
required: true,
maxlength: [500, 'Course image must be less than 500 characters'],
},
createAt: {
type: Date,
default: Date.now,
},
updateAt: {
type: Date,
default: Date.now,
},
});
module.exports = mongoose.model('Course', Course);
