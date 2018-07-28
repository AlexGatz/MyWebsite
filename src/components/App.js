import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Main from "./Main";

const sideNavBar = {
  height: "100%",
  width: "0",
  position: "fixed",
  top: "0",
  left: "0",
  overflowX: "hidden",
  transition: "0.5s"
};

const sideNavBarOpen = {
  height: "100%",
  width: "150px",
  position: "fixed",
  zIndex: "1",
  top: "0",
  left: "0",
  backgroundColor: "#111",
  opacity: "0.7",
  overflowX: "hidden",
  transition: "0.5s",
  paddingTop: "60px"
};

const closeButton = {
  position: "absolute",
  top: "0",
  right: "25px",
  fontSize: "36px",
  marginLeft: "50px",
  cursor: "pointer",
  color: "#f2f2f2"
};

const sideNavLinks = {
  padding: "8px 8px 8px 32px",
  textDecoration: "none",
  fontSize: "25px",
  color: "#818181",
  display: "block",
  transition: "0.3s"
};

const hamburgerButton = {
  transition: "all 1.6s",
  fontSize: "30px",
  cursor: "pointer"
};

const hamburgerButtonFaded = {
  transition: "all 0.2s",
  opacity: "0"
};

const marginLeft = {
  transition: "all 0.8s",
  marginLeft: "0px"
};

const marginMoved = {
  transition: "all 0.2s",
  marginLeft: "150px"
};

class App extends Component {
  constructor() {
    super();
    this.state = { open: true };
  }

  openNav() {
    this.setState({ open: !this.state.open });
  }
  render() {
    let sideNavStyle = this.state.open ? sideNavBar : sideNavBarOpen;
    let hamburgerButtonStyle = this.state.open
      ? hamburgerButton
      : hamburgerButtonFaded;
    let marginStyle = this.state.open ? marginLeft : marginMoved;

    return (
      <div>
        <div style={sideNavStyle}>
          <a style={closeButton} onClick={this.openNav.bind(this)}>
            &times;
          </a>
          <a>
            <Link style={sideNavLinks} to="/">
              Home
            </Link>
          </a>
          <a>
            <Link style={sideNavLinks} to="/about">
              About
            </Link>
          </a>
          <a>
            <Link style={sideNavLinks} to="/contact">
              Contact
            </Link>
          </a>
        </div>

        <div>
          <span style={hamburgerButtonStyle} onClick={this.openNav.bind(this)}>
            &#9776;
          </span>
          {/* Added to allow the nav menu to cause the leftmargin to move when the nav bar does*/}
          <div style={marginStyle}>
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
