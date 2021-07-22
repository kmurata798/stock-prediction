// import React from 'react';
// import logo from './logo.svg';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// import components
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import AddCompany from "./components/add-company.component";
import Company from "./components/company.component";
import CompaniesList from "./components/companies-list.component";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route exact path={["/", "/companies"]} component={CompaniesList} />
          <Route exact path="/add" component={AddCompany} />
          <Route path="/companies/:id" component={Company} />
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
