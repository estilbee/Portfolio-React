import React from 'react';
import olivia from '../images/olivia.jpg'

function About() {

    return (
        <div id= "about" className = "body">
            <img className="profile-photo" src={require("../images/olivia.jpg")} alt={"Olivia Daouphars"}/>
                <p>
                <h2 id="about-me-h2">About Me</h2>
                    Olivia Daouphars is a floral designer turned web developer. As an imaginative thinker who is always seeking out new ways to learn, she found herself being pulled towards the coding world and is excited by
                    the industry's ever expanding nature. Olivia studied at the University of Pennsylvanias's full stack coding bootcamp. Currently living in Fairmount, Philadelphia, she enjoys spending her free
                    time at the Philadelphia Museum of Art, rollerblading down Kelly Drive, and drawing at local coffee shops.
                </p>
        </div>
    )
}

export default About;