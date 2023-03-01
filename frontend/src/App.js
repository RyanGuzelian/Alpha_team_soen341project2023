import './css_files/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Navbar from './fixed/Navbar'
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



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
            </Routes>
            </BrowserRouter>
       </div>
    );
}

export default App;


 