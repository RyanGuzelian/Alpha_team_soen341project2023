const express = require('express')
const router = express.Router()

const userController = require('./../Controller/UsersController')
const postController = require('./../Controller/PostsController')

//routes for possible requests

router
    .route('/')
    .get(userController.getAllUsers) //done
    .delete(userController.deleteAll) //done
router
    .route('/:id')    
    .get(userController.getUser)    //done
    .patch(userController.updateUser) //done
    .delete(userController.deleteUser) //done

router
    .route('/:id/Posts')
    .get(postController.getIDPosts)    //Done
    .post(postController.createPost)   //done 

router
    .route('/:id/Posts/:id')
    .get(postController.getMyPost)    //done
    .delete(postController.deletePost)  //done
    .patch(postController.updatePost)  // done


router
    .get('/Users/:userId', userController.getUserById);

router
    .patch('/Users/:userId/addInterview/:postId', userController.addInterview);

router
    .patch('/:userId/update', userController.updateUser);

module.exports = router