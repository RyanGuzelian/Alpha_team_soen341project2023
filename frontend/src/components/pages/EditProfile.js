
import React, { useState } from 'react'
//import './home.css'
import {Button, FormLabel, TextField} from "@mui/material"
import Navbar from '../fixed/Navbar';

const EditProfile = () => {

    const [name, setName] = useState('');
    const [edu, setEdu] = useState(''); //education
    const [indus, setIndus] = useState(''); //industry
    const [loc, setLoc] = useState (''); //location

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }
    


    return(

     <div>
         <Navbar/>

        <div className="auth-form-container">
        <form className="edit_profile"onSubmit={handleSubmit}>

        <FormLabel for="name"> Full Name </FormLabel>
        <TextField value={name} onChange={(e) => setName(e.target.value) } type="name" id="name" placeholder="Full Name" />

        <FormLabel for = "edu" > What is your highest level of Education? </FormLabel>
        <TextField value={edu} onChange={(e) => setEdu(e.target.value) } type = "edu" placeholder="high school/ cegep/ university" id="edu" name="edu" />

        <FormLabel for = "indus" > What is your Industry? </FormLabel>
        <TextField value={indus} onChange={(e) => setIndus(e.target.value) } type = "indus" placeholder="engineering/ marketing/ accounting/.." id="indus" name="indus" />

        <FormLabel for = "loc" > What is your Location? </FormLabel>
        <TextField value={loc} onChange={(e) => setLoc(e.target.value) } type = "loc" placeholder="City" id="loc" name="loc" />

        <Button type="submit"> Submit Changes </Button>
        </form>
        </div>
         
    </div>
        
       
 
    )
    
        
}

export default EditProfile


