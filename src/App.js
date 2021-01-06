import React from "react";
import {  Navigation, Projects, Home } from './components/';
import {Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
// 