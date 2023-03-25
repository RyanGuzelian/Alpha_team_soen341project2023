import { TextField, Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";


function Post() {

    const { user } = useContext(UserContext);
    
    useEffect(() => {
        if(user["User_type"]!=="employer"){
            navigate('/home')
        }
    })
    

    const [inputs, setInputs] = useState({
        title:"",
        description:"",
        location:"",
    })

    const [postable, setPostable] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = ((e) => {
        e.preventDefault();
        setPostable(true);
    })

    const handleChange = ((e) => {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
          }))
    })

    useEffect(() => {
        if(postable){
          fetch('http://localhost:9000/Posts/postJob', {  // TODO: Change this to the one in UsersRoutes made by Cristian
  
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
      },
        body:JSON.stringify(inputs)
        
      }) .then((response) => response.json())
      .then((json) => {
        console.log(json)
        if (json["status"] === 'success'){
          navigate('/home')
        }
      }
  
      );
      setPostable(false)
        }
    })

    return( user["User_type"]==="employer"?
        <>
        <form style = {{paddingTop:"5%"}} className="postForm" onSubmit={handleSubmit}>
            <TextField required id="title" onChange={handleChange} name="title" label="Title"/>
            <br/>

            <TextField required multiline rows="20" id="description" onChange={handleChange} name="description" label="Description"/>
            <br/>

            <TextField required id="location" onChange={handleChange} name="location" label="Location"/>
            <br/>

            <Button type="submit" variant="outlined">
            Post
          </Button>
        </form>
        </>:
        <>
        </>
    )
}

export default Post;