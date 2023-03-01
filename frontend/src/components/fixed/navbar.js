import React, {useState} from 'react'
import{BiSearch} from 'react-icons/bi'
import{BsPerson} from 'react-icons/bs'
import{HiOutlineMenuAlt4} from 'react-icons/hi'


import '../css_files/navbarStyles.css'

function Navbar() {
    
return (
    <div className='navbar'>
        <div className="logo">
            <h2>HIRED</h2>
        </div>
        <div className="nav-menu">
            <li> About Us </li>
            <li> Explore Jobs </li>
            <li> Filter </li>
        </div>
        <div className="nav-icons">
            <BiSearch className='icon' />
            <BsPerson className='icon' />


        </div>
    </div>
)
    

        



}

export default Navbar
