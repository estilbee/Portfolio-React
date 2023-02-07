import React from 'react';

function Navbar() {


    return (
        <div>
         <nav  className="navbar bg-dark" data-bs-theme="dark" >
            <ul>
                <li>
                    <a className="navbar-brand" href="#">Olivia Daouphars</a>
                </li>
                <li>
                    <a href="#About"> About Me </a>
                </li>
                <li>
                    <a href="#Portfolio"> Portfolio</a>
                </li>
                <li>
                    <a href="#Contact"> Contact</a>
                </li>
                <li>
                    <a href="#Resume"> Resume</a>
                </li>


            </ul>
         </nav>

        </div>
    )
}

export default Navbar;