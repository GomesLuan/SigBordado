import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="header">Header Fixo</header>
      <div className="container">
        <div className="column column-left"></div>
        <div className="column column-right"></div>
      </div>
    </div>
  );
}

export default App;
