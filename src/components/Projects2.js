import React from 'react';

function Projects2() {
    return(
        <div id="projects2">
            <div className="projboxes">
                    <div className="projwrapper">
                        <div className="vanity">
                        </div>
                        <div className="deets">
                            <div className="projtext">
                                <h1>Vanity</h1>
                                <p className="skills">Javascript | CSS | Express | EJS | PostgreSQL </p>
                                <p>A web app that calls to a makeup API that allows users to search through makeup, save it to their profile, and directs them to the purchasing site when they're ready to buy a product.</p>
                                <i>(Hover Over Image)</i>
                            </div>
                            <div className="links">
                                <a href="https://github.com/tinnerrss/vanity">GITHUB</a><a href="https://vanity-express-29.herokuapp.com/">WEBSITE</a>
                            </div>
                        </div>  
                    </div>
                    <div className="projwrapper">
                        <div className="closet">
                        </div>
                        <div className="deets">
                            <div className="projtext">
                                <h1>Closet</h1>
                                <p className="skills">Python | CSS | React | Cloudinary </p>
                                <p>What’s more frustrating than wanting to go eat with your friends but no one can decide on where to eat? Imagine being able to send an “EatVite” to your friends and never having to wonder where to eat again.</p>
                                <i>(Hover Over Image)</i>
                            </div>
                            <div className="links">
                                <a href="https://github.com/tinnerrss/closet">GITHUB</a>
                            </div>
                        </div>
                    </div>
                    <div className="projwrapper">
                        <div className="eatvite">
                        </div>
                        <div className="deets">
                            <div className="projtext">
                                <h1>EatVite</h1>
                                <p className="skills">Javascript | CSS | React | MongoDB </p>
                                <p>App allowing users to upload photos of items in their closet so they can know what’s clean and readily available and what’s not, taking away that extra hassle of deciding what to wear in the morning.</p>
                                <i>(Hover Over Image)</i>
                            </div>
                            <div className="links">
                                <a href="https://github.com/tinnerrss/eatvite">GITHUB</a><a href="https://eatvite.herokuapp.com/">WEBSITE</a>
                            </div>
                        </div>
                    </div>
                    <div className="projwrapper">
                        <div className="tinlash">
                        </div>
                        <div className="deets">
                            <div className="projtext">
                                <h1>TIN & LASH</h1>
                                <p>Javascript | CSS | MindBody </p>
                                <p className="skills">Appointment booking web app that allows clients to check prices, see availability, and schedule appointments through MindBody.</p>
                                <i>(Hover Over Image)</i>
                            </div>
                            <div className="links">
                                <a href="www.tinlash.com">WEBSITE</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Projects2;