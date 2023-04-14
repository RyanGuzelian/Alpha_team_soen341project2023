const User = require('../models/users')

//----------------------------------------- General requests
exports.getAllUsers= async (req,res) => {           // Done
    
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

exports.deleteAll= async (req,res) => {           // Done
    
    try{

        const byeBye = await User.deleteMany({})

        res.status(200).json({
            status:'success',
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message: err,
        })
    }
}


//---------------------------------------- ID SPECIFIC METHODS


exports.getUser= async (req,res) => {               // Method for finding one user according to his ID
    try{

        const myUser = await User.findById(req.params.id)

        if(!myUser)
        {
            return res.status(404).json({
                results:"User not found",
                status: 'Failed',
                data:{
                    data
                }
            })
        }
        res.status(200).json({
            status: 'success',
            results:req.params._id,
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

// controllers/userController.js
exports.updateUser = async (req, res) => {
    try {
      const allowedUpdates = ["name", "password", "company", "phone"];
      const updates = Object.keys(req.body);
      const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));
  
      if (!isValidUpdate) {
        return res.status(400).json({
          status: "fail",
          message: "Invalid updates!",
        });
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({
          status: "fail",
          message: "User not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        data: {
          user: updatedUser,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };
  

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

exports.getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };
  

  exports.addInterview = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { interviews: req.params.postId } },
        { new: true, runValidators: true }
      );
      res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };
  

