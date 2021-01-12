import styled from "styled-components";

export const StyledClickedNav = styled.div`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 35%;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  list-style: none;
  justify-content: space-evenly;
  transition: transform 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.6);
  z-index: 2;

  li {
    text-align: center;
    font-family: "Oswald", sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 100ms ease-in;
  }

  li:first-child {
    margin-top: 1rem;
  }

  li:hover {
    color: #503175;
  }

  li:last-child {
    font-size: 3rem;
    color: red;
  }

  li:last-child:hover {
    color: #503175;
  }
`;
