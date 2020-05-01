import React from "react";
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';

import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="wrapper">

        <Switch>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
