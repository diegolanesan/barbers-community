import React from "react";
import "./NavBar.css";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../../redux/action/auth";
import { useDispatch } from "react-redux";
const NavBarBarber = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = ()=>{
        dispatch(signOut(history))
    }
    return (
        <nav className="navBarContainer">
            <div className="logoNav">
                <Link to="/"><img src="https://html.dynamiclayers.xyz/dl/barbershop/img/logo.png" alt="" /></Link>
            </div>
            <ul className="ulNav">
                <li><Link>ABOUT</Link></li>
                <li onClick={handleClick} style={{cursor:"pointer"}}>LOG OUT</li>
                <li><Link to="/barbers/dashboard">DASHBOARD</Link></li>
                <button>MAKE APPOINMENT</button>
            </ul>
        </nav>
    )
}

export default NavBarBarber;