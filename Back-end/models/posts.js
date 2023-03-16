const mongoose = require('mongoose');

// Posts embedded Documents
const Postschema = new mongoose.Schema({
    title: {
        type:String,
        // Required: [true, 'please add a title'],
        // maxlength: 29
    },
    description: {
        type:String,
        // Required: [true, 'please add a Description'],
        // maxlength: 299
    },
    date_posted:{
        type: Date,
        default: Date.now
    },
    location:{
        type: String,
        // maxlength: 19
    }
})

const  Posts = mongoose.model('posts',Postschema)

module.exports = Posts