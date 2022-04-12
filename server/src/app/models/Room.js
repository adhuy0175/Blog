const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Room = new Schema({
roomname: {
type: String,
required: true,
},
capacity: {
type: Number,
required: true,
},
kind: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},
description: {
type: String,
required: true,
},
});
module.exports = mongoose.model('Room', Room);
