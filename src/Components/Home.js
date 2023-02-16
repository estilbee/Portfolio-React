import React from 'react';
import header2 from '../images/header2.jpg';
import {Link} from 'react-router-dom';



function Home() {

    return (
        // <div>
        //     <ul className= "home-page" style = {{backgroundImage: `url(${header2})`}}>
        //         <li>
        //             <a className = "home-name">Olivia Daouphars</a>
        //             {/* add a class to change font color */}
        //         </li>
        //         <li>
        //             <a className = "description" >Web Developer.</a>
        //             {/* add a class to change font color */}
        //         </li>
        //         <li>
        //             <a className = "description" >Florist.</a>
        //             {/* add a class to change font color */}
        //         </li>
        //         <li>
        //             <a className = "description" >Artist.</a>
        //             {/* add a class to change font color */}
        //         </li>

        //     </ul>
        // </div>
        <div>
        <p id= "home" className= "home-page" style = {{backgroundImage: `url(${header2})`}}>
                <a className = "home-name">Olivia Daouphars      </a>
                {/* add a class to change font color */}
                <a className = "description" >Web Developer.</a>
                {/* add a class to change font color */}
                <a className = "description" >Florist.</a>
                {/* add a class to change font color */}
                <a className = "description" >Artist.</a>
                {/* add a class to change font color */}
        </p>
    </div>
    )
}

export default Home;