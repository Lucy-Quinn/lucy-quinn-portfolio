import React from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
