const User = require('../models/users')

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
            message: err
        })
    }
}

exports.createUsers = async (req, res) =>{          // Method for creating a new User
    
    try{
        
        const newUser = await User.create(req.body)

        res.status(200).json({
            status:'success'
        })

    }catch(err){
        res.status(404).json({
            status:'fail',
            message: err
        })


    }
}

exports.getUser= async (req,res) => {               // Method for finding one user according to his ID

    try{
        const myUser = await User.findById(req.params.id)
    

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
        const myUser = await User.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators = true
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


