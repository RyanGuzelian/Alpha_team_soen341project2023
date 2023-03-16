const Post = require('../models/posts')

//General requests

exports.getAllPosts= async (req,res) => {           // Method for getting the list of users
    
    try{
        const all_Post = await Post.find()

        res.status(200).json({
            status:'success',
            results:all_Post.length,
            data:{
                all_Post
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message: err
        })
    }
}

exports.createPost = async (req, res) =>{          // Method for creating a new User
    
    try{
        const newPost = await Post.create(req.body)
        res.status(200).json({
            status:'success',
            value:newPost
        
        })
        

    }catch(err){
        res.status(400).json({
            status:'failed to create',
            message: err,
            value:req.body

        })
    }
}