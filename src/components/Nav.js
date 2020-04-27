import React from 'react';

function Nav() {
    return (
        <div className="nav">
            <div className="logo">
                <img src="/favicon3.png" className="logo"/>
            </div>
            <div className="links">
                <li>
                    <a href="#about">ABOUT ME </a>
                </li> 
                <li>
                    <a href="#projects">PROJECTS</a>
                </li> 
                <li>
                    <a href="#resume">RESUME</a>
                </li>
                <li>
                    <a href="#contact">GET IN TOUCH</a>
                </li>
            </div>
        </div>
    )
}

export default Nav;