/* eslint-disable react/style-prop-object */
import React from "react";
import "../App.css";
import SignUp from "./SignUp";

const LeaguePromo = () => {
  return (
    <div className="background-image">
      <div className="league-text">
        <h1>TRAIN FAST. PLAY FASTER.</h1>
        <h2>4v4 (Youth & Adults) • Training • Camps • Parties and Rentals</h2>
        <div className="league-buttons">
          <button className="league-button">
            <i class="fas fa-angle-double-right"></i>
            Leagues Forming Now!
          </button>
          <button className="league-button">
            <i class="fas fa-angle-double-right"></i>
            Become a Member!
          </button>
        </div>
        <SignUp></SignUp>
      </div>
    </div>
  );
};

export default LeaguePromo;
