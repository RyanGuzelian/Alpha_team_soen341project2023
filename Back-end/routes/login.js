const express =require('express')
const router = express.Router()


router.get('/login', (req,res)=>{
    res.render('Login/login')
})

router.post('/',(req,res)=>{
    
})


module.exports = router