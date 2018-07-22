import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

const NavTabs = () => (
  <ul className="nav nav-tabs">

    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    
    <li className="nav-item">
      <Link
        to="/saved"
        className={
          window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
        }
      >
        Saved
      </Link>
    </li>
  </ul>
);

export default NavTabs;
