/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import "../Training.css";
import Table from "./Table";

const StyledTopContent = styled.div`
  font-family: "Oswald", sans-serif;

  h1 {
    text-align: center;
    font-size: 4rem;
    padding: 50px 0;
    letter-spacing: 5pt;
    font-weight: 800;
  }

  .training-train {
    color: #d21d23;
    text-decoration: underline;
  }

  .main-description-container {
    width: 80%;
    margin: 0 auto;
  }

  .main-description-container p {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: normal;
    padding-bottom: 20px;
  }

  .session-btns {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .session-btns button {
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

  .session-btns i {
    margin-right: 5px;
  }

  .session-btns button:hover {
    background: #503175;
  }

  @media (max-width: 800px) {
    .session-btns {
      flex-direction: column;
      width: 100%;
    }
  }
`;

const TopContent = () => {
  return (
    <div className="background" style={{ backgroundColor: "#D8D8D8" }}>
      <StyledTopContent>
        <h1 className="main-header">
          COME <span className="training-train">TRAIN</span> WITH US!
        </h1>
        <div className="main-description-container">
          <p>
            At <span style={{ color: "#503175" }}>Soccer Hub</span>, youth
            training is our specialty. Most days, we offer hourly training from{" "}
            <b>4:30-8 p.m</b>. Our Friday night scrimmages are determined by the
            trainers, so please ask for more information. We are temporarily
            limiting our player to coach ratio to 4-1, and have our own
            curriculum, using a technical training model that gives players the
            tools needed to command the game at any level. Importantly, we have
            structured our curriculum and training processes to cater to all
            skill levels. After your son or daughter has completed their first
            session, the trainer will recommend appropriate placements.
          </p>
          <p>
            <b>Registration Procedure: </b>
            We offer training packages of 4, 6 or 8 sessions, and have added
            some private training class availability. Once purchased,{" "}
            <b>all packages must be used within 90 days.</b>
          </p>
        </div>
        <div className="session-btns">
          <a
            href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=1978667"
            target="_blank"
          >
            <button>
              <i class="fas fa-angle-double-right"></i>4 Sessions
            </button>
          </a>
          <a
            href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2036414"
            target="_blank"
          >
            <button>
              <i class="fas fa-angle-double-right"></i>6 Sessions
            </button>
          </a>
          <a
            href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=1978693"
            target="_blank"
          >
            <button>
              <i class="fas fa-angle-double-right"></i>8 Sessions
            </button>
          </a>
        </div>
        <Table></Table>
      </StyledTopContent>
      <StyledGridLessons>{gridMap}</StyledGridLessons>
      <StyledRefundPolicy className="refund-policy">
        <h2>Soccerhub Refund Policy</h2>
        <p>
          All training packages must be used within 90 days. Because limited
          openings are available, once a session, private training or camp has
          been purchased we are unable to offer refunds. Should a situation
          arise where you need to make changes to a players schedule, please
          contact Soccer Hub management and we will discuss placement options
          with you.
        </p>
      </StyledRefundPolicy>
    </div>
  );
};

const StyledRefundPolicy = styled.div`
  display: block;
  text-align: center;

  h2 {
    padding: 10px 20px;
    font-family: "Oswald", sans-serif;
  }

  p {
    font-size: 18px;
    padding: 1.5rem 10rem;
    font-family: "Open Sans", serif;
  }
`;

const gridClass = "grid-background";
const overlayClass = "overlay";

const LessonsGrid = ({ title, description, id }) => {
  //TAKES IN TITLE AND DESCRIPTION, RENDERS H3 AND P BASED ON THE DATA GIVEN
  return (
    <StyledInsideGridLessons className={gridClass + id}>
      <div className={overlayClass + id}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledInsideGridLessons>
  );
};

const gridContent = [
  //ALL GRID STUFF THAT WILL BE RENDERED
  {
    title: "GROUP TRAINING",
    description:
      "We begin with the basics required for every position in the game. Covering all the technical skills like ball control, shooting, passing, movement on and off the ball and of course, speed and agility. Players can then advance to the next level of training as their skills progress. Class size is limited to a max of 12 players for better comprehension and to maintain quality player/trainer ratio.",
    id: 0,
  },
  {
    title: "SCRIMMAGE",
    description:
      "Players have the opportunity to use and refine the skills they’ve learned in a fast-paced 4v4 format, guided by their coach’s feedback, which gives them the chance to improve in a game styled setting. This enhances their ability on the outdoor field, helping them make accurate decisions quicker.",
    id: 1,
  },
  {
    title: "PRIVATE TRAINING",
    description:
      "The most efficient way for any player to develop their skills in a personalized setting, allowing them to improve at a much quicker pace. More reps with instant feedback from the coach, with a specific focus on them as an individual, capitalizes on strengths and allows improvement in overall ball movement.",
    id: 2,
  },
  {
    title: "ACADEMY",
    description:
      "For the Five to Seven age group, Academy focuses on motor skills and fundamentals of soccer. We strive to set the tone for soccer training using mind/body connection to create skills, and play soccer related games that are fun and keep smaller players interested. Academy players will also be introduced to the U5-U6 and U7-U8 age groups with the opportunity to play other Academy teams.",
    id: 3,
  },
];

const gridMap = gridContent.map((
  grid //MAPS THROUGH THE ABOVE ARRAY OF OBJECTS AND CREATES A LESSONS GRID COMPONENT FOR EACH ELEMENT
) => (
  <LessonsGrid
    title={grid.title}
    description={grid.description}
    id={grid.id}
  ></LessonsGrid>
));

const StyledGridLessons = styled.div`
  min-height: 800px;
  text-align: center;
  width: 80%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin: 30px auto;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const StyledInsideGridLessons = styled.div`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-evenly;

  .overlay0,
  .overlay1,
  .overlay2,
  .overlay3 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .overlay0,
  .overlay1 {
    background-color: rgba(67, 181, 73, 0.6);
  }

  .overlay2,
  .overlay3 {
    background-color: rgba(80, 49, 117, 0.6);
  }

  //GREEN: background-color: rgba(67, 181, 73, 0.6);
  //RED: background-color: rgba(210, 29, 35, 1);
  //PURPLE: background-color: rgba(80, 49, 117, 1);

  h3,
  p {
    z-index: 1;
    color: black;
  }

  p {
    font-family: "Open Sans", sans-serif;
    padding: 1.5em;
    color: white;
    font-weight: 500;
    font-size: 1.25rem;
  }

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 2.5rem;
    color: yellow;
  }
`;

export default TopContent;
