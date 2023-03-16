
const express = require('express')
const router_login = express.Router()

const loginController = require('./../Controller/LoginController')

//routes for possible requests

router_login
    .route('/')
    .post(loginController.login)

module.exports = router_login