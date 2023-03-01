const mongoose = require('mongoose');


// Posts embedded Documents
const Postschema = new mongoose.Schema({
    title: {
        type:String,
        // Required: [true, 'please add a title'],
        // maxlength: 30
    },
    description: {
        type:String,
        // Required: [true, 'please add a Description'],
        // maxlength: 300
    },
    date_posted:{
        type: Date,
        default: Date.now
    },
    location:{
        type: String,
        // maxlength: 20
    }
})


//Users main Documents
const Users_data = new mongoose.Schema({
    User_type:{
        type: String,
    },
    name:{
        type: String,
        // maxlength: 20,
        // required:[true, 'please add your name']
    },
    lastname:{
        type: String,
        // maxlength: 20,
        // required:[true, 'please add an email']
        //
    },
    password:{
        type: String
        // maxlength: 20,
        // minlength: [7, Password must have at least 7 characters],
        // required:[true, 'please add a password']
        //
    },
    
    posts:[Postschema],

    email:{
        type: String,
        // unique : true
    }
})

const  User = mongoose.model('users',Users_data)

module.exports = User