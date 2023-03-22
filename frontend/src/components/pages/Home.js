import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../fixed/Header'
import { Button } from '@mui/material'




const Home = () => {
    return (
        <>
            
            <Header />
             <Button href="/signup">Get Started</Button>
            
            
            
        </>
    )
}

export default Home