/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import "./Camps.css";

const StyledCamps = styled.div`
  .camp-header {
    min-height: 600px;
    text-align: center;
    width: 85%;
    margin: auto;
  }

  .camp-header h1 {
    font-family: "Oswald", sans-serif;
    font-size: 64px;
    text-decoration: underline;
    color: red;
  }

  .camp-header p {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
  }

  .camp-header h1,
  .camp-header p {
    padding: 50px 30px;
    line-height: 25pt;
    z-index: 2;
  }

  .camp-header h3 {
    font-family: "Oswald", sans-serif;
    font-size: 40px;
  }

  .camp-span {
    font-size: 40px;
    color: red;
  }

  .number-span {
    color: red;
  }

  .camp-email {
    text-decoration: none;
    color: red;
  }

  .camp-btn button {
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

  .camp-btn button:hover {
    background: #503175;
  }

  @media (max-width: 500px) {
    .camp-header p {
      font-size: 15px;
    }
  }
`;

const Camps = () => {
  return (
    <div className="bg-camps">
      <StyledCamps>
        <div className="camp-header">
          <div className="overlay"></div>
          <h1>CAMPS</h1>
          <h3>SPRING BREAK CAMP March 15-19 2021</h3>
          <p>
            <span className="camp-span">W</span>e know you love our camps, and
            we love having you here for camp too! So come join us during your
            Spring break and enjoy the BEST week of soccer camp in Austin. Learn
            technical skills and sharpen your moves with a variety of fun games,
            such as 3v3 and 4v4 soccer, World Cup and a variety of soccer based
            skills, games and much, much more. At the HUB, we know you want your
            child to stay active over their break, and we have the best coaches
            in Austin to make sure that fitness and fun are the top priority.
            <br />
            <br />
            Full and Half Day spots are available, mornings or afternoons.
            <br />
            <b>
              Do you only need a single day drop in, or just have a question?
              Give us a call for availability at{" "}
              <span className="number-span">512-358-4908</span>. You can also
              email us at{" "}
              <a
                href="mailto: info@soccerhubaustin.com "
                target="_blank"
                className="camp-email"
              >
                info@soccerhubaustin.com
              </a>
              .
            </b>
          </p>
          <a
            href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2877465"
            target="_blank"
            className="camp-btn"
          >
            <button>Register Now!</button>
          </a>
        </div>
      </StyledCamps>
    </div>
  );
};

export default Camps;

// <video autoplay="" loop="" muted="" poster="https://soccerhubaustin.com/wp-content/uploads/2017/05/video-poster-image-camps.jpg" style="top:-60%">
//    		<source src="https://soccerhubaustin.com/wp-content/uploads/2017/10/The-Soccer-Station-117_1.mp4">
// 	</video>
