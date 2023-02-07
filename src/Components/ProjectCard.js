import React from 'react';


function Card(props) {
    
    return(
        <div>

        <div>
            {/* This is just code taken from bootstrap's website. Notice a few changes. First, we use 
            className instead of class in react. Second, inline styling takes in its own "prop", so it'll
            look different to what we've done in the past. */}
            <div className="card h-100" style={{width: '25rem'}} >
                {/* Here we start using the props we passed into this component. Notice that the keys in the prop object
                match exactly how we sent them from the Characters component (name, images, description) */}
                <img src={props.image} className="card-img-top" style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={props.name} />
                <div className="card-body">
                    {/* Again, more use of props */}
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>

            
        </div>
            project stuff will go here
        </div>
    )
}



export default Card;
