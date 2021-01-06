import React from "react";
import {  Navigation, Projects, Home } from './components/';
import Container from 'react-bootstrap/Container'

import {Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navigation />
      <Container>
        <Switch>
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
      </Router>
    </>
  );
}

export default App;
// 