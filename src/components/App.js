import React, { Component } from "react";
import Main from "./Main";
import NavBar from "./NavBar";
import "./App.css";

import { Parallax } from "react-scroll-parallax";

class App extends Component {
  handleNavBarStatus = isNavBarOpen => {
    //marginMoved or marginLeft css used based on boolean
  };
  render() {
    return (
      <div className="">
        <NavBar navBarStatus={this.handleNavBarStatus} />
        <Main />
      </div>
    );
  }
}

export default App;
