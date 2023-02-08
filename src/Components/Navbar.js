import React from 'react';
import header2 from '../images/header2.jpg';
import {Link} from 'react-router-dom';

function Navbar() {


    return (
        <div>
    
         <nav style = {{backgroundImage: `url(${header2})`}} >
            <ul>
                <li>
                    <a className = "nav-name" href="#">Olivia Daouphars</a>
                    {/* add a class to change font color */}
                </li>
                <li>
                    <Link to = "/about">About Me</Link>
                    {/* <a href="/about"> About Me </a> */}
                </li>
                <li>
                    <a href="/portfolio"> Portfolio</a>
                </li>
                <li>
                    <a href="/contact"> Contact</a>
                </li>
                <li>
                    <a href="/resume"> Resume</a>
                </li>


            </ul>
         </nav>

        </div>
    )
}

export default Navbar;