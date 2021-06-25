import React, { useEffect, useState } from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
	appointmentRelation,
	detailAppointment,
	postAppointment,
} from "../../../redux/action/appointment";

export default function AppointmentDate() {
	const dispatch = useDispatch();

<<<<<<< Updated upstream
    const services = useSelector(state => state.services.services)
    console.log(services)
   
=======
	const services = useSelector((state) => state.services.services);
	console.log(services);
>>>>>>> Stashed changes

	let [fecha, setFecha] = useState({ fecha: "" });
	function onchange(args) {
		setAppointment({ ...appointment, date: `${args._d}` });
	}
	var yesterday = moment().subtract(1, "day");
	function valid(current) {
		return current.isAfter(yesterday);
	}

	const dateSelected = fecha.fecha.slice(0, 15);
	//console.log(dateSelected)

	useEffect(() => {
		totalAmmount();
	}, []);
	const [appointment, setAppointment] = useState({
		barberId: services.barber[0].id,
		clientId: 1, //traer del localstorage
		date: fecha.fecha,
		time: "08:00",
		status: "Pending",
		total: "",
		serviceBarberId: [],
	});
	console.log(appointment);
	const appointmentId = useSelector((state) => state);
	const [totalServices, setTotalServices] = useState("");
	const totalAmmount = () => {
		let kids;
		let haircut;
		let design;
		let ozon;
		let mask;
		let color;
		let beard;
		if (services.haircut[0]) {
			haircut = parseInt(services.haircut[0].serviceBarber.price);
		} else {
			haircut = 0;
		}
		if (services.kids[0]) {
			kids = parseInt(services.kids[0].serviceBarber.price);
		} else {
			kids = 0;
		}
		if (services.design[0]) {
			design = parseInt(services.design[0].serviceBarber.price);
		} else {
			design = 0;
		}
		if (services.ozon[0]) {
			ozon = parseInt(services.ozon[0].serviceBarber.price);
		} else {
			ozon = 0;
		}
		if (services.mask[0]) {
			mask = parseInt(services.mask[0].serviceBarber.price);
		} else {
			mask = 0;
		}
		if (services.color[0]) {
			color = parseInt(services.color[0].serviceBarber.price);
		} else {
			color = 0;
		}
		if (services.beard[0]) {
			beard = parseInt(services.beard[0].serviceBarber.price);
		} else {
			beard = 0;
		}
		let sum = kids + haircut + design + ozon + mask + color + beard;
		setAppointment({ ...appointment, total: sum });
		setTotalServices(sum);
	};

	const sendAppointment = () => {
		dispatch(
			postAppointment({
				barberId: appointment.barberId,
				clientId: 12,
				date: appointment.date,
				status: "Pending",
				total: 100,
				serviceBarberId: services.id,
				time: appointment.time,
			})
		);
		alert("Appoiment send");
		// window.location.href= "http://localhost:3000/clients/dashboard";
	};

	const goBack = () => {
		window.history.back();
	};

	return (
		<div>
			<div class="bg-gray-100 max-w-6xl mx-auto mt-20">
				<div class="container mx-auto my-5 p-5">
					<button
						onClick={() => goBack()}
						class="bg-blue-400 hover:bg-blue-600 border-b-2  text-white py-2 px-4 mx-4 mb-0 rounded-lg"
					>
						<svg
							className="transform rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M24 12l-12-9v5h-12v8h12v5l12-9z" />
						</svg>
					</button>
					<div class="md:flex no-wrap md:-mx-2 pt-8 ">
						{/* <!-- Left Side --> */}
						<div class="w-full md:w-3/12 md:mx-2">
							{/* <!-- Profile Card --> */}
							<div class="bg-white p-3 border-t-4 border-blue-400 font-semibold text-gray-900">
								<Datetime
									className="border-4 border-blue-400"
									input={false}
									isValidDate={valid}
									timeConstraints={{ hours: { min: 9, max: 22, step: 1 } }}
									timeFormat={false}
									onChange={onchange}
								/>
								<div className="text-lg">
									Choose a time:
									<select
										onChange={(e) =>
											setAppointment({ ...appointment, time: e.target.value })
										}
										className="ml-1 mt-2 text-md font-semibold text-gray-900 "
									>
										<option>08:00</option>
										<option>09:00</option>
										<option>10:00</option>
										<option>11:00</option>
										<option>12:00</option>
										<option>13:00</option>
										<option>14:00</option>
										<option>15:00</option>
										<option>16:00</option>
										<option>17:00</option>
										<option>18:00</option>
										<option>19:00</option>
										<option>20:00</option>
										<option>21:00</option>
									</select>
								</div>
							</div>
							{/* <!-- End of profile card --> */}
						</div>
						{/* <!-- Right Side --> */}
						<div class="w-full md:w-9/12 mx-2 h-64">
							{/* <!-- About Section --> */}
							<div class="bg-white p-3 shadow-sm rounded-sm border-t-4 border-blue-400">
								<div class="flex items-center space-x-2 border-b-2  w-auto border-blue-400 mb-4 font-semibold text-gray-900 leading-8">
									<span class="text-green-500 transform -rotate-180">
										<svg
											class="transform -rotate-45"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<path d="M12.026 14.116c-3.475 1.673-7.504 3.619-8.484 4.09-1.848.889-3.542-1.445-3.542-1.445l8.761-4.226 3.265 1.581zm7.93 6.884c-.686 0-1.393-.154-2.064-.479-1.943-.941-2.953-3.001-2.498-4.854.26-1.057-.296-1.201-1.145-1.612l-14.189-6.866s1.7-2.329 3.546-1.436c1.134.549 5.689 2.747 9.614 4.651l.985-.474c.85-.409 1.406-.552 1.149-1.609-.451-1.855.564-3.913 2.51-4.848.669-.321 1.373-.473 2.054-.473 2.311 0 4.045 1.696 4.045 3.801 0 1.582-.986 3.156-2.613 3.973-1.625.816-2.765.18-4.38.965l-.504.245.552.27c1.613.789 2.754.156 4.377.976 1.624.819 2.605 2.392 2.605 3.97 0 2.108-1.739 3.8-4.044 3.8zm-2.555-12.815c.489 1.022 1.876 1.378 3.092.793 1.217-.584 1.809-1.893 1.321-2.916-.489-1.022-1.876-1.379-3.093-.794s-1.808 1.894-1.32 2.917zm-3.643 3.625c0-.414-.335-.75-.75-.75-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75zm6.777 3.213c-1.215-.588-2.604-.236-3.095.786-.491 1.022.098 2.332 1.313 2.919 1.215.588 2.603.235 3.094-.787.492-1.021-.097-2.33-1.312-2.918z" />
										</svg>
									</span>
									<span class="tracking-wide">
										Your Appointment with Barber {services.barber[0].name}
									</span>
								</div>
								<div class="grid grid-cols-2 text-gray-700 font-semibold">
									<div>
										Services:{" "}
										{services.haircut.length !== 0 ? (
											<div>
												Haircut: {services.haircut[0].name} ($
												{services.haircut[0].serviceBarber.price})
											</div>
										) : (
											""
										)}
										{services.kids.length !== 0 ? (
											<div>
												Kids: {services.kids[0].name} ($
												{services.kids[0].serviceBarber.price})
											</div>
										) : (
											""
										)}
										{services.color.length !== 0 ? (
											<div>
												{services.color[0].name} ($
												{services.color[0].serviceBarber.price})
											</div>
										) : (
											""
										)}
										{services.mask.length !== 0 ? (
											<div>
												{services.mask[0].name} ($
												{services.mask[0].serviceBarber.price})
											</div>
										) : (
											""
										)}
										{services.ozon.length !== 0 ? (
											<div>
												{services.ozon[0].name} ($
												{services.ozon[0].serviceBarber.price})
											</div>
										) : (
											""
										)}
										{services.design.length !== 0 ? (
											<div>
												{services.design[0].name} ($
												{services.design[0].serviceBarber.price})
											</div>
										) : (
											""
										)}
										{services.beard.length !== 0 ? (
											<div>
												{services.beard[0].name} ($
												{services.beard[0].serviceBarber.price})
											</div>
										) : (
											""
										)}
										<br></br>
										Date: {appointment.date && appointment.date.slice(0, 15)}
										<br></br>
										Time: {appointment.time}
										<br></br>
										Total: $ {totalServices}
										<br></br>
										<h5 className="text-sm">
											(Notice: You will pay for your service once the barber
											finishes)
										</h5>
									</div>
									<div class="flex text-gray-700 justify-center font-semibold">
										<img
											className="border-4 border-blue-400"
											src={services.barber[0].image}
											width="200px"
										></img>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="bg-white p-3 shadow-sm mt-10 rounded-sm border-t-4 border-blue-400">
						<div class="flex justify-center space-x-2 font-semibold text-gray-900 leading-8">
							<button
								disabled={appointment.date === ""}
								onClick={() => {
									sendAppointment();
								}}
								className="rounded px-6 py-2 font-semibold text-gray-900 bg-blue-400"
							>
								Confirm Appointment
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
