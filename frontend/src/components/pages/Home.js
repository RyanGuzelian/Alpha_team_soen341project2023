import React from 'react'
import Navbar from '../fixed/navbar'
import Header from '../fixed/Header'
import {Button} from "@mui/material"


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