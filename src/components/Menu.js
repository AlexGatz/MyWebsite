import React, { Component } from "react";
import { Link } from "react-router-dom";

const bodyStyle = {
  fontFamily: "Lato, sans-sarif",
  transition: "background - color .5s"
};

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

// The Header creates links that can be used to navigate
// between routes.
class Menu extends Component {
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

    return (
      <header>
        <body style={bodyStyle}>
          {/*TODO: Add CSS and JS for opening and closing menu*/}
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

          <div id="unknown">
            <span
              style={hamburgerButtonStyle}
              onClick={this.openNav.bind(this)}
            >
              &#9776;
            </span>
          </div>
        </body>
      </header>
    );
  }
}

export default Menu;
