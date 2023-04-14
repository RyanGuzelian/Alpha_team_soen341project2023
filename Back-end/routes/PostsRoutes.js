const express = require('express')
const router_Post = express.Router()

const postController = require('./../Controller/PostsController')

//routes for possible requests

router_Post
    .route('/')
    .get(postController.getAllPosts) //done
    .delete(postController.deleteAllPosts) //done

router_Post  
    .route('/:id')
    .patch(postController.applyPost) //Done

router_Post
    .route('/postJob')
    .post(postController.createPost)

router_Post
    .route("/apply")
    .post(postController.applyToPost);

router_Post
    .route('/company/:companyId')
    .get(postController.getPostsByCompany);

router_Post
    .route('/:postId/candidates')
    .get(postController.getCandidatesByPostId);

router_Post
    .patch('/Posts/:postId/selectCandidate/:userId', postController.addSelectedCandidate);


module.exports = router_Post