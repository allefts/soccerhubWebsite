/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../App.css";
import soccerHubLogo from "../images/sh2.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="directions">
          <p>13945 Hwy 183 North B-1, Austin, Texas 78717</p>
          <a
            href="https://www.google.com/maps/place/Soccer+Hub/@30.4729445,-97.7996211,17z/data=!3m2!4b1!5s0x865b32a5eb7b5bbf:0x489db9c44dcba419!4m5!3m4!1s0x865b32a5e5f26e7b:0xbc4f52b1348e5103!8m2!3d30.4729399!4d-97.7974324"
            target="_blank"
          >
            Directions
          </a>
        </div>
        <h5>(512) 358-4908</h5>
        <a
          href="mailto: info@soccerhubaustin.com "
          target="_blank"
          className="email"
        >
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
          <a
            href="https://www.instagram.com/thesoccerhubaustin/?hl=en"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCMlpUK3OHP14wlCJr8eaZuw"
            target="_blank"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fsoccerhubaustin"
            target="_blank"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
