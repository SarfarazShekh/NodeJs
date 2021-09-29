const mongoose = require('mongoose');

const student = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('student',student);