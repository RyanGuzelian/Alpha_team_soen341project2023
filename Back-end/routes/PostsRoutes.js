const express = require('express')
const router_Post = express.Router()

const postController = require('./../Controller/PostsController')

//routes for possible requests

router_Post
    .route('/')
    .get(postController.getAllPosts)
    .post(postController.createPost)


module.exports = router_Post