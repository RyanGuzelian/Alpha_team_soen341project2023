import React, { useState } from "react";
import EditProfile from "./EditProfile";
import {Button, Typography} from "@mui/material"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Profile = () => {

  return (
    <div>
      

      <Typography>

        <h1> My Profile</h1>
        <h3>Full Name</h3>
        <h3>Email</h3>
        <h3>Education</h3>
        <h3>Industry</h3>
        <h3>Location</h3>
      </Typography>

     <Button href="/editprofile">edit</Button>
     
           
    
    </div>
)
}

export default Profile