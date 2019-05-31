import React from "react"
import "./style.css";


function Navbar() {
    return(

<div className="Navbar">

<div className="pure-menu pure-menu-horizontal">
    <ul className="pure-menu-list">

        <li className="pure-menu-item pure-menu-allow-hover">
            <a href="/projects" id="menuLink1" class="pure-menu-link">Projects</a>
        </li>
        <li className="pure-menu-item pure-menu-selected"><a href="/" class="pure-menu-link" id="name-centered">Aaron Gladstone</a></li>
        <li className="pure-menu-item pure-menu-allow-hover">
            <a href="/skills" id="menuLink1" class="pure-menu-link">Demonstration of Skills</a>
        </li>    
    </ul>
</div>
</div>
)
}

export default Navbar;
