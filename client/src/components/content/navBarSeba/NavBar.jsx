import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = ()=>{
    return (
        <nav className="navBarContainer">
            <div className="logoNav">
                <img src="https://html.dynamiclayers.xyz/dl/barbershop/img/logo.png" alt="" />
            </div>
            <ul className="ulNav">
                <li><Link to="/">HOME</Link></li>
                <li><Link>ABOUT</Link></li>
                <li><Link to="/catalog">SERVICE</Link></li>
                <li><Link>LOG IN /</Link> <Link>REGISTER</Link></li>
                <li><Link>CONTACT</Link></li>
                <button>MAKE APPOINMENT</button>
            </ul>
        </nav>
    )
}

export default NavBar;