import React from 'react';


function Card(props) {
    
    return(
        <div>

        <div>
            <div className="card h-100" style={{width: '25rem'}} >
                <a href = {props.link} ><img src={props.image} className="card-img-top" style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={props.name} /></a>
                <div className="card-body">
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
