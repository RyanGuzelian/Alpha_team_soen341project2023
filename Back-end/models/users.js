const mongoose = require('mongoose')

const Users_data = new mongoose.Schema({
    User_type:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    posts:{
        type:String
    }

})

module.exports = mongoose.model('users',Users_data)