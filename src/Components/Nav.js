import React from "react";
import "../App.css";
import soccerhubTitle from "../images/soccerhubTitle.png";
import soccerhubLogo from "../images/justball.png";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <img className="logo-picture" src={soccerhubLogo} alt="logo2" />
        <a className="navbar-brand" href="/">
          <img src={soccerhubTitle} alt="logo" className="logo-title" />
        </a>
      </div>
      <div className="nav-catchymotto">
        <span className="train">TRAIN.</span>
        <span className="play">PLAY.</span>
        <span className="lounge">LOUNGE.</span>
      </div>
    </div>
  );
};

export default Nav;
