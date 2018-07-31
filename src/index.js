import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { ParallaxProvider } from "react-scroll-parallax";

render(
  <ParallaxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ParallaxProvider>,
  document.getElementById("root")
);
