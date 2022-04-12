const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = new Schema({
idRoom: {
type: String,
required: true,
},
idUser: {
type: String,
ref: 'User',
required: true,
},
description: {
type: String,
},
description: {
type: String,
},
linkimage: { type: String },
});
module.exports = mongoose.model('Post', Post);
