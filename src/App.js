import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 import BPM from './Components/BPM'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React BPM</h1>
        </header>
        <BPM />
      </div>
    );
  }
}

export default App;
