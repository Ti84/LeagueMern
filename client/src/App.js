import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import Summoner from './Summoner';
import Home from './Home';

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
        <Link to="/">Home</Link>
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
