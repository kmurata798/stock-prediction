<<<<<<< HEAD:frontend/src/App.js
import React from 'react';
import logo from './logo.svg';
=======
>>>>>>> b1b8e1d4395a62b0e7e4ca4c66099907c447d4d6:src/App.js
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component }  from 'react';
import Home from './components/Pages/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
