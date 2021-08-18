import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component }  from 'react';
import Home from './components/Pages/Home';
import AddCompany from "./components/add-company.component";
import Company from "./components/company.component";
import CompaniesList from "./components/companies-list.component";
// import StocksSingle from "./components/stocks-single.component";
import StocksApi from "./components/stocks-api.component";
import StockData from './components/Pages/StockData';

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
          <Route path="/stocks" component={StocksApi} />
          <Route path="/stocksdata" component={StockData} />
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
