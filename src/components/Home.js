import React, { Component } from "react";
import Helmet from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div className="homeDiv">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <h1>Hi, welcome to my super simple blog!</h1>
      </div>
    );
  }
}

export default Home;
