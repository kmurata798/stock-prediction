import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component }  from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
