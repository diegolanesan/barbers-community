import { React, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { barberDetail } from "../../../redux/action/barberDetail";
import { getBarbers } from "../../../redux/action/barbers";
import { addToAppointment } from "../../../redux/action/services";
import { getAllCategory } from "../../../redux/action/categories";
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
	const categories = useSelector(state => state.category.resp)
    const token = localStorage.getItem("clientToken") ? jwtDecode(localStorage.getItem("clientToken")) : null;
	console.log(token)
	const id = props.match.params.id;


	
	useEffect(() => {
		dispatch(barberDetail(id));
		dispatch(getBarbers());
		dispatch(getAllCategory());
		dispatch(getAppointmentByBarber(id));
		dispatch(getBarberReviews(id))
		dispatch(getCartsByBarberId(id))
	}, []);

	const buttonStyle =
		"bg-secondary hover:bg-primary text-white py-1 px-0 mx-0 mb-0 w-full";
	const buttonSelected = "bg-primary text-white py-1 px-0 mx-0 mb-0 w-full";
	const filterButtonStyle =
		"bg-secondary hover:bg-primary text-white py-2 px-5 mx-2 w-full mt-3 mb-3";
	const filterSelected = "bg-primary text-white py-2 px-5 mx-2 w-full mt-3 mb-3";

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
		<div class="bg-background font-lato text-primary">
			<div class="bg-gray-100 max-w-6xl mx-auto">
				{!resp ? (
					<div class="loader"></div>
				) : (
					<div class="container p-5">
						<Link to="/catalog">
							<button class="bg-secondary hover:bg-primary border-b-2 text-white py-1 
							font-bold p-3 mt-6 ml-3">
								TO CATALOG
							</button>
						</Link>
							<div class="md:flex no-wrap md:-mx-2 pt-8 pb-32">
								<div class="w-full md:w-3/12 md:mx-2">
								{/* <!-- Profile Card --> */}
								<div class="bg-white p-3">

									{/* MAIN FIELDS  */}
									<div class="">
										<img class="object-contain" src={resp.image} alt="barber"/>
										<p class="font-semibold text-white p-2 w-full text-center bg-secondary">
											{ resp.type }
									</p>
									</div>
									<h1 class="font-bold text-2xl mt-4">
										{resp.name} {resp.lastname}
										</h1>
										<h1 class="text-gray-900 font-semibold text-lg leading-8">
											
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
										
										{/* <h1 class="text-gray-900 font-semibold text-md leading-8">
											{ "Level: " + resp.type }
										</h1> */}
										
									<p class="text-sm text-gray-700 font-semibold hover:text-gray-600 leading-6">
										{resp.resume}
									</p>
									

									{/* LOCATION */}
									

									{/* STATUS */}
									<ul class="hover:shadow  divide-y shadow-sm">
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
										<div class="flex flex-row items-center my-3"> 
									
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
										{resp.city}, {resp.state}
									</div>
									{resp && resp.city ?
				<div className="grid grid-cols-1">
					{/* <h2 className="font-bold text-2xl mb-4">Location</h2> */}
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
									{/* REVIEWS */}
									
									
							
								</div>

								{/* MAP */}
								

								</div>
							
						{/* AVAILABILITY */}
						<div class="bg-white p-3 shadow-sm rounded-sm">
							<div class="flex items-center space-x-2 font-semibold mt-3">
								<span clas="text-green-500">
									<svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
									</svg>
								</span>
								<span class="font-bold text-xl">Availability</span>
							</div>
							<div>
										
							<div class="w-full  mx-auto">
							<div>
							<div>
							<div className={`w-full justify-center flex`} onClick={handleClick} >
							{categories.map(c => {
								return (
									<div>
								<input
									type="button"
									id={c.name}
									value={c.name}
									name="filters"
									className={
										boton.filters === c.name
											? filterSelected
											: filterButtonStyle
									}
								/>
							</div>
							
								)
							})}
						</div>
					</div>
					<BarberDetailServices filters={boton.filters} />
					</div>
						<div className="flex justify-center">
							<Link to="/cart">
							<button className="bg-secondary text-white py-2 px-10 hover:bg-primary font-semibold">
								NEXT STEP
							</button>
							</Link>
						</div>
					</div>
											
				</div>
				</div>
				{/* END OF AVAILABILITY */}				
								
			</div>			
						</div>
						
				)}
				
			</div>
			
			</div>
	);
}

export default BarberDetail;
