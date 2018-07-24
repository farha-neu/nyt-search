import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

const NavTabs = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><img src="images/icon.png" alt="icon"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link to="/" className={window.location.pathname === "/" ? "nav-item nav-link active" : "nav-item nav-link"}>
     Home</Link>
    <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-item nav-link active" : "nav-item nav-link"}>
     Saved Articles</Link>
    </div>
  </div>
</nav>
);

export default NavTabs;
