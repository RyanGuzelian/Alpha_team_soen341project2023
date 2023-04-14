import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../fixed/Header'
import { Button , Typography, Box} from '@mui/material'




const Home = () => {
    return (
        <>
            
            <Header    />

            

            <Typography variant="h3" textAlign="center" gutterBottom> 
             Welcome to HirED!
            </Typography>

            <Typography variant="subtitle1" textAlign="center" gutterBottom> 
            Founded in 2023 by students of Concordia, HirED is tha fastest growing job search platform that has helped 0 job seekers in landing their dream job
            </Typography>
            
             <Button href="/signup">Get Started</Button>
            
             
            
        </>
    )
}

export default Home