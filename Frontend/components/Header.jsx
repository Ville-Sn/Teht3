import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
        <a className="navbar-brand">Athlete lister</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/athleteList" className="nav-link">Athletes</Link>
            </li>
            <li className="nav-item">
              <Link to="/info" className="nav-link">Info</Link>
            </li>
          </ul>
        </div>
        </div>
        
      </nav>
    </>
  );
}

export default Header;
