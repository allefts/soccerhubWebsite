import styled from "styled-components";

export const Hamburger = styled.div`
  margin: 1rem;
  cursor: pointer;
  z-index: 20;

  div:first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  div:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }

  :hover div {
    transition: 250ms all ease-out;
    background-color: var(--tertiary);
  }

  div {
    transform-origin: 1px;
    width: 2rem;
    height: 0.25rem;
    background-color: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    padding: 0;
    margin: 0.42rem;
  }
`;
