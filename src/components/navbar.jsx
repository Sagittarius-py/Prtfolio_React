import "../style/navbar.css";
import React from "react";
import homeIco from "../icons/home.svg";
import aboutIco from "../icons/book-open.svg";
import projectsIco from "../icons/monitor.svg";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-content">
        <button className="nav-bar-btn">
          <img src={homeIco} className="nav-ico" alt="icon" />
          Home
        </button>
        <span className="separator" />
        <button className="nav-bar-btn">
          <img src={aboutIco} className="nav-ico" alt="icon" />
          About
        </button>
        <span className="separator" />
        <button className="nav-bar-btn">
          <img src={projectsIco} className="nav-ico" alt="icon" />
          Projects
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
