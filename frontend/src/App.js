import './css_files/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/pages/Home';
import EditProfile from './components/pages/EditProfile';

import Navbar from './components/fixed/Navbar'
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Post from './components/pages/Post';
import UserContext from "./UserContext";
import Explore_Jobs from './components/pages/Explore_Jobs';
import Individual_Post from './components/pages/Individual_Post';




function App () {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
      });
    return (
        <UserContext.Provider value={{ user, setUser }}>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element= {<Home/>} />
                <Route path="/profile" element= { <Profile />} />
                <Route path="/editprofile" element ={<EditProfile/>} />
                <Route path="/signup" element ={<SignUp/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/postJob" element={<Post/>} />
                <Route path="/exp_jobs" element={<Explore_Jobs/>}/>
                <Route path="/post/:postId" element={<Individual_Post/>}/>
            </Routes>
            </BrowserRouter>
       </UserContext.Provider>
    );
}

export default App;


 