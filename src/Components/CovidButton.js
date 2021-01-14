import React from "react";
import { StyledCovidList } from "./StyledCovidButton";

const CovidPrecautions = () => {
  const precautions = [
    "Front counter staff member will wear a protective mask.",
    "We will screen all staff, players and parents upon arrival with a temperature check.",
    "Only one parent will be allowed to accompany each player being trained.",
    "Drop off service will be available, and front counter staff will assist with pick ups.",
    "Disinfectant will be available at each counter as you enter and leave the facility.",
    "Classes will be scheduled an additional 15 minutes apart, to allow our staff to clean and disinfect the court, balls and surfaces.",
    "Sessions will be limited to 8 players per class, and will be Invite Only.",
    "Class times will start as follows: 4:30pm, 5:45pm, 7:00pm. Please be on time!",
  ];

  const ballIcon = <i class="far fa-futbol precaution-list"></i>;

  const precautionList = precautions.map((precaution) => (
    <li>
      {ballIcon}
      {precaution}
    </li>
  ));

  return (
    <div>
      <StyledCovidList>{precautionList}</StyledCovidList>
    </div>
  );
};

export default CovidPrecautions;

/* <li>Front counter staff member will wear a protective mask.</li>
        <li>
          We will screen all staff, players and parents upon arrival with a
          temperature check.
        </li>
        <li>
          Only one parent will be allowed to accompany each player being
          trained.
        </li>
        <li>
          Drop off service will be available, and front counter staff will
          assist with pick ups.
        </li>
        <li>
          Disinfectant will be available at each counter as you enter and leave
          the facility.
        </li>
        <li>
          Classes will be scheduled an additional 15 minutes apart, to allow our
          staff to clean and disinfect the court, balls and surfaces.
        </li>
        <li>
          Sessions will be limited to 8 players per class, and will be Invite
          Only.
        </li>
        <li>
          Class times will start as follows: 4:30, 5:45, 7:00. Please be on
          time!
        </li> */
