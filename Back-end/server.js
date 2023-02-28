require('dotenv').config()

//  Express dependencies 
const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess}= require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')


const app= express()
const mongoose = require('mongoose')
app.use(express.urlencoded({extended: false})) // Pass elements in the forms to the routes
app.use(bodyparser.json())

// Routes to different tabs
const registerRouter = require('./routes/register')
const registerLogin = require('./routes/login')
const registerProfile = require('./routes/profile')


app.set('view engine', 'ejs') // declare that we are going to use EJS

mongoose.connect('mongodb://127.0.0.1/HirED_DB') //CONNECT TO THE DATABASE AT LOCAL HOST: 127.0.0.1



app.use('/register',registerRouter)
app.use('/login',registerLogin)
app.use('/Profile',registerProfile)


app.get('/',(req,res) => {
    const myusers = [{
        name: 'Cristian',
        age: '26',
        type: 'job-seeker',
        last_connection: Date.now()
    },
    {
        name: 'Aidee',
        age: '22',
        type: 'Employer',
        last_connection: Date.now()
    }]
    res.render('menu/index', {myusers:myusers})
})


app.listen(5000, () => console.log('server started'))





