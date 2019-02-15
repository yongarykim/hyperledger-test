import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SimpleTest from './components/SimpleTest'
import './App.css';

class App extends Component {
  render() {
    return (

      <div className ="App">
          <Router>
              <div>
                  <Route path="/simple-test" component={SimpleTest}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
