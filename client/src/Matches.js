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
    };
  async componentDidMount() {
    const matchInfoResponse = await fetch(
      `/api/v1/matchList/na1/${this.state.accountId}`
    );
    const matchInfoJson = await matchInfoResponse.json();
    this.setState({
      ...this.state,
      matchData: matchInfoJson.matches,
      loading: false
    });
  }
  render() {
    if (this.state.loading) {
        return <p>Loading Matches...</p>
    }
    return (
        <div className="matches">
            {this.state.matchData.map(match => {
              return (
              <div key={match.gameId} className="matches__match">
                <Match matchInfo={match} />
              </div>
              )})}
        </div>
    );
  }
}

export default Matches;
