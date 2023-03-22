const express = require('express')
const app= express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var morgan = require('morgan') // api

//IMPORT ROUTES
const userRoutes = require('./routes/UsersRoutes')
const postRoutes = require('./routes/PostsRoutes')
const loginRoutes = require('./routes/LoginRoutes')
const signUpRoutes = require('./routes/SignUpRoutes')

//CONNECT DATABASE
//Atlas database otherwise:  mongoose.connect('mongodb://localhost/HirED_DB') for local DB
mongoose.connect('mongodb+srv://Alpha_team:SOEN341@hired.xuc7hrg.mongodb.net/Users?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(con =>{
    console.log(con.connections)
    console.log('DB connected')
})

//ALLOW USE OF BODY PARSER
// app.use(express.urlencoded({extended: false})) // Pass elements in the forms to the routes

//MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json())

//ROUTES MIDDLEWARE
app.use('/Users',userRoutes)
app.use('/Posts',postRoutes)
app.use('/Login',loginRoutes)
app.use('/Signup',signUpRoutes)


//set ejs environment (html alternative)
//app.set('view engine', 'ejs') // declare that we are going to use EJS


//LISTEN on port 5000
    const port = process.env.PORT || 9000
app.listen(port, () => console.log('server started'))