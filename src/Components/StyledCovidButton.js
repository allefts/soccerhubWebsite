import styled from "styled-components";

export const StyledCovidButton = styled.button`
  border: 1px solid #503175;
  background: none;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "Oswald";
  cursor: pointer;
  margin: 10px;
  color: black;
  transition: 0.8s;
  position: relative;
  overflow: hidden;

  :hover {
    color: red;
    background: rgba(210, 29, 35, 0.33) 100%;
  }
`;

export const StyledCovidList = styled.ul`
  list-style: none;
  text-align: center;
  line-height: 15pt;
  font-family: "PT Serif", serif;
  margin-bottom: 15px;
  li {
    color: #d21d23;
    font-weight: 550;
  }

  .precaution-list {
    color: black;
    margin: 5px;
  }

  @media (max-width: 800px) {
    li {
      border-top: 1px solid purple;
      font-size: 17px;
      margin: 10px;
    }

    .precaution-list {
      margin: 3px;
    }
  }
`;
