import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import HomePromo from "./Components/HomePromo";
import AboutPromo from "./Components/AboutPromo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
