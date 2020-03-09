import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css'
export default function NavBar() {
    

    return (
        <div className="side-nav">

            <NavLink to={"/CV"}id="cv-link">
              resumé

          
            </NavLink>
           <NavLink to={"/contact"}id="contact-link">
     
            contact
   
          
            </NavLink>
        </div>
        
    )
}