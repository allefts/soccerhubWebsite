import React from "react";
import "../App.css";
import soccerHubLogo from "../images/sh2.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="directions">
          <p>13945 Hwy 183 North B-1, Austin, Texas 78717</p>
          <a href="/">Directions</a>
        </div>
        <h5>(512) 358-4908</h5>
        <a href="/ " className="email">
          info@soccerhubaustin.com
        </a>
      </div>
      <div className="footer-center">
        <a href="/">
          <img height="200px" src={soccerHubLogo} alt="" />
        </a>
      </div>
      <div className="footer-right">
        <h5>Soccer Excellence Through Futsal Training</h5>
        <div>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
