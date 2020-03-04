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
