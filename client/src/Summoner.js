import React from "react";
import "./Summoner.scss";
import Matches from "./Matches";

class Summoner extends React.Component {
  state = {
    loading: true,
    summonerData: {},
    matchData: [],
    errorMessage: ""
  };

  async componentDidMount() {
    try {
      const summonerInfoResponse = await fetch(
        `/api/v1/summoner/na1/${this.props.summonerName}`
      );
      const summonerInfoJson = await summonerInfoResponse.json();
      this.setState({
        ...this.state,
        summonerData: summonerInfoJson,
        errorMessage: "",
        loading: false
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }

    let { name, summonerLevel } = this.state.summonerData;
    return (
      <div className="results">
        <div className="results__summoner-info">
          <div className="results__summoner-card">
            <img
              className="results__avatar"
              src={`http://avatar.leagueoflegends.com/na/${name}.png`}
              alt="profile icon"
            />
            <p>{name}</p>
            <p>{summonerLevel}</p>
          </div>
        </div>
        <div className="results__matches">
          <Matches accountId={this.state.summonerData.accountId} />
        </div>
      </div>
    );
  }
}

export default Summoner;
