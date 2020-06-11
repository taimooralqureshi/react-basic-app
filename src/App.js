import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Statement from './Statement';

function App() {
  return (
    <div className="App">
      <Greet name='Taimoor Qureshi' />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Basic App by Taimoor Qureshi</p>
        <Statement statement="My work, My voice!"/>
      </header>
    </div>
  );
}

export default App;
