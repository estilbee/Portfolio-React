import React from 'react';
import header2 from '../images/header2.jpg';
import {Link} from 'react-router-dom';
import flowerPortfolio from '../images/flowerportfolio2021.docx'


function Navbar() {

    const highlightLink = {
        fontWeight: "bold",
        color: "white"
      };

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
                    {/* trying out the Link to see if that lets us do the active link color */}
                    {/* <a href="/about"> About Me </a> */}
                </li>
                <li>
                    <Link to = "/portfolio">Portfolio</Link>
                    {/* <a href="/portfolio"> Portfolio</a> */}
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                    {/* <a href="/contact"> Contact</a> */}
                </li>
                <li>
                    {/* <Link to = {flowerPortfolio} download>Resume</Link> */}
                    <a href = {flowerPortfolio} download> Resume</a>
                </li>


            </ul>
         </nav>

        </div>
    )
}

export default Navbar;