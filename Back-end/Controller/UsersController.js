const User = require('../models/users')

// General requests
exports.getAllUsers= async (req,res) => {           // Method for getting the list of users
    
    try{
        const all_users = await User.find()

        res.status(200).json({
            status:'success',
            results:all_users.length,
            data:{
                all_users
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message: err,
            value:all_users
        })
    }
}

exports.createUsers = async (req, res) =>{          // Method for creating a new User
    
    const {email}=req.body;
    const userExist = await User.findOne({email})
    if(userExist){
        return res.status(400).json({
            success:false,
        message: "E-mail already exists",
        value:userExist

        })
    }

    try{
        const newUser = await User.create(req.body)
        res.status(200).json({
            status:'success',
            value:newUser
        })

    }catch(err){
        res.status(400).json({
            status:'failed to create',
            message: err,
            value:req.body,
            message:'try again'
        })
    }
}

exports.login= async (req,res) => {               // Method for finding one user according to his ID

    try{
        const {email,password}= req.body.email
        if(!email || !password)
       {
            return res.status(400).json({
                success:false,
                message:"Email and Password are required"
            })
        }

        const myUser=await myUser.findOne({email})
        if(!myUser)
        {
            return res.status(400).json({
                success:false,
                message:"This account doesn't exist"
            })
        }
        const myPass=await myUser.findOne({email},{password})
        if(!myPass)
        {
            return res.status(400).json({
                success:false,
                message:"Wrong Password"
            })
        }

        res.status(200).json({
            status: 'success',
            data: myPass.id
        })
    }catch(err){
        res.status(406).json({
            status:'fail',
            message: err
        })
    }
}


// ID SPECIFIC METHODS

exports.getUser= async (req,res) => {               // Method for finding one user according to his ID

    const myUser = await User.find(email)
    if(!myUser){
        return res.status(400).json({
            success:false,
        message: "Wrong Email"
        })
    }
    try{
        res.status(200).json({
            status: 'success',
            data:{
                myUser
            }
        })
    }catch(err){
        res.status(406).json({
            status:'fail',
            message: err
        })
    }
}

exports.updateUser = async (req, res) => {                 //Method for updating the user info
    try{
        const myUser = await User.findByIdAndUpdate({email},req.body,{
            new: true,
            runValidators : true
        })
    
        res.status(200).json({
            status: 'success',
            data:{
                myUser
            }
        })

    }catch(err){
        res.status(407).json({
            status:'fail',
            message: err
        })
    }
}

exports.deleteUser = async (req, res) => {                //Method for deleting User
    try{
        const myUser = await User.findByIdAndDelete(req.params.id)

        res.status(204).json({
            status:'success',
            data:null    
        })

    }catch(err){
        res.status(407).json({
            status:'fail',
            message: err
        })
    }
}


