import React from 'react';
import Header from './components/Header/Header';
import { Examples } from './components/Examples/Examples';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Examples />
      </header>
    </div>
  );
}

export default App;
