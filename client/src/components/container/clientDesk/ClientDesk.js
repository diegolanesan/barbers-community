import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import BarberServicesDashboard from "./clientDashboardServices/ClientServicesDashboard";
import { getAllAppointments } from "../../../redux/action/clients";
import { getCartsByUser } from "../../../redux/action/cart";
import AppointmentsDash from "./appointments/Appointments.js";
import ClientData from "./ClientData";
import ClientConfig from "./config/Config.js";
import WishlistTab from "./wishList/WishlistTab";
import jwtDecode from "jwt-decode";
import { signOut } from "../../../redux/action/auth";
import Error from "../../content/error/Error";
// import "./clientDesk.css";
// import style from './barberDashboard.module.css'
const ClientDesk = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const idUser = localStorage.getItem("clientToken") ? jwtDecode(localStorage.getItem("clientToken")) : false;    useEffect(() => {
        dispatch(getCartsByUser(idUser.id));
    }, [dispatch]);
    const allAppointments = useSelector((state) => state.clients.appointments);
    console.log(idUser)
    const [option, setOption] = React.useState({
        DASHBOARD: true
    })
    console.log(option, "aaaaaaaaa")
    const handleChange = (v) => {
        const value = v.target.innerText;
        setOption({
            [value]: true
        })
    };
    if (idUser) {   
        return (
            <div className="flex h-full flex-column font-lato">
                <div className="cntContainer">
                    <input type="checkbox" id="check" className="checkbox" />
                    <label className="menu" for="check"><svg xmlns="http://www.w3.org/2000/svg" className="mt-2 ml-2" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg></label>
                    <div className="left-panel">
                        <ul className="listOptions" onClick={handleChange}>
                            <button class="bg-secondary text-white text-base m-4 p-3 px-3 font-bold">
                            <Link to="/catalog">MAKE APPOINTMENT </Link>
                            </button>
                            <li className={option.DASHBOARD ? "active" : ""}>DASHBOARD</li>
                            <li className={option.WISHLIST ? "active" : ""}>WISHLIST</li>
                            <li className={option.CONFIG ? "active" : ""}>CONFIG</li>
                        </ul>
                    </div>
                    <div className="contentList">
                            {option.DASHBOARD && (
                                <ClientData />
                            )}
                            {option.WISHLIST && (
                                <WishlistTab />
                            )}
                            {option.CONFIG && (
                                <ClientConfig />
                            )}
                    </div>
                </div>      
        </div>
        );
    } else {
        return (
            <Error />
        )
        }
};
export default ClientDesk;