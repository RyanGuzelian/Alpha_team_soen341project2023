const express = require('express')
const router = express.Router()

const userController = require('./../Controller/UsersController')

//routes for possible requests

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUsers)


router
    .route('/:id')    
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)



module.exports = router