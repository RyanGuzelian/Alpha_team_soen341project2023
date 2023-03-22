const express = require('express')
const router_signUp = express.Router()

const SignUpController = require('../Controller/SignUpController')

router_signUp
    .route('/')
    .post(SignUpController.createUsers) //done


module.exports = router_signUp