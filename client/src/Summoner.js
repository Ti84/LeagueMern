import React from "react";
import "./Summoner.scss";

class Summoner extends React.Component {

    state = {
        loading: true,
        summonerData: {},
        errorMessage: ""
     };

    componentDidMount = () => {
        fetch(`/api/v1/summoner/na1/${this.props.summonerName}`)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    summonerData: data,
                    errorMessage: "",
                    loading: false
                });
        })
        .catch(err => {
            this.setState({
                ...this.state,
                errorMessage: err,
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>;
        }

        if (this.state.errorMessage) {
            return <p>this.state.errorMessage</p>;
        }

        let { name, summonerLevel }=this.state.summonerData;
        return(<div className="results">
            <div className="results__summoner-card">
                <img className="results__avatar" src={`http://avatar.leagueoflegends.com/na/${name}.png`} alt="profile icon"></img>
                <p>{name}</p>
                <p>{summonerLevel}</p>
            </div>
        </div>);
    };
}

export default Summoner;