import React from "react";
import "./Match.scss";

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchData: props.matchInfo,
      championData: props.championInfo
    };
  }

  convertTime = time => {
    return new Date(time).toLocaleDateString("en-US");
  };

  grabChamp = champKey => {
    const champ = Object.values(this.state.championData.data);
    const champion = champ.find(
      champion => champion.key === champKey.toString()
    );
    if (champion) {
      return champion.image.full;
    }
    return "Ashe.png";
  };

  render() {
    return (
      <div className="matchbox">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${this.grabChamp(
            this.state.matchData.champion
          )}`}
          alt="Champion Images"
        />
        <p>{this.convertTime(this.state.matchData.timestamp)}</p>
        <a href="https://www.google.com">More Info</a>
      </div>
    );
  }
}

export default Match;
