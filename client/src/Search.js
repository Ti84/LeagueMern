import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { navigate } from "@reach/router";

class Search extends React.Component {
    state = {
        summonerName: "",
        summonerInfo: {}
    }

    nameChange = event => {
        this.setState({
            summonerName: event.target.value
        });
    }

    searchSummoner = (event) => {
        event.preventDefault();
        navigate(`/summoner/${this.state.summonerName}`);
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off" onSubmit={this.searchSummoner}>
                    <TextField
                    label="Summoner Name"
                    value={this.state.summonerName}
                    onChange={this.nameChange}
                    margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit" value="Submit">
                        Search
                    </Button>
                </form>
            </div>
        );
    }
}

export default Search;