import './css_files/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import EditProfile from './components/pages/EditProfile';

import Navbar from './components/fixed/Navbar'
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Post from './components/pages/Post'



function App () {

    return (
       <div>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element= {<Home/>} />
                <Route path="/profile" element= { <Profile />} />
                <Route path="/editprofile" element ={<EditProfile/>} />
                <Route path="/signup" element ={<SignUp/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/postJob" element={<Post/>} />
            </Routes>
            </BrowserRouter>
       </div>
    );
}

export default App;


 