import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import Search from './Search';
import Summoner from './Summoner';

class App extends Component {

  handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }

  render() {
    return (
      <div className="App">
        <header>
        <Link to="/">Search</Link>
        </header>
        <Router>
          <Search path="/" />
          <Summoner path="/summoner/:summonerName" />
        </Router>
      </div>
    );
  }
}

export default App;
