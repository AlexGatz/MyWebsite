import React from "react";
import { Link } from "react-router-dom";

const bodyStyle = {
  fontFamily: "Lato",
  transition: "background - color .5s"
};

const sideNavBar = {
  height: "100%",
  width: "0",
  position: "fixed",
  zIndex: "1",
  top: "0",
  left: "0",
  backgroundColor: "#111",
  opacity: "0.5",
  overflowX: "hidden",
  transition: "0.5s",
  paddingTop: "60px"
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
  fontSize: "30px",
  cursor: "pointer"
};

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <body style={bodyStyle}>
      {/*TODO: Add CSS and JS for opening and closing menu*/}
      <div style={sideNavBar}>
        <a style={sideNavLinks}>&times;</a>
        <a style={sideNavLinks}>
          <Link to="/">Home</Link>
        </a>
        <a style={sideNavLinks}>
          <Link to="/about">About</Link>
        </a>
        <a style={sideNavLinks}>
          <Link to="/contact">Contact</Link>
        </a>
      </div>

      <div id="unknown">
        <span style={hamburgerButton} onClick="">
          &#9776;
        </span>
      </div>
    </body>
  </header>
);

export default Header;
