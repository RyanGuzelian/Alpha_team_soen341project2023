require('dotenv').config()

const express = require('express')
const app= express()
const registerRouter = require('./routes/register')
const registerLogin = require('./routes/login')
const registerProfile = require('./routes/profile')
const mongoose = require('mongoose')

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/HirED_DB')

app.use(express.urlencoded({extended: false}))
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

// const mongoose = require('mongoose')

// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

// const db=mongoose.connection

// db.on('error',(error) => console.error(error))
// db.once('open',() => console.log('connected to Database'))


// app.use(express.json())

// //const usersRouter = require('./routes/HirED')




