import React from 'react';
import header2 from '../images/header2.jpg';
import {Link, NavLink} from 'react-router-dom';
import resume from '../images/Resume2023.pdf';


function Navbar() {

    const highlightLink = {
        color: "rgb(156, 215, 111)",
      };

    return (
        <div>
    
         <nav style = {{backgroundImage: `url(${header2})`}} >
            <ul>
                {/* <li>
                    <a className = "nav-name" href="#">Olivia Daouphars</a>
                </li> */}
                <li>
                    <NavLink to = "/Portfolio-React"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Home</NavLink>
                    {/* trying out the Link to see if that lets us do the active link color */}
                    {/* <a href="/about"> About Me </a> */}
                </li>
                <li>
                    <NavLink to = "/Portfolio-React/about"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>About Me</NavLink>
                    {/* trying out the Link to see if that lets us do the active link color */}
                    {/* <a href="/about"> About Me </a> */}
                </li>
                <li>
                    <NavLink to = "/Portfolio-React/portfolio"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Portfolio</NavLink>
                    {/* <a href="/portfolio"> Portfolio</a> */}
                </li>
                {/* <li>
                    <NavLink to = "/Portfolio-React/contact"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Contact</NavLink>
                </li> */}
                <li>
                    {/* <Link to = {flowerPortfolio} download>Resume</Link> */}
                    <a href = {resume} download> Resume</a>
                </li>


            </ul>
         </nav>

        </div>
    )
}

export default Navbar;