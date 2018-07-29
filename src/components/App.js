import React, { Component } from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { open: true };
  }

  openNav() {
    this.setState({ open: !this.state.open });
  }
  render() {
    /* Is there a better way to do this?!?! */

    let sideNavStyle = this.state.open ? "sideNavBar" : "sideNavBarOpen";
    let hamburgerButtonStyle = this.state.open
      ? "hamburgerButton"
      : "hamburgerButtonFaded";
    let marginStyle = this.state.open ? "marginLeft" : "marginMoved";

    return (
      <body>
        <div className={sideNavStyle}>
          <a className="closeButton" onClick={this.openNav.bind(this)}>
            &times;
          </a>
          <a>
            <Link className="sideNavLinks" to="/">
              Home
            </Link>
          </a>
          <a>
            <Link className="sideNavLinks" to="/about">
              About
            </Link>
          </a>
          <a>
            <Link className="sideNavLinks" to="/contact">
              Contact
            </Link>
          </a>
        </div>

        <div>
          <span
            className={hamburgerButtonStyle}
            onClick={this.openNav.bind(this)}
          >
            &#9776;
          </span>
          {/* Added to allow the nav menu to cause the leftmargin to move when the nav bar does*/}
          <div className={marginStyle}>
            <Main />
          </div>
        </div>
      </body>
    );
  }
}

export default App;
