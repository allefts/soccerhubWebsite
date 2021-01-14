import React from "react";
import CovidPrecautions from "./CovidButton.js";
import "../App.css";

const HomePromo = () => {
  return (
    <div>
      <div className="promo-container">
        <h1 className="promo-covid-title">
          A word about our facility and safety measures
        </h1>
        <h3 className="promo-covid-description">
          {/* <strong> */}
          At Soccer Hub, we are taking every precaution to ensure the safety of
          our players, trainers and staff. We want every player and family
          member entering the facility to receive our best service and make sure
          they know that their safety is our top concern during these difficult
          times. Here are the precautions we have taken to safeguard your
          child’s safety when they return for training:
          {/* </strong> */}
        </h3>
        <CovidPrecautions />
        <h3 className="promo-covid-description ">
          If you feel unwell or have anyone that is sick in your household,
          please do not enter the facility! Contact us to discuss other
          arrangements.
          <br /> We appreciate your help and understanding as we all work
          together during these trying times.{" "}
          <span className="thank-you">
            <br />
            We are very excited to see and welcome you back!
          </span>
        </h3>
      </div>
    </div>
  );
};

export default HomePromo;
