import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BarberServicesDashboard from "./clientDashboardServices/ClientServicesDashboard";
import { getAllAppointments } from "../../../redux/action/clients";
import { getCartsByUser } from "../../../redux/action/cart";
import AppointmentsDash from "./appointments/Appointments.js";
import ClientData from "./ClientData";
import ClientConfig from "./config/Config.js";
import jwtDecode from "jwt-decode";
// import style from './barberDashboard.module.css'
const ClientDesk = () => {
	const dispatch = useDispatch();
	const idUser = jwtDecode(localStorage.getItem("clientToken"));
	useEffect(() => {
		dispatch(getCartsByUser(idUser.id));
	}, [dispatch]);
	const allAppointments = useSelector((state) => state.clients.appointments);

	const buttonStyle =
		"bg-blue-400 hover:bg-blue-600 text-white py-1 px-0 mx-0 mb-0 w-full";
	const buttonSelected = "bg-blue-800 text-white py-1 px-0 mx-0 mb-0 w-full";
	const filterButtonStyle =
		"bg-blue-400 hover:bg-blue-600 text-white py-2 px-5 mx-2 mt-3 mb-3";
	const filterSelected = "bg-blue-800 text-white py-2 px-5 mx-2 mt-3 mb-3";
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
		<div className="flex h-full ">
			<div className={`w-1/6 bg-gray-200`} onClick={handleClick}>
				<div>
					<button class="w-5/6 center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						<Link to="/catalog">Schedule an appointment</Link>
					</button>
				</div>
				<div>
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
						value="Invoices"
						name="menu"
						className={
							buttonState.menu === "Invoices" ? buttonSelected : buttonStyle
						}
					/>
				</div>
				<div>
					<input
						type="button"
						value="Whislist"
						name="menu"
						className={
							buttonState.menu === "Whislist" ? buttonSelected : buttonStyle
						}
					/>
				</div>
				<div className="w-1/6 absolute bottom-2">
					<input
						type="button"
						value="Config"
						name="menu"
						className={
							buttonState.menu === "Config" ? buttonSelected : buttonStyle
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
				{buttonState.menu === "Config" && (
					<div>
						<ClientConfig />
					</div>
				)}
			</div>
		</div>
	);
};
export default ClientDesk;
