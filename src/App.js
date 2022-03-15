import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  let [ counter, changeCounter ] = useState(1);
  window.changeCounter = changeCounter;
  window.counter = counter;
  console.log(counter);
  console.log(changeCounter);
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
