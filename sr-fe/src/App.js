import React, { Component } from 'react';
import './App.css';
import Navbar from './components/utility/navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="logo" src="../logo.png"></img>
        </div>


        <Navbar />


      </div>

    );
  }
}

export default App;
