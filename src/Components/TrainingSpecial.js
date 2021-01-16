import React from "react";
import { StyledTrainingSpecial } from "./StyledTrainingSpecial";
import soccerhubImage from "../images/sh.png";

const TrainingSpecial = () => {
  return (
    <div>
      <StyledTrainingSpecial className="training-special-container">
        <img className="training-logo" src={soccerhubImage} alt="" />
        <div className="training-special-writing">
          <h1 className="training-special-title">JANUARY TRAINING SPECIAL!</h1>
          <p className="training-special-description">
            Limited space available, call us or click below for more information
          </p>
          <div className="training-special-button">
            <button>TRAINING SPECIAL</button>
          </div>
        </div>
      </StyledTrainingSpecial>
    </div>
  );
};

export default TrainingSpecial;
