import React from 'react';

function About() {

    return (
        <div>
           
                {/* <div className="card" style="width: 18rem;">
                    <img src="./images/fruitfield.jpg" class="card-img-top" alt="profilepic" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>

                </div> */}
                {/* why did this break the code?^^ */}

                <div id="About" className="aboutme">
                    <p className="body">
                        <h2 id="about-me-h2">About Me</h2>
                        Olivia Daouphars is a floral designer turned software engineer.
                        Currently living in Fairmount, Philadelphia, Olivia spends some of her free
                        time at the Philadelphia Museum of Art and enjoys drawing at local coffee shops.
                        Olivia is an imaginative thinker who is always seeking out new ways to learn.
                        She found herself being pulled towards the coding world and is excited by
                        the industry's ever expanding nature.
                    </p>
                </div>

           

        </div>
    )
}

export default About;