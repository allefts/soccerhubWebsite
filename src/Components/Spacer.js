import React from "react";
import shSideLogo from "../images/soccer-hub-side-logo.png";
import styled from "styled-components";

const StyledSpacer = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: rgba(207, 207, 207, 0.7);

  // background: #cfcfcf;
  padding-bottom: 1rem;
  img {
    transform: rotate(90deg);
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const Spacer = () => {
  return (
    <StyledSpacer>
      <img src={shSideLogo} alt="" />
    </StyledSpacer>
  );
};

export default Spacer;
