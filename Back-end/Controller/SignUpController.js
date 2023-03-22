const User = require('../models/users')


exports.createUsers = async (req, res) =>{          // Method for creating a new User
    
    const {email}=req.body;
    const userExist = await User.findOne({email})
    if(userExist){
        return res.status(400).json({
            success:false,
            message: "E-mail already exists",
            value:userExist,
            Received:req.body
        })
    }


    if(req.body.company)
    {
        const {company}=req.body;
        const companyExist = await User.findOne({company})
        if(companyExist){
            return res.status(400).json({
                success:false,
                message: "company already exists",
                value:{company},
                Received:req.body
            })
        }  
    }

    const mynewUser=req.body
    const mysize=(await User.collection.stats()).size.toString()
    mynewUser._id=mynewUser.User_type =="Company"? mynewUser.company+mysize :mynewUser.name +"-"+mynewUser.lastname+mysize

    try{
        const newUser = await User.create(mynewUser)    
        
        res.status(200).json({
            status:'success',
            value:newUser,
        })

    }catch(err){
        res.status(400).json({
            status:'failed to create',
            message: err,
            value:req.body,
            warning:'try again'
        })
    }
}
