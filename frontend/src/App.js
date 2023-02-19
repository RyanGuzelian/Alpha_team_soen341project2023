//import React from 'react'
import React, {useState} from "react";
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import SignIn from './components/home/SignIn'
import SignUp from './components/home/SignUp'



function App() {
 

  const [currentForm, setCurrentForm] = useState('signup');

  const [signIn, setSignIn] = useState(true);
  const [signInText, setSignInText] = useState("Have an account? Sign In!");

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
    
      <div classname="App">
      {
       // currentForm === "signup" ? <SignIn  onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
       signIn == true? <SignIn /> : <SignUp/>
      }
      
      <button onClick={handleOnClick} >
      {signInText}
      </button>

      
      
      </div>
      
       
   
  );


}

export default App;
