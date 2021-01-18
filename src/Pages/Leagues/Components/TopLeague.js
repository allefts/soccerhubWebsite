import React from "react";
import styled from "styled-components";
import "../Leagues.css";

const StyledTopLeague = styled.div`
  width: 100%;
  text-align: center;
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  .league-header {
    text-decoration: underline;
    padding: 50px 0;
    font-size: 64px;
    font-family: "Oswald", sans-serif;
    z-index: 1;
  }

  .league-span {
    font-size: 3rem;
    margin-bottom: 5px;
    color: red;
  }

  .league-description {
    color: black;
    font-size: 20px;
    padding: 16px 100px;
    line-height: 25pt;
    font-family: "Open Sans", sans-serif;
  }
`;

const StyledYouth = styled.div`
  width: 80%;
  margin: 20px auto 0 auto;

  .youth-header {
    text-align: center;
    margin: 2rem;
    color: #503175;
    font-size: 1.2em;
  }

  p {
    color: #503175;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 50px;
    font-size: 1.3em;
  }

  ul li {
    color: #503175;
    font-family: "Open Sans", sans-serif;
    margin: 20px;
    font-size: 1.25em;
  }

  h2,
  h3 {
    font-family: "Karla", sans-serif;
  }

  .league-rules-buttons a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-flow: wrap column;
  }

  .def-btn{
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

  .def-btn:hover{
    background: #503175;
  }

  .youth-league-registration, .adult-league-registration{
    padding: 1rem;
    text-align: center;
  }

  .youth-league-registration h2, .adult-league-registration h2{
    margin: 2rem;
    font-size: 3rem;
  }

  .youth-btns, .adult-btns{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }


  .league-age-thing{
    font-family: "Open Sans", sans-serif;
    color: #503175;
    text-align: center;
    font-size: 20px;
  }

  .def-btn a, .youth-btns a, .adult-btns a{
    text-decoration: none;
    color: inherit;
    all: unset;
  }

  }
`;

const TopLeague = () => {
  return (
    <div className="bg">
      <StyledTopLeague>
        <h1 className="league-header">LEAGUES</h1>
        <p className="league-description">
          <span className="league-span">
            <b>U</b>
          </span>
          nique to the Austin community, we offer indoor 4v4 youth and adult
          futsal soccer leagues on our beautifully walled-in FIFA-approved
          futsal floor surface. 4v4 games will be for adults and youth, and we
          recommend a roster of 8 players on a team. Leagues will be organized
          by skill level/gender (no goalies!) Youth games will be scheduled on
          weekends with adult games organized on weekday evenings. Adults will
          have a 6 game season with Men’s O30, Men’s I, Men’s II and Co-Ed
          Leagues. <br /> <br /> <b>Pricing: </b>$390/Team (including ref fees)
          or $65/individual and you will be placed on a team. You can even
          reserve a spot for your NEW team with just a $150 deposit!
        </p>
      </StyledTopLeague>
      <StyledYouth>
        <div className="youth-header">
          <h2>
            <span style={{ color: "red" }}>YOUTH PLAYERS:</span> Spring League
            Info Update!
          </h2>
          <h3>Spring League runs March 7th through April 25th</h3>
        </div>
        <p>This will be a modified format 6 game season.</p>
        <ul>
          <li>
            All games will be 2 fifteen minute halves with 10 minutes between
            games to allow players and fans to leave and minimize contact with
            others
          </li>
          <li>
            There will be a max roster size of 6 players and up to two parents
            per player at the games.
          </li>
          <li>
            We will be streaming the games on FaceBook for the other parents to
            watch live.
          </li>
          <li>
            The cost is only $290.00 per team or you may opt to be on a house
            team at $45.00 per player (House teams will be coached by a Soccer
            Hub coach)
          </li>
        </ul>
        <div className="league-rules-buttons">
          <a href="https://soccerhubaustin.com/wp-content/uploads/2017/05/SoccerHub-Rules-and-Policies-v1.pdf">
            <button className="def-btn">Soccerhub Rules and Policies</button>
          </a>
          <a href="https://thesoccerstation.ezleagues.ezfacility.com/leagues.aspx">
            <button className="def-btn">League Schedule/Standings</button>
          </a>
        </div>

        <div className="league-age-thing">
          Youth 4v4 Leagues In accordance with the new US Youth Soccer
          Initiative, birth-year registration calendars align with the start of
          the calendar year and run January to December.
        </div>

        <div className="youth-league-registration">
          <h2>Youth League Registrations:</h2>
          <div className="youth-btns">
            <a href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2877484">
              <button className="def-btn">
                <i class="fas fa-angle-double-right"></i>
                U7/U8(2013-2014)Co-Ed
              </button>
            </a>
            <a href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2808176">
              <button className="def-btn">
                <i class="fas fa-angle-double-right"></i>
                U9/U10 (2011-2012) CoEd
              </button>
            </a>
            <a href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2877485">
              <button className="def-btn">
                <i class="fas fa-angle-double-right"></i>
                U11/U12 (2009-2010) CoEd
              </button>
            </a>
          </div>
        </div>
        <div className="adult-league-registration">
          <h2>Adult League Registrations</h2>
          <div className="adult-btns">
            <a href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2406848">
              <button className="def-btn">
                <i class="fas fa-angle-double-right"></i>
                Men’s Monday O30 League
              </button>
            </a>
            <a href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2406853">
              <button className="def-btn">
                <i class="fas fa-angle-double-right"></i>
                CoEd League
              </button>
            </a>
            <a href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2406877">
              <button className="def-btn">
                <i class="fas fa-angle-double-right"></i>
                Men’s Intermediate A League
              </button>
            </a>
            <a href="https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=5703&GroupID=2406880">
              <button className="def-btn">
                <i class="fas fa-angle-double-right"></i>
                Men’s Intermediate B League
              </button>
            </a>
          </div>
        </div>
      </StyledYouth>
    </div>
  );
};

export default TopLeague;
