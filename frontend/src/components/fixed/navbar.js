import React, { useState, useContext } from "react";

import UserContext from "../../UserContext";

import "../../css_files/navbarStyles.css";

function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <div className="navbar">
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
        {
          // if (user != null){
          user?.User_type === "employer" ? (
            <>
              <li>
                <CustomLink href="/postJob">Post Job</CustomLink>
              </li>
              <li>
                <CustomLink href={`/companyPosts/${user["_id"]}`}>
                  My Posts
                </CustomLink>
              </li>
            </>
          ) : user?.User_type === "seeker" ? (
            <>
              <li>
                <CustomLink href="/interviews">
                  {user["interviews"].length} interviews
                </CustomLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <CustomLink href="/signUp">Sign Up</CustomLink>
              </li>
              <li>
                <CustomLink href="/signIn">Sign In</CustomLink>
              </li>
            </>
          )
        }
      </div>
    </div>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <div>
      <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    </div>
  );
}

export default Navbar;
