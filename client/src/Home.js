import React from "react";
import Search from "./Search";
import Logo from "./images/logo.png";

import "./Home.scss";
import { Typography } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__title-card">
            <img className="home__logo" src={Logo} alt="cute af poro logo" />
            <Typography variant="h6" color="inherit">
                League Buddy
          </Typography>
        </div>
        <div>
            <Search />
        </div>
      </div>
    );
  }
}

export default Home;
