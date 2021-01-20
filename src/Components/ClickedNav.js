import React from "react";
import soccerhubLogo from "../images/justball.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StyledClickedNav } from "./StyledClickedNav";

const ClickedNav = ({ open, setOpen }) => {
  return (
    <div>
      {/* <div className="clicked-container"> */}
      <StyledClickedNav open={open}>
        <Link to="/">
          <img className="logo-picture" src={soccerhubLogo} alt="logo2" />
        </Link>
        <Link className="hamburger-links" to="/training">
          Training
        </Link>
        <Link className="hamburger-links" to="/leagues">
          Leagues
        </Link>
        <Link className="hamburger-links" to="/soccer-pups">
          Soccer Pups
        </Link>
        <Link className="hamburger-links" to="/camps">
          Camps
        </Link>
        <Link className="hamburger-links" to="/rentals">
          Rentals
        </Link>
        {/* <Link className="hamburger-links" to="/membership">
          Membership
        </Link> */}
        {/* <Link className="hamburger-links" to="/partners">
          Partners
        </Link> */}
        <Link className="hamburger-links" to="/contact">
          Contact us!
        </Link>
      </StyledClickedNav>

      <Switch>
        <Route path="/training">
          <div></div>
        </Route>
        <Route path="/leagues">
          <div></div>
        </Route>
        <Route path="/soccer-pups">
          <div></div>
        </Route>
        <Route path="/camps">
          <div></div>
        </Route>
        <Route path="/rentals">
          <div></div>
        </Route>
        <Route path="/membership">
          <div></div>
        </Route>
        <Route path="/partners">
          <div></div>
        </Route>
        <Route path="/contact">
          <div></div>
        </Route>
      </Switch>
    </div>
    // </div>
  );
};

export default ClickedNav;
