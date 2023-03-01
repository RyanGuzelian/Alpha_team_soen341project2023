import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/hired.png';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "inside",
            justifyContent: 'center',
            minHeight: 500,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main
        }

    ));
    return (
        <>
            <StyleHeader >

            </StyleHeader>
        </>
    )
}

export default Header