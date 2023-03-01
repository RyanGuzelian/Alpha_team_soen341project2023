const mongoose = require('mongoose')
// require('dotenv').config({path:'./config.env'})
const dotenv = require('dotenv')
const express = require('express')

const app= express()

app.use(express.urlencoded({extended: false})) // Pass elements in the forms to the routes


//Atlas database otherwise:  mongoose.connect('mongodb://localhost/HirED_DB') for local DB
// const DB = process.env.DATABASE.replace('<PASSWORD>',
//     process.env.DATABASE_PASSWORD
// )

mongoose.connect('mongodb+srv://Alpha_team:SOEN341@hired.xuc7hrg.mongodb.net/Users?retryWrites=true&w=majority').then(con =>{
    console.log(con.connections)
    console.log('DB connected')
})

app.set('view engine', 'ejs') // declare that we are going to use EJS

app.listen(5000, () => console.log('server started'))

module.exports=app





