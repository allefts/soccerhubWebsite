import React from "react";
import { StyledAboutPromo } from "./StyledAboutPromo";
import "../App.css";

//PHOTOS

const AboutPromo = () => {
  return (
    <div className="about-promo-top">
      <StyledAboutPromo>
        <div className="left-content">
          <div className="shBall-image"></div>
          <div className="ball-title"></div>
          <div className="hover-overlay-ball-image">
            <p>
              After researching the worlds top academies, we are convinced that
              training on a futsal field is the most effective way to develop a
              player's technical skills. Our FIFA-approved surface is fast, fun,
              and optimized for specialized training and competitive play. And
              with 70% less injuries than turf, it's also the safest.
            </p>
          </div>
        </div>
        <div className="right-content">
          <div className="shBar-image"></div>
          <div className="bar-title"></div>
          <div className="hover-overlay-bar-image">
            <p>
              With a custom-built 15 foot bar, Soccer Hub isn't just about
              playing or training. Check out our lounge featuring a bar,
              comfortable soccer-themed seating, high-speed internet, and two
              65-inch televisions. There is even a projection of the field
              action that provides an additional viewing option.
            </p>
          </div>
        </div>
      </StyledAboutPromo>
    </div>
  );
};

export default AboutPromo;
