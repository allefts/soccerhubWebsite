import React, { useState } from "react";
import "../App.css";
import ClickedNav from "../Components/ClickedNav";
import soccerhubTitle from "../images/soccerhubTitle.png";
import soccerhubLogo from "../images/justball.png";

const Nav = () => {
  const [open, setOpen] = useState(false); //Starts out as false before anyone clicks it.

  const handleHamburgerClick = () => {
    setOpen(!open); //switches on and off
  };

  return (
    <div>
      <div className="navbar">
        <div onClick={() => handleHamburgerClick()} className="hamburger">
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
      <ClickedNav open={open} setOpen={setOpen} />
    </div>
  );
};

export default Nav;
