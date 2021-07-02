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
// import style from './barberDashboard.module.css'

const ClientDesk = () => {

	const history = useHistory()
	const dispatch = useDispatch();
	const idUser = jwtDecode(localStorage.getItem("clientToken"));
	useEffect(() => {
		dispatch(getCartsByUser(idUser.id));
	}, [dispatch]);
	const allAppointments = useSelector((state) => state.clients.appointments);

	const buttonStyle =
		"bg-secondary hover:bg-primary text-white py-1 px-0 mx-0 mb-0 w-full uppercase font-bold py-3";
	const buttonSelected = "bg-primary text-white py-1 px-0 mx-0 mb-0 w-full uppercase font-bold py-3";
	const filterButtonStyle =
		"bg-secondary hover:bg-primary text-white py-2 px-5 mx-2 mt-3 mb-3";
	const filterSelected = "bg-primary text-white py-2 px-5 mx-2 mt-3 mb-3";
	const auth = useSelector((state) => state.auth);
	const [buttonState, setButtonState] = useState({
		menu: "Dashboard",
		filters: "HAIRCUT",
	});
	const handleClick = (e) => {
		if (!e.target.name) e.preventDefault();
		else {
			if (e.target.name === "menu")
				setButtonState({ ...buttonState, [e.target.name]: e.target.value });
			else setButtonState({ ...buttonState, [e.target.name]: e.target.id });
		}
	};
	return (
		<div className="flex h-full flex-column font-lato">
			<div className={`w-1/6 bg-primary`} onClick={handleClick}>
				<button class="bg-secondary text-white text-base m-4 p-3 px-3 font-bold">
					<Link to="/catalog">MAKE APPOINTMENT </Link>
				</button>
				
				<div class="mt-4">
					<input
						type="button"
						value="Dashboard"
						name="menu"
						className={
							buttonState.menu === "Dashboard" ? buttonSelected : buttonStyle
						}
					/>
				</div>
				<div>
					<input
						type="button"
						value="Appointments"
						name="menu"
						className={
							buttonState.menu === "Appointments" ? buttonSelected : buttonStyle
						}
					/>
				</div>
				<div>
					<input
						type="button"
						value="Wishlist"
						name="menu"
						className={
							buttonState.menu === "Wishlist" ? buttonSelected : buttonStyle
						}
					/>
				</div>
				<div className="w-1/6 absolute bottom-14">
					<input
						type="button"
						value="Account"
						name="menu"
						className={
							buttonState.menu === "Account" ? buttonSelected : buttonStyle
						}
					/>
				</div>
			</div>
			<div className="w-5/6">
				{buttonState.menu === "Dashboard" && (
					<ClientData allAppointments={allAppointments} />
				)}
				{buttonState.menu === "Appointments" && (
					<div className="grid">
						<AppointmentsDash allAppointments={allAppointments} />
					</div>
				)}
				{buttonState.menu === "Wishlist" && (
					<div>
						<WishlistTab />
					</div>
				)}

				{buttonState.menu === "Account" && (
					<div>
						<ClientConfig />
					</div>
				)}
			</div>
		
		</div>
	);
};
export default ClientDesk;
