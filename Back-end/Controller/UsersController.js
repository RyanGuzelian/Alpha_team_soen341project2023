const User = require('../models/users')

exports.getAllUsers=(req,res) => {
    console.log(req.requestTime)

    res.status(200).json({
        status:'success',
        requestedAt:req.requestTime
    })
}



exports.createUsers = async (req, res) =>{
    
    try{
        
        const newUser = await User.create(req.body)

        res.status(201).json({
            status: 'success'
        })

    }catch(err){
        res.status(400).json({
            status:'fail',
            message: 'Invalid data'
        })


    }
}

exports.getUser=(req,res) => {
    console.log(req.params)
    const id = req.params.id * 1
}

exports.updateUser = (req, res) => {
    res.status(200).json({
        status: 'success',
    })
}

exports.deleteUser = (req, res) => {
    res.status(200).json({
        status: 'success',
    })
}


