const express = require('express')
const router_login = express.Router()

const loginController = require('./../Controller/LoginController')

//routes for possible requests

router_login
    .route('/')
    .get(loginController.login) //done

module.exports = router_login