import React from 'react';
import Header from './components/Header/Header';
import { Examples } from './components/Examples/Examples';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Examples />
        <About />
        <Contact />
      </header>
    </div>
  );
}

export default App;
