import React, {useState} from 'react'




import '../../css_files/navbarStyles.css'

function Navbar() {
    
return (
    <div className='navbar'>
        <div className="logo">
            <h2>HIRED</h2>
        </div>
        <div className="nav-menu">
           <li> 
            <CustomLink href="/home"> Home </CustomLink>
           </li> 
           <li> 
            <a href="/exp_jobs"> Explore Jobs </a>
           </li>
           <li> 
            <CustomLink href="/profile"> Profile </CustomLink>
           </li>
          

            
        </div>
        
    </div>
)

}

function CustomLink({href, children, ...props}){
    const path= window.location.pathname

return(
<div>
    <li className={path === href ? "active":""}>
        <a href={href}{...props}>
            {children}
        </a>
    </li>
</div>
)
}

export default Navbar
