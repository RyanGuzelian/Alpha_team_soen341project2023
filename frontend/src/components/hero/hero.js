import React from 'react'
import './heroStyles.css'
import hired from '../../assets/hired.png'

function Hero()
{
    return(
        <div className='hero'>
        <div name='hero' className='container'></div>
            <img src={hired} alt='/' />
            
        </div>
    )
}
export default Hero