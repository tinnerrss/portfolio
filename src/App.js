import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import LetsConnect from './components/LetsConnect';
import Nav from './components/Nav'
import './App.css';


function App() {
  return (
    <div className="app">
        <Nav />
        <Landing />
        <About />
        <Projects />
    </div>
  );
}

export default App;
