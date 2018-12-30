import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./App.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Summoner from "./Summoner";
import Home from "./Home";

import Logo from "./images/logo.png";

class App extends Component {
  // handleError(response) {
  //   if (!response.ok) {
  //       throw Error(response.statusText);
  //   }
  //   return response;
  // }

  render() {
    return (
      <div className="App">
        <header>
          <AppBar position="static" color="default">
            <Toolbar>
              <Link to="/">
                <img className="App__logo" src={Logo} alt="cute af poro logo" />
              </Link>
            </Toolbar>
          </AppBar>
        </header>
        <Router>
          <Home path="/" />
          <Summoner path="/summoner/:summonerName" />
        </Router>
      </div>
    );
  }
}

export default App;
