import React, { Component } from "react";
import Nav from "./components/responsiveBars/rnavbar";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Contact from "./components/forms/contact";
import Portfolio from "./components/Portfolio";
import Home from "./components/home";
import Resume from "./components/Resume";
import Foot from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
        <footer>
          <Foot />
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
