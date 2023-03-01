const mongoose = require('mongoose');

const Users_data = new mongoose.Schema({
    User_type:{
        type: String
    },
    name:{
        type: String
    },
    password:{
        type: String
    },
    posts:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const  User = mongoose.model('users',Users_data)

module.exports = User