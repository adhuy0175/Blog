const mongoose = require('mongoose');
require('dotenv').config();
async function connect(uri, callback) {
try {
await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_USERNAME}`, {
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log('MongoDB connected');
} catch (error) {
console.log(error);
}
}
module.exports = { connect };
