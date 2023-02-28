const express =require('express')
const users = require('./../models/users')
const router = express.Router()

router.get('/new', (req,res)=>{
    res.render('register/new')
})

router.get('/:id',(req,res)=>{

})

router.post('/',async (req,res)=>{
    const myUser =new users({
        name: request.body.username,
        password: request.body.password,
        date: date.now()
    })
    try{
       myUser= await myUser.save()
       res.redirect(`/register/${myUser.id}`)
    }catch(e){
        res.render('register/new',{myUser:myUser})

    }
    
})


module.exports = router