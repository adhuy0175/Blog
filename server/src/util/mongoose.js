module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongooses) => mongooses.toObject());
    },
    mongooseToObject: function (mongooseObject) {
        return mongooseObject ? mongooseObject.toObject() : mongooseObject;
    },
};
