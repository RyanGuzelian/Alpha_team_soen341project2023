//import React from 'react'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Home from './components/pages/Home'
import { Routes, Route } from "react-router-dom";



function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signIn" element={<SignIn />}/>
      <Route path="/signUp" element={<SignUp />}/>
    </Routes>
    </>

  )
  //     <div className="App" >
  //       <div style = {{width: "50%", margin:"auto"}}>
  //         {
  //       signIn == true? <SignIn /> : <SignUp/>
  //       }
  //       <Button onClick={handleOnClick} >
  //     {signInText}
  //     </Button>
  //       </div>
  //     </div>
      
       
   
  // );


}

export default App;
