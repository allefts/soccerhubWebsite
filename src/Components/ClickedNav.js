import React from "react";
// import "./ClickedNav.css";
import { StyledClickedNav } from "./StyledClickedNav";

const ClickedNav = ({ open, setOpen }) => {
  return (
    <div>
      {/* <div className="clicked-container"> */}
      <StyledClickedNav open={open}>
        <li>Training</li>
        <li>Leagues</li>
        <li>Soccer Pups</li>
        <li>Camps</li>
        <li>Rentals</li>
        <li>Membership</li>
        <li>Partners</li>
        <li>Contact us!</li>
      </StyledClickedNav>
    </div>
    // </div>
  );
};

export default ClickedNav;
