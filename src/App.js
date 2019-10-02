import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import BuildingContainer from './Components/BuildingContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <BuildingContainer/>
      </div>
    );
  }
}

export default App;
