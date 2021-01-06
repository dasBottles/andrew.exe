import React from "react";
import {  Navigation, Projects, Home, Contact } from './components/';
import Container from 'react-bootstrap/Container'
import './style.css'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navigation />
      <Container fluid='true'>
        <Switch>
          <Route path="/contact" component={Contact} />
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