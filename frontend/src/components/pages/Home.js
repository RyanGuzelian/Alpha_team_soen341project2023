import React from 'react'
import Navbar from '../fixed/Navbar'
import Header from '../fixed/Header'
import {Button} from "@mui/material"
import EditProfile from './EditProfile'


const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            
            
            <Button> Get Started </Button>
        </>
    )
}

export default Home