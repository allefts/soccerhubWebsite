import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

//COMPONENTS
import ClickedNav from "../Components/ClickedNav";
import { Hamburger } from "./StyledHamburger";

//PICTURES
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
        <Hamburger
          open={open}
          setOpen={setOpen}
          onClick={() => handleHamburgerClick()}
        >
          {/* <Hamburger></Hamburger> is just another name for a styled div using styled components */}
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
        <div className="logo-container">
          <a className="navbar-brand" href="/">
            <img className="logo-picture" src={soccerhubLogo} alt="logo2" />
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
