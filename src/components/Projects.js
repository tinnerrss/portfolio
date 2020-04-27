import React from 'react';

function Projects() {
    return (
        <div id="projects">
                <div className="projboxes">
                        <div className="projectwrapper">
                            <div className="projtext">
                                <h1>Vanity</h1>
                                <p>Javascript | CSS | Express | EJS | PostgreSQL </p>
                            </div>
                            <img src="/vanity.png" className="projimg"/>
                        </div>
                        <div className="projectwrapper">
                            <div className="projtext">
                                <h1>Closet</h1>
                                <p>Python | CSS | React | Cloudinary </p>
                            </div>
                            <img src="/closet.png" className="projimg"/>
                        </div>
            
                   
                        <div className="projectwrapper">
                            <div className="projtext">
                                <h1>EatVite</h1>
                                <p>Javascript | CSS | React | MongoDB </p>
                            </div>
                            <img src="/eatvite2.png" className="projimg"/>
                        </div>
                        <div className="projectwrapper">
                            <div className="projtext">
                                <h1>TIN & LASH</h1>
                                <p>Javascript | CSS | MindBody </p>
                            </div>
                            <img src="/tinlash.png" className="projimg"/>
                        </div>
                  
                </div>
        </div>
    )
}

export default Projects;