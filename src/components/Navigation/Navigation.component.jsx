import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.style.scss";

export default function Navigation() {
  return (
    <div className="nav">
      <h1 className="logo">ZB</h1>
      <nav>
        <ol>
          <li>About</li>
          <li>Experiance</li>
          <li>Work</li>
          <li>Contact</li>
        </ol>
      </nav>
      <NavLink to="#">Resume</NavLink>
    </div>
  );
}
