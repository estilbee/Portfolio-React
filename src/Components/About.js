import React from 'react';
import olivia from '../images/olivia.jpg'

function About() {

    return (
        <div id= "about" className = "body">
            <h2 id="about-me-h2">About Me</h2>
                <p>
                    Olivia Daouphars is a floral designer turned web developer.
                    Currently living in Fairmount, Philadelphia, Olivia spends some of her free
                    time at the Philadelphia Museum of Art and enjoys drawing at local coffee shops.
                    Olivia is an imaginative thinker who is always seeking out new ways to learn.
                    She found herself being pulled towards the coding world and is excited by
                    the industry's ever expanding nature. Olivia studied at the University of Pennsylvanias's full stack coding bootcamp.
                </p>
                <img className="profile-photo" src={require("../images/olivia.jpg")} alt={"Olivia Daouphars"}/>
        </div>
    )
}

export default About;