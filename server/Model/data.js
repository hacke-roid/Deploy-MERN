const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    username: String,
    password: String,
})

const DataModel = mongoose.model('users', DataSchema);

module.exports = DataModel;