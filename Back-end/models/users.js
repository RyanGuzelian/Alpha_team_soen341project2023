var mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1/test')


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
    },
    date:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('users',Users_data)