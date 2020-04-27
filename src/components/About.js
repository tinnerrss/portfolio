import React from 'react';

function About() {
    return (
        <div id="about">
           
                <div className="me">
                    <div className="imgbox">
                        <img src="/squareme.jpg" className="mepic"/>
                    </div>
                    <div className="mecontent">
                        <h3 className="head">
                        I'm a front end developer who is motivated by working in collaborative teams or creative environments.</h3>
                        <p>
                            Continually learning and currently mastering in-demand technical skills, including Javascript, React, and Python. My previous career as the owner and operator of a top 10 profit-generating salon in Seattle demonstrates my ability to maintain strong customer relationships while learning efficiently and independently. 
                        </p>
                    </div>
                    <div className="icons">
                        <a href=""><img src="/email.png" className="contacticons"/></a>
                        <a href="https://www.linkedin.com/in/thinhthoang/" target="_blank"><img src="/linkedin.png" className="contacticons"/></a>
                        <a href="https://github.com/tinnerrss" target="_blank"><img src="/github.png" className="contacticons"/></a>
                        <a href="#open-modal"><img src="/resume.png" className="contacticons"/></a>
                    </div> 
                    <div id="open-modal" className="modal-window">
                        <div>
                            <a href="#about" title="Close" class="modal-close">Close</a>
                            <img src="/prettyresume.png" className="resumepic"/>
                            </div>
                        </div>
                    </div>
                <div className="skills">
                    <div className="skillboxes">
                        <div className="skillhead">
                            <h3>
                                Front End
                            </h3>
                        </div>
                        <div className="skillList0">
                            <div className="skillcolumns">
                                <li>
                                    HTML
                                </li>
                                <li>
                                    CSS / SCSS
                                </li>
                                <li>
                                    JavaScript  
                                </li>
                                <li>
                                    React.js
                                </li>
                            </div>
                            <div className="skillcolumns">
                                <li>
                                    JQuery
                                </li>
                                <li>
                                    Embedded Javascript (EJS)
                                </li>
                                <li>
                                    Bootstrap
                                </li>
                                <li>
                                    Material UI  
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="skillboxes">
                        <div className="skillhead">
                            <h3>Back End
                            </h3>
                        </div>
                        <div className="skillList">
                            <li>
                                Node.js
                            </li>
                            <li>
                                Express
                            </li>
                            <li>
                                PostgresSQL  
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                Python
                            </li>
                        </div>
                    </div>
                </div>
           
        </div>
    )
}

export default About;