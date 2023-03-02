import React from 'react';
// import header2 from '../images/header2.jpg';
import {Helmet} from 'react-helmet'

function Card(props) {
    
    return(

        <div>
        {/* <p id="portfolio-background" style = {{backgroundImage: `url(${header2})`}}></p> */}

         <div className = "card-div">
            <div className="imagewrapper card h-100" style = {props.imageSize}>
                <a href = {props.link} ><img src={props.image} className="card-img-top" style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={props.name} /> 
                    <img src = {props.image2} alt= "projectpreview" className = "box bottom"></img>
                </a>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
            <div className="application">
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            ...
        </div>

            
         </div>
    </div>
    )
}



export default Card;
