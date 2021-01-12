import React from "react";
import SoccerhubPromo from "../videos/SoccerHubPromo-Small.mp4";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <video
          src={SoccerhubPromo}
          className="promo-video"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Header;
