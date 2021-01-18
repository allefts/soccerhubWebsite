/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import "./Rentals.css";

//COVERFLOW

//IMAGES
import bday1 from "../../images/bday1.jpg";
import hubCourt from "../../images/shcourt.jpg";
import bday2 from "../../images/bday2.jpg";
import bday3 from "../../images/bday3.jpg";
import bday4 from "../../images/bday4.jpg";

const StyledRentals = styled.div`
  .rental-header {
    text-align: center;
    padding: 40px;
    font-family: "Oswald", sans-serif;
    color: red;
    font-size: 64px;
    text-decoration: underline;
  }
  .top-container,
  .middle-rental-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: wrap row;
  }

  .left-rental-container {
    width: 40%;
    display: inline-block;
    margin-right: 20px;
  }

  .right-rental-container {
    width: 55%;
    display: inline-block;
    margin-left: 20px;
    font-family: "Open Sans", sans-serif;
    vertical-align: top;
  }

  .right-rental-container p {
    font-size: 18px;
    line-height: 20pt;
  }

  .big-t {
    color: red;
    font-size: 3rem;
    font-family: "Open Sans", sans-serif;
  }

  .rental-email {
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    font-size: 1.1em;
    color: red;
  }

  .bday-header {
    color: #503175;
    font-family: "Oswald", sans-serif;
    text-decoration: none;
    text-align: center;
    margin-bottom: 100px;
    font-size: 40px;
  }

  @media (max-width: 1000px) {
    .left-rental-container {
      width: 100%;
      margin-right: 0;
      img {
        height: 100%;
      }
    }

    .right-rental-container {
      width: 100%;
      margin-right: 0;
      padding: 2rem;
    }
  }

  .right-middle-rental-container {
    margin-left: 30px;
    width: 40%;
  }

  .left-middle-rental-container {
    font-family: "Open Sans", sans-serif;
    width: 50%;
    h3 {
      font-family: "Oswald", sans-serif;
      text-align: center;
      margin-bottom: 30px;
      font-size: 30px;
    }

    p {
      font-size: 18px;
      line-height: 20pt;
    }
  }

  @media (max-width: 1200px) {
    .right-middle-rental-container {
      width: 100%;
      margin-right: 0;
      padding: 1rem;

      img {
        height: 100%;
      }
    }

    .left-middle-rental-container {
      width: 100%;
      margin-left: 0;
    }
  }

  .middle-rental-container {
    margin-bottom: 20px;
  }
`;

const StyledModal = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  img {
    margin: 10px;
    width: 400px;
    height: 340px;
  }
`;

const Rentals = () => {
  return (
    <div className="rentals-bg">
      <StyledRentals>
        <h1 className="rental-header">Rentals</h1>
        <div className="top-container">
          <div className="left-rental-container">
            <img src={hubCourt} width="100%" height="80%" alt="" />
          </div>
          <div className="right-rental-container">
            <p>
              <span className="big-t">T</span>
              he Hub is the coolest place for your next corporate event,
              birthday party, or place to play! Field rentals start at just $130
              per hour, and are subject to availability. Entire facility rentals
              are also available. To inquire, please e-mail us at{" "}
              <a
                href="mailto: info@soccerhubaustin.com "
                target="_blank"
                className="rental-email"
              >
                info@soccerhubaustin.com
              </a>
              .
              <br />
              <br />
              <i>
                *Please let us know if you’d like the Bar to be open during your
                rental! (All alcohol must be purchased through our bar, sorry no
                BYOB.)*
              </i>
            </p>
          </div>
        </div>
        <h1 className="bday-header">
          For Birthday Parties, we offer our Premier League Party!
        </h1>
        <div className="middle-rental-container">
          <div className="left-middle-rental-container">
            <h3>Premier League Party</h3>
            <p>
              <span className="big-t">T</span>his 2 hour party starts with 1
              hour on the field, with play facilitated by a staff member. For
              second hour, two tables are provided with paper goods and drinks
              (non-alcoholic) and you are welcome to bring your own cake or
              baked goods to enjoy as part of your celebration. Price starts at
              $200 for up to 12 people, and $8 per additional partygoer. A 50%
              non-refundable deposit is required to hold your desired your date
              and time.
              <br />
              <br />
              <i>
                *We encourage you to bring your own cake or baked goods; any
                additional outside food is a $30 fee. Per TABC regulation, no
                outside alcoholic beverages are permitted. When making your
                reservation request, please include any additional requests such
                as the bar and lounge being open and available.
              </i>
            </p>
          </div>
          <div className="right-middle-rental-container ">
            <img src={bday1} width="100%" height="80%" alt="" />
          </div>
        </div>
      </StyledRentals>
      <div className="borderline"></div>
      <StyledModal>
        <img src={bday2} alt="Birthday-Image" />
        <img src={bday3} alt="Birthday-Image" />
        <img src={bday4} alt="Birthday-Image" />
      </StyledModal>
    </div>
  );
};

export default Rentals;
