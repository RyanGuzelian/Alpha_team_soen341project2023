import React, { useContext } from "react";
import UserContext from "../../UserContext";
import  ThemeContext  from "../theme/ThemeContext";

import "../../css_files/navbarStyles.css";

function Navbar() {
  const { user } = useContext(UserContext);
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;

    return (
      <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    );
  }

  return (
    <div className={`navbar ${currentTheme}`}>
      <div className="logo">
        <h2>HIRED</h2>
      </div>
      <div className="nav-menu">
        <CustomLink href="/home">Home</CustomLink>
        <a href="/exp_jobs">Explore Jobs</a>
        <CustomLink href="/profile">Profile</CustomLink>
        {user?.User_type === "employer" ? (
          <CustomLink href="/postJob">Post Job</CustomLink>
        ) : (
          <CustomLink href="/signUp">Sign Up</CustomLink>
        )}
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* <div>{currentTheme}</div> */}
    </div>
  );
}

export default Navbar;
