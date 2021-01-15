import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import HomePromo from "./Components/HomePromo";
import AboutPromo from "./Components/AboutPromo";
import LeaguePromo from "./Components/LeaguePromo";
import Spacer from "./Components/Spacer";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        {/* WHAT IS RENDERD ON HOME PAGE */}
        <Route exact path="/">
          <div className="home-style">
            <Header></Header>
            <HomePromo></HomePromo>
            <AboutPromo></AboutPromo>
            <Spacer></Spacer>
            <LeaguePromo></LeaguePromo>
            <SignUp></SignUp>
          </div>
        </Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
