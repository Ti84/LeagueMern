import React from "react";
import Match from "./Match";
import "./Matches.scss";

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchData: [],
      accountId: props.accountId,
      loading: true
    };
  }
  async componentDidMount() {
    const matchInfoResponse = fetch(
      `/api/v1/matchList/na1/${this.state.accountId}`
    ).then((response) => response.json());

    const champions = fetch(`/api/v1/champions`).then((response) => response.json());

    Promise.all([matchInfoResponse, champions]).then(responses => {

      const matchInfoJson = responses[0];
      this.setState({
        ...this.state,
        matchData: matchInfoJson.matches,
        chamionInfo: responses[1],
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <p>Loading Matches...</p>;
    }
    return (
      <div className="matches">
        {this.state.matchData.map(match => {
          return (
            <div key={match.gameId} className="matches__match">
              <Match matchInfo={match} championInfo={this.state.chamionInfo}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Matches;
