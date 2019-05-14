import React, {Component} from "react";
import { Route , Switch } from "react-router-dom";

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import Navbar from './Navbar';

import './App.css';

class App extends Component{
  render(){
    return (
      
      <div className="App">
      <Navbar />
        <Switch>
        <Route exact path="/" render = {() => <VendingMachine/>} />
        <Route exact path="/Chips" render = {() => <Chips />} />
        <Route exact path="/Soda" render = {() => <Soda />} />
        <Route exact path="/Sardines" render = {() => <Sardines />} />
        </Switch>
      </div>
    );
  }
}

export default App;