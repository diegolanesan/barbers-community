import React from "react";
import "./NavBar.css";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../../redux/action/auth";
import { useDispatch } from "react-redux"
import jwtDecode from "jwt-decode";
const NavBar = ()=>{
    const clientToken = localStorage.getItem("clientToken") || false
	const barberToken = localStorage.getItem("barberToken") || false
	const admin = clientToken ? jwtDecode(clientToken) : false
    const dispatch = useDispatch();
    const history = useHistory(); 
    const handleClick = ()=>{
        dispatch(signOut(history))
     }
    const [menu, setMenu] = React.useState({
        active: false
    });
    const handleClickOne =()=>{
        if(!menu.active){
            setMenu({
                active: true
            })
        }else{
            setMenu({
                active: false
            })
        }
    }

    if(admin.rol === "admin"){
        return(
        <nav className="navBarContainer">
            <div className="logoNav">
                <Link to="/"><img src="https://html.dynamiclayers.xyz/dl/barbershop/img/logo.png" alt="" /></Link>
            </div>
            <ul className={!menu.active ? ("ulNav"):("ulActive")}>
                <li onClick={handleClick} style={{cursor:"pointer"}}>LOG OUT</li>
                <li><Link to="/admin/dashboard">DASHBOARD</Link></li>
            </ul>
            <i class={menu.active ?("fas fa-times"):("fas fa-bars")} onClick={handleClickOne}></i>
        </nav>
        )
    }else if (admin.rol === "client" || admin.rol !== "admin" && admin){
        return (
         <nav className="navBarContainer">
            <div className="logoNav">
                <Link to="/"><img src="https://html.dynamiclayers.xyz/dl/barbershop/img/logo.png" alt="" /></Link>
            </div>
            <ul className={!menu.active ? ("ulNav"):("ulActive")}>
                <li><Link to="/catalog">SERVICE</Link></li>
                <li onClick={handleClick} style={{cursor:"pointer"}}>LOG OUT</li>
                <li><Link to="/clients/dashboard">DASHBOARD</Link></li>
            </ul>
            <i class={menu.active ?("fas fa-times"):("fas fa-bars")} onClick={handleClickOne}></i>
        </nav>
        )
    }else if (barberToken){
        return (
      <nav className="navBarContainer">
            <div className="logoNav">
                <Link to="/"><img src="https://html.dynamiclayers.xyz/dl/barbershop/img/logo.png" alt="" /></Link>
            </div>
            <ul className={!menu.active ? ("ulNav"):("ulActive")}>
                <li onClick={handleClick} style={{cursor:"pointer"}}>LOG OUT</li>
                <li><Link to="/barbers/dashboard">DASHBOARD</Link></li>
            </ul>
            <i class={menu.active ?("fas fa-times"):("fas fa-bars")} onClick={handleClickOne}></i>
        </nav>
        )
    }else{
        return (
         <nav className="navBarContainer">
         <div className="logoNav">
             <Link to="/"><img src="https://html.dynamiclayers.xyz/dl/barbershop/img/logo.png" alt="" /></Link>
         </div>
         <ul className={!menu.active ? ("ulNav"):("ulActive")}>
             <li><Link to="/catalog">SERVICE</Link></li>
             <li><Link to="/loginBarbers">LOG IN BARBER</Link></li>
             <li><Link  to="/loginClients">LOG IN CLIENT</Link></li>
         </ul>
         <i class={menu.active ?("fas fa-times"):("fas fa-bars")} onClick={handleClickOne}></i>
     </nav>
        )
    }
}

export default NavBar;