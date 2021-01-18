import React from "react";
import styled from "styled-components";

const StyledTable = styled.div`

  overflow-x: auto;
  margin: 40px auto 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  table{
      width: 100%;
      margin-bottom: 20px;
  }

  table tr:first-child th{
    background-color: rgba(80, 49, 117, .5);
  }
  

  tr:first-child h3 {
    text-decoration: underline;
    font-size: 2rem;
    margin-bottom 10px;    
  }

  tr th {
    border: 1px solid black;
    padding: 1rem;
    font-family: 'Oswald', sans-serif;

  }

  tr th h5{
      font-size: 1.25em;
  }
`;

const Table = () => {
  return (
    <StyledTable>
      <table>
        <tr>
          <th>
            <h3>Monday</h3>
            <h5>Beginner 4:30pm</h5>
          </th>
          <th>
            <h3>Tuesday</h3>
            <h5>Beginner 4:30pm</h5>
          </th>
          <th>
            <h3>Wednesday</h3>
            <h5>Beginner 4:30pm</h5>
          </th>
          <th>
            <h3>Thursday</h3>
            <h5>Beginner 4:30pm</h5>
          </th>
          <th>
            <h3>Friday</h3>
            <h5>Private 4:30pm</h5>
          </th>
        </tr>
        <tr>
          <th>
            <h5>Intermediate 5:45pm</h5>
          </th>
          <th>
            <h5>Intermediate 5:45pm</h5>
          </th>
          <th>
            <h5>Intermediate 5:45pm</h5>
          </th>
          <th>
            <h5>Intermediate 5:45pm</h5>
          </th>
          <th>
            <h5>Beginner 5:45pm</h5>
          </th>
        </tr>
        <tr>
          <th>
            <h5>Advanced 7:00pm</h5>
          </th>
          <th>
            <h5>Advanced 7:00pm</h5>
          </th>
          <th>
            <h5>Advanced 7:00pm</h5>
          </th>
          <th>
            <h5>Advanced 7:00pm</h5>
          </th>
          <th>
            <h5>Advanced 7:00pm</h5>
          </th>
        </tr>
      </table>
    </StyledTable>
  );
};

export default Table;
