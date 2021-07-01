import { React, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { barberDetail } from "../../../redux/action/barberDetail";
import { getBarbers } from "../../../redux/action/barbers";
import { addToAppointment } from "../../../redux/action/services";
import "./BarberDetail.modules.css";
import BarberDetailServices from "./BarberDetailServices.jsx";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";
import StarRatingComponent from "react-star-rating-component";
import { getAppointmentByBarber } from "../../../redux/action/appointment";
import { getBarberReviews } from "../../../redux/action/reviews";
import { getCartsByBarberId } from "../../../redux/action/cart";
import jwtDecode from "jwt-decode";

function BarberDetail(props) {

	const dispatch = useDispatch();
	
	const resp = useSelector((state) => state.barberDetail.resp);
	const reviews = useSelector((state) => state.reviews.barberReviews)
	const cart = useSelector((state) => state.cart.barberAppointments)
    const token = localStorage.getItem("clientToken") ? jwtDecode(localStorage.getItem("clientToken")) : null;
	console.log(token)
	const id = props.match.params.id;


	
	useEffect(() => {
		dispatch(barberDetail(id));
		dispatch(getBarbers());
		dispatch(getAppointmentByBarber(id));
		dispatch(getBarberReviews(id))
		dispatch(getCartsByBarberId(id))
	}, []);

	const buttonStyle =
		"bg-blue-400 hover:bg-blue-600 text-white py-1 px-0 mx-0 mb-0 w-full";
	const buttonSelected = "bg-blue-800 text-white py-1 px-0 mx-0 mb-0 w-full";
	const filterButtonStyle =
		"bg-blue-400 hover:bg-blue-600 text-white py-2 px-5 mx-2 mt-3 mb-3";
	const filterSelected = "bg-blue-800 text-white py-2 px-5 mx-2 mt-3 mb-3";

	const [boton, setBoton] = useState({
		menu: "Dashboard",
		filters: "HAIRCUT",
	});

	const handleClick = (e) => {
		if (!e.target.name) e.preventDefault();
		else {
			if (e.target.name === "menu")
				setBoton({ [e.target.name]: e.target.value });
			else setBoton({ [e.target.name]: e.target.id });
		}
	};

	let [fecha, setFecha] = useState({ fecha: "" })
	function onchange(args) { setAppointment({ ...appointment, date: `${args._d}` }) }
	var yesterday = moment().subtract(1, "day");
	function valid(current) {
		return current.isAfter(yesterday);
	}
	
	const [appointment, setAppointment] = useState({
		barberId: "",
		clientId: 1, //traer del localstorage
		date: fecha.fecha,
		time: "08:00",
		status: "Pending",
		total: "",
		serviceBarberId: []
	})
	
	// let rating = 0
	// const ratingBarber = () => {
	// 	reviews.map(e => {
	// 		e.rating += rating
	// 		rating = rating / e.length + 1 
	// 	})
	// }
	const [average, setAverage] = useState(0)
	const averageRating = () => {
    	let sum = 0;
    		if (reviews && reviews.length > 15) {
      			for (var i = 0; i < 15; i++) {
        			sum = sum + reviews[i].rating;
      			}
      			sum = sum / reviews.length;
      			setAverage(sum);
		}
		if (reviews && reviews.length > 0) {
      			for (var i = 0; i < reviews.length; i++) {
        			sum = sum + reviews[i].rating;
      			}
      			sum = sum / reviews.length;
      			setAverage(sum);
    }
	};
	useEffect(() => {
		averageRating()
	})
	console.log(average)
	let address = ""
	if (resp && resp.city) {
		address = resp.address + " " + resp.number + " "  + resp.city + " "  + resp.state + " " + resp.country  
		address = encodeURIComponent(address.trim())
		console.log(address)
	}
	return (
		<div>
			<div class="bg-gray-100 max-w-6xl mx-auto my-20">
				{!resp ? (
					<div class="loader"></div>
				) : (
					<div class="container mx-auto my-5 p-5">
						<a href="http://localhost:3000/catalog">
							<button class="bg-blue-400 hover:bg-blue-600 border-b-2 text-white py-1 px-2 mx-10 mb-0 rounded-lg">
								Go back to Barbers
							</button>
						</a>
							<div class="md:flex no-wrap md:-mx-2 pt-8 pb-32 ">
								<div class="w-full md:w-3/12 md:mx-2">
								{/* <!-- Profile Card --> */}
								<div class="bg-white p-3 border-t-4 border-blue-400 ">
									<div>
										<img
											class="h-auto w-full rounded mx-auto"
											src={resp.image}
											alt=""
										/>
										</div>
									<h1 class="text-gray-900 font-bold text-xl leading-8 mt-1">
										{resp.name} {resp.lastname}
										</h1>
										<h1 class="text-gray-900 font-semibold text-lg leading-8">
											{resp.location}
											<div className="grid grid-cols-2 gap-4 -ml-10">
												{reviews && reviews.length > 0 ?
													<StarRatingComponent
														name="rate2"
														editing={false}
														renderStarIcon={() => <span className=" text-xl">★</span>}
														starCount={5}
														value={average}
													/>
													: ""}
												
											</div>
											<div>
													{reviews && reviews.length > 0 ?
													<Link to={"/reviews/" + id} >
														<button className="w-20 mr-4 font-semibold bg-blue-400">
															Reviews
														</button>
													</Link>
												 
													: <h1>No Reviews</h1>}
												{/* {appointment.date && appointment.date.includes("Mon") ?
													time[0].Mon.map(e => <button className="mr-4 bg-blue-300 mb-4 px-2">{e.time}</button>) : ""} */}
												{reviews && cart && token ?
													cart.filter(e => e.state === "Paid" && e.clientId === token.id ).length > 0 ?
													// cart.filter(e => e.state === "Paid" && e.clientId === token.id ?
													<Link to={"/reviews/new/" + id}><button className="w-28 text-md font-semibold  bg-blue-400">Add Review</button></Link> : ""
													: ""}
												</div>
										</h1>
										
										<h1 class="text-gray-900 font-semibold text-md leading-8">
											{ "Level: " + resp.type }
										</h1>
										
									<p class="text-sm text-gray-700 font-semibold hover:text-gray-600 leading-6">
										{resp.resume}
									</p>
									<ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
										<li class="flex items-center py-3">
											<span>Status</span>
											<span class="ml-auto">
												<span
													class={
														resp.status === true
															? "bg-green-500 py-1 px-10 rounded text-white text-sm"
															: "bg-red-500 py-1 px-2 rounded text-white text-sm"
													}
												>
													{resp.status ? "Active" : "Suspended"}
												</span>
											</span>
										</li>
									</ul>
								</div>
								{/* <!-- End of profile card --> */}
								<div class="my-4"></div>
							</div>
								<div class="w-full md:w-9/12 mx-2 h-64">
								{/* <!-- About Section --> */}
								<div class="bg-white p-3 shadow-sm rounded-sm border-t-4 border-blue-400">
									<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
										<span clas="text-green-500">
											<svg
												class="h-5"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
												/>
											</svg>
										</span>
										<span class="tracking-wide">Availability</span>
									</div>
									<div class="text-gray-700">
										{/* <div class="grid md:grid-cols-1 grid-cols-2 font-semibold text-md">
											<div class="grid grid-cols-2">
												<div class="px-4 py-2"> Name: {resp.name}</div>
											</div>
											<div class="grid grid-cols-2">

												<div class="px-4 py-2">Lastname: {resp.lastname}</div>
											</div>
											<div class="grid grid-cols-2">
												
												<div class="px-4 py-2">{resp.type}</div>
											</div>
											<div class="grid grid-cols-2">
												
												<div class="px-4 py-2">{resp.alias}</div>
											</div>
											<div class="grid grid-cols-2">
												
												<div class="px-4 py-2">{resp.location}</div>
											</div>
											<div class="grid grid-cols-2">

												<div class="px-4 py-2">{resp.mobile}</div>
											</div>
											<div class="grid grid-cols-2">
												
												<div class="px-4 py-2">
													<a
														class="text-blue-800"
														href="mailto:jane@example.com"
													>
														{resp.email}
													</a>
												</div>
											</div>
											<div class="grid grid-cols-2">
												
												<div class="px-4 py-2">{resp.rating}</div>
											</div>
										</div> */}
											<div class="bg-gray-100 w-full  mx-auto">
				<div>
					<div>
						<div
							className={`w-full justify-center flex`}
							onClick={handleClick}
						>
							<div>
								<input
									type="button"
									id="HAIRCUT"
									value="Haircut"
									name="filters"
									className={
										boton.filters === "HAIRCUT"
											? filterSelected
											: filterButtonStyle
									}
								/>
							</div>
							<div>
								<input
									type="button"
									id="BEARDCUT"
									value="Beard trim"
									name="filters"
									className={
										boton.filters === "BEARDCUT"
											? filterSelected
											: filterButtonStyle
									}
								/>
							</div>
							<div>
								<input
									type="button"
									id="KIDHAIRCUT"
									value="Kids haircuts"
									name="filters"
									className={
										boton.filters === "KIDHAIRCUT"
											? filterSelected
											: filterButtonStyle
									}
								/>
							</div>
							<div>
								<input
									type="button"
									id="HAIRCOLOR"
									value="Coloration"
									name="filters"
									className={
										boton.filters === "HAIRCOLOR"
											? filterSelected
											: filterButtonStyle
									}
								/>
							</div>
							<div>
								<input
									type="button"
									id="DESIGN"
									value="Tribal trim"
									name="filters"
									className={
										boton.filters === "DESIGN"
											? filterSelected
											: filterButtonStyle
									}
								/>
							</div>
							<div>
								<input
									type="button"
									id="OZON"
									value="Ozone"
									name="filters"
									className={
										boton.filters === "OZON"
											? filterSelected
											: filterButtonStyle
									}
								/>
							</div>
							<div>
								<input
									type="button"
									id="MASK"
									value="Face mask"
									name="filters"
									className={
										boton.filters === "MASK"
											? filterSelected
											: filterButtonStyle
									}
								/>
							</div>
						</div>
					</div>
					<BarberDetailServices filters={boton.filters} />
				</div>
				<div className="flex justify-center">
					<Link to="/cart">
						<button className="px-20 py-2 -mt-3 mb-7 bg-blue-500 fotn-bold rounded">
							Next Step
						</button>
					</Link>
				</div>
			</div>
											{/* <div>
												{appointment.date && appointment.date.includes("Mon") ?
													time[0].Mon.map(e => <button className="mr-4 bg-blue-300 mb-4 px-2">{e.time}</button>) : ""}
												{appointment.date && appointment.date.includes("Tue") ?
													time[1].Tue.map(e => <button className="mr-4 bg-blue-300 mb-4 px-2">{e.time}</button>) : ""}
												{appointment.date && appointment.date.includes("Wed") ?
													time[2].Wed.map(e => <button className="mr-4 bg-blue-300 mb-4 px-2">{e.time}</button>) : ""}
												{appointment.date && appointment.date.includes("Thu") ?
													time[3].Thu.map(e => <button className="mr-4 bg-blue-300 mb-4 px-2">{e.time}</button>) : ""}
												{appointment.date && appointment.date.includes("Fri") ?
													time[4].Fri.map(e => <button className="mr-4 bg-blue-300 mb-4 px-2">{e.time }</button>) : ""}
											</div>
                                <Datetime className="border-4 border-blue-400" input={false} isValidDate={valid} timeFormat={false} onChange={onchange} />
											 */}
									</div>
								</div>
								{/* <!-- End of about section --> */}
								{/* <div class="my-4"></div>
								{/* <!-- Types --> */}
								{
									// <div class="bg-white p-3 shadow-sm rounded-sm border-t-4 border-blue-400">
									// 	<div class="grid grid-cols-3">
									// 		<div>
									// 			<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
									// 				<span class="tracking-wide">Face Types</span>
									// 			</div>
									// 			<ul class="list-inside space-y-2">
									// 				{resp.faceTypes
									// 					? resp.faceTypes.map((n) => (
									// 							<li>
									// 								<div class="bg-blue-500 py-1 px-3  mx-12 rounded text-white text-sm">
									// 									{n.description}
									// 								</div>
									// 							</li>
									// 					  ))
									// 					: "waiting"}
									// 			</ul>
									// 		</div>
											// <div>
											// 	<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
											// 		<span class="tracking-wide">Styles</span>
											// 	</div>
											// 	<ul class="list-inside space-y-2">
											// 		{resp.styles
											// 			? resp.styles.map((n) => (
											// 					<li>
											// 						<div class="bg-blue-500 py-1 px-3 mx-12 rounded text-white text-sm">
											// 							{n.description}
											// 						</div>
											// 					</li>
											// 			  ))
											// 			: "waiting"}
											// 	</ul>
											// </div>
											// <div>
											// 	<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
											// 		<span class="tracking-wide">Hair Types</span>
											// 	</div>
											// 	<ul class="list-inside space-y-2">
											// 		{resp.hairTypes
											// 			? resp.hairTypes.map((n) => (
											// 					<li>
											// 						<div class="bg-blue-500 py-1 px-3 mx-12 rounded text-white text-sm">
											// 							{n.description}
											// 						</div>
											// 					</li>
											// 			  ))
											// 			: "waiting"}
											// 	</ul>
											// </div>
										// </div>
									// </div>
								}
								 {/* <!-- End of Types --> */}
								 {/* <!-- End of profile tab --> */}
								 {/* <div class="my-4"></div> */}
								</div>
								
							{/* <!-- Left Side --> */}
							
							{/* <!-- Right Side --> */}
							
							</div>
							
						</div>
						
				)}
			</div>
			{ resp && resp.city ?
				<div className="grid grid-cols-1 w-4/5 sm:mt-2 mt-48">
					<div class="mapouter ">
						<div class="gmap_canvas">
							<iframe className="w-full h-96" id="gmap_canvas" src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
								frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
							</iframe>
						</div>
					</div>
				</div>
				: ""
			}
			</div>
	);
}

export default BarberDetail;
