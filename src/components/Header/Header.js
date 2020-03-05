import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../images/logo.png'
export default function Header() {
  return (
    <div className="nav-links">
      <NavLink to={"/"} >
        <img src={logo} id="q-icon" alt='home' />
  
      </NavLink>

      <div className="center">
        <NavLink to={"/projects"} id="work-link">
          <p>work</p>
        </NavLink>

        <NavLink to={"/about"} id="about-link">
          <p>about</p>
        </NavLink>
      </div>
    </div>
  );
}
