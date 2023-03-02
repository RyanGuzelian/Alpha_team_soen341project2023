const express = require('express')
const router = express.Router()

const userController = require('./../Controller/UsersController')

//routes for possible requests

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUsers)
    .get(userController.login)
    .get(userController.getUser)

router
    .route('/:id')    

    .patch(userController.updateUser)
    .delete(userController.deleteUser)



module.exports = router