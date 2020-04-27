import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Nav from './components/Nav'
import './App.css';


function App() {
  return (
    <div className="app">
        <Nav />
        <Landing />
        <About />
        <Projects />
        <Connect />
    </div>
  );
}

export default App;
