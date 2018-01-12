import React, { Component } from 'react';
import './App.css';

import Courses from './components/Courses';
import Calendar from './components/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Courses />
        <Calendar />
      </div>
    );
  }
}

export default App;
