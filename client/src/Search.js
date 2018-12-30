import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";

class Search extends React.Component {
  state = {
    summonerName: "",
    summonerInfo: {}
  };

  nameChange = event => {
    this.setState({
      summonerName: event.target.value
    });
  };

  searchSummoner = event => {
    event.preventDefault();
    navigate(`/summoner/${this.state.summonerName}`);
  };

  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={this.searchSummoner}>
        <div>
          <div>
            <TextField
              label="Summoner Name"
              value={this.state.summonerName}
              onChange={this.nameChange}
              margin="normal"
            />
          </div>
          <div>
            <Button
              color="primary"
              type="submit"
              value="Submit"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
