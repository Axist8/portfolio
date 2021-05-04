import React from 'react';
import Header from './components/Header/Header';
import { Examples } from './components/Examples/Examples';
import { About } from './components/About/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Examples />
        <About />
      </header>
    </div>
  );
}

export default App;
