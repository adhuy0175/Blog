const mongoose = require('mongoose');

async function connect(uri, callback) {
    try {
        await mongoose.connect('mongodb://localhost:27017/Blog_adhuy', {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log('MongoDB connecting...');
    } catch (error) {
        console.log(error);
    }
}
module.exports = { connect };
