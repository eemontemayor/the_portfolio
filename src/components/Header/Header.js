import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="nav-links">
      <NavLink to={"/"} id="q-icon">
        Q
      </NavLink>

      <div className="center">
        <NavLink to={"/projects"} className="white">
          <p>work</p>
        </NavLink>

        <NavLink to={"/about"} className="black">
          <p>about</p>
        </NavLink>
      </div>
    </div>
  );
}
