import React, { Component } from "react";
import Main from "./Main";
import NavBar from "./NavBar";
import "./App.css";
import Particles from "react-particles-js";

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
        <Particles
          className="particleStuff"
          params={{
            particles: {
              number: {
                value: 100,
                density: { enable: true, value_area: 800 }
              },
              color: { value: "#00ff3c" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 6 },
                image: { src: "img/github.svg", width: 100, height: 100 }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 4,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#000000",
                opacity: 1,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "repulse" },
                resize: true
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true
          }}
        />
        <NavBar navBarStatus={this.handleNavBarStatus} />
        <div className={marginStyle}>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
