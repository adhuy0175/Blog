const mongoose = require('mongoose');

const schema = mongoose.Schema(
{
roomname: {
type: String,
required: true,
},
capacity: {
type: integer,
required: true,
},
kind: {
type: String,
required: true,
},
price: {
type: String,
},
status: {
type: Boolean,
},
description: {
type: String,
},
},
{
timestamps: true,
},
);
module.exports = mongoose.model('Bill', schema);
