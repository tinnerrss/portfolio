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
                    <a href="#projects2">PROJECTS</a>
                </li> 
                <li>
                    <a href="https://drive.google.com/file/d/1Zsl5USNGq1Uw3F5SHUTMfxfzPAP7stgO/view?usp=sharing" target="_blank" rel="noopener">RESUME</a>
                </li>
                <li>
                    <a href="#connect">GET IN TOUCH</a>
                </li>
            </div>
            <div className="dropdown">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" className="menuicon" />
                <div className="dropdown-content">

                    <li>
                        <a href="#about">ABOUT ME </a>
                    </li> 
                    <li>
                        <a href="#projects2">PROJECTS</a>
                    </li> 
                    <li>
                        <a href="assets/Resume.pdf" target="_blank">RESUME</a>
                    </li>
                    <li>
                        <a href="#connect">GET IN TOUCH</a>
                    </li>
                </div>
            </div>
        </div>
        
    )
}

export default Nav;