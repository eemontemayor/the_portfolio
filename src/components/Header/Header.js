import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import Split from "../Split/Split";
import logo from "../../images/logo.png";
export default function Header() {
  return (

      <div className='header-nav'>
      <div className='left'>
        
            <NavLink to={"/"}>
             <img src={logo} id="q-icon" alt="home" />
            </NavLink>

            
              <NavLink to={"/projects"} id="work-link">
                work
              </NavLink>
        </div>
      <div className='right'>
        
              <NavLink to={"/about"} id="about-link">
                about
              </NavLink>
        </div>
      </div>
         

      
   
  
  );
}
