import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import home from './components/Home';
import about from './components/About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
    

        <HashRouter>
	        <div>
	            <Route path="/home" component={ home }/>
	            <Route path="/about" component={ about }/>
	        </div>
        </HashRouter>



      </div>
    );
  }
}

export default App;
