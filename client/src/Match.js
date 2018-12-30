import React from "react";
import "./Match.scss";

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: props.matchInfo
    };
  }

  convertTime = time => {
    return new Date(time).toLocaleDateString("en-US");
  };

  render() {
    return (
      <div className="matchbox">
        <ul>
          <li>{this.state.match.champion}</li>
          <li>{this.convertTime(this.state.match.timestamp)}</li>
        </ul>
        <a href="www.google.com">More Info</a>
      </div>
    );
  }
}

export default Match;
