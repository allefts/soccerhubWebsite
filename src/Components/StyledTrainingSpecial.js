import styled from "styled-components";

export const StyledTrainingSpecial = styled.div`
  width: 100%;
  //   background-color: rgba(80, 49, 117, 0.33);
  background: linear-gradient(
    107.56deg,
    rgba(67, 181, 73, 0.33) 0%,
    rgba(80, 49, 117, 0.5) 48.96%,
    rgba(210, 29, 35, 0.5) 100%
  );

  .training-special-writing {
    width: 66%;
  }
  .training-logo {
  }

  .training-special-title {
    padding: 1rem;
    text-align: center;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 0.2rem;
    font-size: 4rem;
    color: #503175;
  }

  .training-special-description {
    padding: 1rem;
    font-family: "Bebas Neue", cursive;
    text-align: center;
    font-size: 1.5rem;
  }

  .training-special-button {
    padding: 1rem;
    margin: 10px;
    text-align: center;
  }

  .training-special-button button {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: "Karla", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    color: #503175;
    padding: 1rem;
    border: none;
    outline: none;
  }
`;
