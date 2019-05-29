import React from 'react';
import logo from './dice.svg';
import './App.css';

const initialMessage = 'No queries have initiated';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {initialMessage}
        </p>
        <button className="button">Fetch results</button>
      </header>
    </div>
  );
}

export default App;
