import React from "react";
import Header from "./Header";
import HomePromo from "./HomePromo";
import AboutPromo from "./AboutPromo";
import LeaguePromo from "./LeaguePromo";
import Spacer from "./Spacer";

const HomePage = () => {
  return (
    <div className="home-style">
      <Header></Header>
      <HomePromo></HomePromo>
      <AboutPromo></AboutPromo>
      <Spacer></Spacer>
      <LeaguePromo></LeaguePromo>
    </div>
  );
};

export default HomePage;
