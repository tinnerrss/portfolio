import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Projects2 from './components/Projects2';
import Connect from './components/Connect';
import Nav from './components/Nav'
import './App.css';


function App() {
  return (
    <div className="app">
        <Nav />
        <Landing />
        <About />
        {/* <Projects /> */}
        <Projects2 />
        <Connect />
    </div>
  );
}

export default App;
