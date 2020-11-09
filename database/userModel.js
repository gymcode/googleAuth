const mongoose = require('mongoose'); 

const userDataSchema = new mongoose.Schema({
    firstname: {
        type: String, 
        min: 3, 
        max: 255,
    }, 
    lastname: {
        type: String, 
        min: 3, 
        max: 255, 
    }, 
    email: {
        type: String, 
        min: 3,
        max: 255,
    },
    password: {
        type: String, 
        min: 3,
        max: 2048,
    },
    date: {
        type: Date, 
        default: Date.now(), 
    }
})

module.exports = mongoose.model('user', userDataSchema);
