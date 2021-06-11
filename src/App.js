import React from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import ThemeContextProvider from './contexts/ThemeContext';


function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Education />
        <Contact />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
