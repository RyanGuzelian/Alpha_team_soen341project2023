//import React from 'react'
import React, {useState} from "react";
import { Button } from "@mui/material";
import SignIn from './components/home/SignIn'
import SignUp from './components/home/SignUp'



function App() {
 

  const [currentForm, setCurrentForm] = useState('signup');

  const [signIn, setSignIn] = useState(true);
  const [signInText, setSignInText] = useState("Don't have an account? Sign Up!");

  function handleOnClick() {
    setSignIn(!signIn);
    if (!signIn){
      setSignInText("Don't have an account? Sign Up!");
    } else if (signIn){
      setSignInText("Have an account? Sign In!");
    }
  }

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    
      <div className="App" >
        <div style = {{width: "50%", margin:"auto"}}>
          {
        signIn == true? <SignIn /> : <SignUp/>
        }
        <Button onClick={handleOnClick} >
      {signInText}
      </Button>
        </div>
      </div>
      
       
   
  );


}

export default App;
