/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import "./Soccerpups.css";
import soccerPups from "../../images/soccerpups.png";

const StyledSoccerPups = styled.div`
  .image-header-container {
    padding: 3rem;
    text-align: center;

    h3 {
      font-size: 25px;
      text-decoration: underline;
      font-family: "Karla", sans-serif;
      margin-top: 20px;
    }
  }

  .main-container {
    width: 80%;
    margin: 0 auto;
    font-family: "Karla", sans-serif;
    padding: 2rem;
    text-align: center;
    h4 {
      font-size: 2rem;
      text-decoration: underline;
      color: #503175;
      margin: 1rem;
    }

    p {
      line-height: 25pt;
      font-family: "Open Sans", sans-serif;
    }
  }

  .register-btn a button {
    font-family: "Open Sans", sans-serif;
    padding: 10px 20px;
    margin: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    background: rgba(210, 29, 35, 1);
    color: white;
    font-size: 1.2em;
    text-align: center;
    transition: 0.3s;
  }

  .register-btn a button:hover {
    background: #503175;
  }

  .span-class {
    font-size: 3rem;
    color: red;
  }
`;

const Soccerpups = () => {
  return (
    <div className="background-wrapper">
      <StyledSoccerPups>
        <div className="image-header-container">
          <img width="400px" height="300px" src={soccerPups} alt="" />
          <h3>
            Austin’s very own progressive, high-energy soccer training program
            for kids aged 3 to 5 years!
          </h3>
        </div>
        <div className="main-container">
          <h4>Soccer Pup Classes</h4>
          <p>
            <span className="span-class"> G</span>et your younger players
            started out the right way! Using age appropriate games and props to
            develop small motor skills, coordination, and physical fitness, we
            introduce young players to team sports in a fun, non-competitive
            environment. Each game and drill is designed to help develop
            balance, agility, self-confidence and strength at the player’s own
            level and pace. Even more importantly, we strive to have a positive
            impact on each child while creating a team dynamic, as well as
            character building through life lessons such as honesty, sharing,
            respect and encouraging a positive attitude.
            <br />
            <b>
              <br />
              SILVER CLASS: 3-4 years old GOLD CLASS: 4-5 years old
              <br /> Sessions begin January 2nd and will be held Tuesdays,
              Thursdays and Saturdays.
              <br /> Classes are 45 minutes and cost only $115 per 5 class
              session.
              <br /> Each child also receives a Soccer Pup drawstring bag!
              Schedules are coming soon. Register below, or call for details.
            </b>
            <br />
          </p>
          <div className="register-btn">
            <a
              href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2859873"
              target="_blank"
            >
              <button>Soccer Pups Registration</button>
            </a>
          </div>
        </div>
      </StyledSoccerPups>
    </div>
  );
};

export default Soccerpups;
