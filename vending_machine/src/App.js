import React, { Component } from 'react';
import { Route } from "react-router-dom";

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Route exact path="/" render = {() => <VendingMachine/>} />
        <Route exact path="/Chips" render = {() => <Chips />} />
        <Route exact path="/Soda" render = {() => <Soda />} />
        <Route exact path="/Sardines" render = {() => <Sardines />} />
      </div>
    )
  }
}

export default App;