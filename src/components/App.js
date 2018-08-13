import React, { Component } from "react";
import Main from "./Main";
import NavBar from "./NavBar";
import "./App.css";

import { Parallax } from "react-scroll-parallax";

class App extends Component {
  constructor() {
    super();
    this.state = { hasMarginMoved: false };
  }
  handleNavBarStatus = isNavBarClosed => {
    this.setState(
      isNavBarClosed ? { hasMarginMoved: false } : { hasMarginMoved: true }
    );
  };
  render() {
    let marginStyle = this.state.hasMarginMoved ? "marginMoved" : "marginLeft";
    return (
      <div>
        <NavBar navBarStatus={this.handleNavBarStatus} />
        <div className={marginStyle}>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
