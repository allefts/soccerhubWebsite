import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Training from "./Pages/Training/Training";
import Leagues from "./Pages/Leagues/Leagues";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Soccerpups from "./Pages/SoccerPups/Soccerpups";
import Camps from "./Pages/Camps/Camps";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        {/* WHAT IS RENDERD ON HOME PAGE */}
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/training">
          <Training />
        </Route>
        <Route exact path="/leagues">
          <Leagues />
        </Route>
        <Route exact path="/soccer-pups">
          <Soccerpups />
        </Route>
        <Route exact path="/camps">
          <Camps />
        </Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
