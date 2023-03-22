const User = require('../models/users')

// General requests

exports.login= async (req,res) => {  

    const {email}=req.body;
    const userExist = await User.findOne({email})
    if(!userExist){                                             //CHECKS IF EMAIL EXISTS
        return res.status(400).json({
            success:false,
            message: "E-mail doesn't exist",
            value:userExist,
            Received:req.body
        })
    }

    const mypassword=req.body.password

    if(mypassword !== userExist.password)                       //CHECKS IF PASSWORD MATCHES TO THE ONE ON FILE
    {   
        return res.status(400).json({
            success:false,
            message:"Wrong Password"
        })
    }
    try{
        res.status(200).json({                                 //RETURNS THE USER INFO
            status: 'success',
            data: {
                userExist
            }
        })
    }catch(err){
        res.status(406).json({
            status:'fail',
            message: err
        })
    }
}