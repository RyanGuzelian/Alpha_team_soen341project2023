
import React, { useState } from 'react'
import '../../css_files/home.css'
import {Button, FormLabel, TextField, Typography} from "@mui/material"


const EditProfile = () => {

    const [name, setName] = useState('');
    const [num, setNumber] = useState(''); //education
    const [adrs, setAdrs] = useState(''); //industry
    const [edu, setEdu] = useState (''); //location

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }
    


    return(

     <div>

         


        <Typography>
            <h2>
                Edit Profile Page
            </h2>

        </Typography>
        <div className="auth-form-container">
        <form className="edit_profile"onSubmit={handleSubmit}>

        <FormLabel for="name"> Full Name </FormLabel>
        <TextField value={name} onChange={(e) => setName(e.target.value) } type="name" id="name" placeholder="Full Name" />

        <FormLabel for = "num" > Phone Number </FormLabel>
        <TextField value={num} onChange={(e) => setNumber(e.target.value) } type = "number" placeholder="xxx-xxx-xxxx" id="number" name="number" />

        <FormLabel for = "adrs" > Address </FormLabel>
        <TextField value={adrs} onChange={(e) => setAdrs(e.target.value) } type = "adrs" placeholder="Please put your current address" id="adrs" name="adrs" />

        <FormLabel for = "edu" > Education </FormLabel>
        <TextField value={edu} onChange={(e) => setEdu(e.target.value) } type = "edu" placeholder="Plaese put your current level of education" id="edu" name="edu" />

        <Button type="submit"> Submit Changes </Button>
        </form>
        </div>
         
    </div>
        
       
 
    )
    
        
}

export default EditProfile


