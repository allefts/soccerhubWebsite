import React from "react";
import styled from "styled-components";
import "./Camps.css";

const StyledCamps = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d8d8d8;
  position: relative;
  }
`;

const Camps = () => {
  return (
    <div className="bg">
      <StyledCamps>
        <div className="overlay"></div>
        <div className="camp-header">
          <h1>Camps</h1>
          <p>
            We know you love our camps, and we love having you here for camp
            too! So come join us during your Spring break and enjoy the BEST
            week of soccer camp in Austin. Learn technical skills and sharpen
            your moves with a variety of fun games, such as 3v3 and 4v4 soccer,
            World Cup and a variety of soccer based skills, games and much, much
            more. At the HUB, we know you want your child to stay active over
            their break, and we have the best coaches in Austin to make sure
            that fitness and fun are the top priority. Full and Half Day spots
            are available, mornings or afternoons.
            <br />
            <b>
              Do you only need a single day drop in, or just have a question?
              Give us a call for availability at 512-358-4908. You can also
              email us at info@soccerhubaustin.com.
            </b>
          </p>
        </div>
      </StyledCamps>
    </div>
  );
};

export default Camps;

// <video autoplay="" loop="" muted="" poster="https://soccerhubaustin.com/wp-content/uploads/2017/05/video-poster-image-camps.jpg" style="top:-60%">
//    		<source src="https://soccerhubaustin.com/wp-content/uploads/2017/10/The-Soccer-Station-117_1.mp4">
// 	</video>
