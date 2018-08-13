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
    if (isNavBarClosed) {
      console.log("Nav Bar is closed");
      this.setState({ hasMarginMoved: false });
      console.log(this.state.hasMarginMoved);
    } else {
      console.log("Nav Bar is open");
      this.setState({ hasMarginMoved: true });
      console.log(this.state.hasMarginMoved);
    }
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
