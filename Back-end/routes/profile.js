const express =require('express')
const router = express.Router()


router.get('/profile', (req,res)=>{
    res.render('profile/profile')
})

router.post('/',(req,res)=>{
    
})


module.exports = router