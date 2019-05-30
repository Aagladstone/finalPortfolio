import React from "react"
import "./style.css";


function Navbar() {
    return(

<div className="Navbar">

<div className="pure-menu pure-menu-horizontal">
    <ul className="pure-menu-list">

        <li className="pure-menu-item pure-menu-allow-hover">
            <a href="/projects" id="menuLink1" class="pure-menu-link">Projects</a>
            {/* <ul className="pure-menu-children">
                <li className="pure-menu-item"><a href="#" class="pure-menu-link">Who's Calling Me</a></li>
                <li className="pure-menu-item"><a href="#" class="pure-menu-link">DateBook</a></li>
                <li className="pure-menu-item"><a href="#" class="pure-menu-link">Car Tracker</a></li>
            </ul> */}
        </li>
        <li className="pure-menu-item pure-menu-selected"><a href="/" class="pure-menu-link" id="name-centered">Aaron Gladstone</a></li>
        <li className="pure-menu-item pure-menu-allow-hover">
            <a href="/skills" id="menuLink1" class="pure-menu-link">Demonstration of Skills</a>
            {/* <ul className="pure-menu-children">
                <li className="pure-menu-item"><a href="#" class="pure-menu-link">Node: Liri</a></li>
                <li className="pure-menu-item"><a href="#" class="pure-menu-link">Express/Handlebars: Burger</a></li>
                <li className="pure-menu-item"><a href="#" class="pure-menu-link">API's: Gifhy App</a></li>
                <li className="pure-menu-item"><a href="#" class="pure-menu-link">Firebase: Train Tracker</a></li>
            </ul> */}
        </li>
        {/* <li className="pure-menu-item pure-menu-selected contactMe" ><a href="#" class="pure-menu-link contact" id="menuLink1">Contact Me</a></li> */}
    
    </ul>
</div>
</div>
)
}

export default Navbar;
