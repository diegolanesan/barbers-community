import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import WishList from "./wishList/WishList";
import jwtDecode from "jwt-decode";
import Swal from 'sweetalert2'
//import { HOST_BACK } from '../../../redux/back_constants'
import {
	changeCartStateMercadoPago,
	getCartsByUser,
	addToCart,
	getLastFiveByClientId,
} from "../../../redux/action/cart";
import { getClientWishList } from "../../../redux/action/wishlist";

function ClientData({ allAppointments }) {
	const user = jwtDecode(localStorage.getItem("clientToken"));
	console.log(user)
	const clientAppointments = allAppointments && allAppointments?.filter(
		(app) => app.clientId === user.id
		);
		const appointments = useSelector((state) => state.cart.appoinments);
		const allAppoints = useSelector((state) => state.cart.clientsAppointments);
		const wishlist = useSelector((state) => state.wishlist.wishlist);
		
		console.log(allAppoints,user)
	const dispatch = useDispatch();
	const search = useLocation().search;
	const state = new URLSearchParams(search).get("collection_status");

	useEffect(() => {
		// dispatch(getCartsByUser(user.id));
		dispatch(getLastFiveByClientId(user.id))
		dispatch(getClientWishList(user.id));
		if (state && state === "approved") {
			dispatch(changeCartStateMercadoPago(user.id, { state: "Paid" })).then(
				() => window.location.replace("http://localhost:3000/clients/dashboard")
			);
		}
		if (state && state === "rejected") {
			dispatch(changeCartStateMercadoPago(user.id, { state: "Rejected" })).then(
				() => window.location.replace("http://localhost:3000/clients/dashboard")
			);
		}
		if (state && state === "pending") {
			dispatch(changeCartStateMercadoPago(user.id, { state: "Pending" })).then(
				() => window.location.replace("http://localhost:3000/clients/dashboard")
			);
		}
	}, []);
	function dispatchAdd(id, service) {
		dispatch(addToCart(id, service));
	}
	async function onClick(state, service) {
		if (state === "Paid") {
			service?.serviceBarbers &&
				service?.serviceBarbers?.map(async (x) => {
					let serviceToRepeat = {
						serviceBarberId: x.id,
						name: x.item.serviceName,
						price: x.price,
					};
					dispatchAdd(user.id, serviceToRepeat);
					localStorage.setItem(
						"barberId",
						JSON.stringify(service.serviceBarbers[0].barberId)
					);
					Swal.fire(
				 	 	'Good job!',
  						'You clicked the button!',
  						'success'
					).then(() => window.location.replace("http://localhost:3000/cart"))
					//window.location.replace("http://localhost:3000/cart");
					// window.location.href = `http://localhost:3000/cart`
				});
		} else {
			Swal.fire({
				title: 'You need to have your appointment approved to repeat it!',
				showClass: {
				  popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
				  popup: 'animate__animated animate__fadeOutUp'
				}
			  })
		}
	}

let lastFive = appointments

	if (lastFive && lastFive.length > 5) {
		let orderedAppointments = lastFive

// parse each string as a Date object and sort them in ascending order
function sortDates(orderedAppointments) {
  return orderedAppointments.map(function(app) {
	  return app.id
	//   return new Date(app.time).getTime();
  }).sort(function(a, b) {
    return a - b;
  });
}
		
var orderedDates = sortDates(orderedAppointments);
		for (let i = 5; i > 0; i--) {
			let app = orderedDates
			app = appointments.filter(e => {
				if(e.id === orderedDates[i]) return e 
			})[0]
			lastFive.push(app)
			
			
		}
		console.log(lastFive)
// remove any dates in the past, and get the first child of the array of remaining dates
var nextDate = orderedDates.filter(function(date) {
  return (Date.now() - date) > 0;
})[0];
		console.log(orderedDates)
	}

	return (
		<div class="ml-12 text-primary h-full bg-background font-lato">
			<h2 class="text-3xl font-bold mt-6">Welcome, {user.name}! </h2>
			<hr class="my-4 w-5/6 text-secondary"></hr>
			<h3 class="text-xl font-bold mt-6"> APPOINTMENT HISTORY </h3>
			<div class="flex flex-row items-center justify-around">
				<div class="rounded-full h-36 w-36 flex flex-col items-center justify-center text-center bg-secondary">
					<p class="text-white font-bold text-5xl">
						{" "}
						{allAppoints.length}{" "}
						</p>
						
					</div>

				</div>

				{/* SERVICIO DESTACADO
				<div>
					<div class="max-w-sm rounded overflow-hidden shadow-lg">
						<img
							class="w-full h-48"
							src="https://res.cloudinary.com/doovf5g5c/image/upload/v1623562800/Barbers/lafama_barbershop_cnyvpt.jpg"
							alt="Sunset in the mountains"
						></img>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2">Servicio destacado</div>
							<p class="text-gray-700 text-base">
								Imagen destacada ofreciendo un servicio de la misma categoria
								que ya ha solicitado antes.
							</p>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Add to Cart
							</span>
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Wish list
							</span>
						</div>
					</div>
				
			
				
				
					<div class="max-w-sm rounded overflow-hidden shadow-lg">
						<img
							class="w-full h-48"
							src="https://cdn.shopify.com/app-store/listing_images/34ae0275ebf361b3f6135ce614b37b6e/banner/CITY2rz0lu8CEAE=.jpg"
							alt="Sunset in the mountains"
						></img>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2">Whish list</div>
							<p class="text-gray-700 text-base">
								<ul>
									<li>XX</li>
									<li>Corte Militar</li>
								</ul>
							</p>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Add to Card
							</span>
							<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Wish list
							</span>
						</div>
					</div>
			
			</div> */}

			{/* LAST SERVICES TABLE */}
			<div class="flex flex-col items-center h-full mt-20">
				<h3 class="text-xl font-bold mt-4 text-white p-2 bg-secondary mb-8"> YOUR LAST APPOINTMENTS </h3>
				<table class="border-collapse w-full">
					<thead>
						<tr>
							<th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"> # </th>
							<th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
							<th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Services</th>
							<th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
							<th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"> Total price </th>
							<th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"> Repeat </th>

						</tr>
					</thead>
					{appointments && appointments.length > 0
						? appointments.map((app) => {
								return (
									<tbody class="text-center">
										<tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
											<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-gray-600 block lg:table-cell relative lg:static"> {app.id} </td>
											<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-gray-600 block lg:table-cell relative lg:static"> {app.date && app.date.slice(0, 10)} @ { app.time} </td>
											{/* c.serviceBarbers.map(n => "| " + n.item.serviceName + " |") */}
											<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-gray-600 text-center block lg:table-cell relative lg:static">
												{" "}
												{app.serviceBarbers &&
													app.serviceBarbers.map((x) => {
														if (app.serviceBarbers.length > 1) {
															return "| " + x.item.serviceName + " |";
														} else {
															return x.item.serviceName + " ";
														}
													})}{" "}
											</td>
											<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-gray-600 text-center block lg:table-cell relative lg:static"> {app && app.state} </td>
											<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-gray-600 block lg:table-cell relative lg:static"> $ {app.totalAmount && app.totalAmount} </td>
											<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-gray-600 text-center block lg:table-cell relative lg:static">
												<button
													onClick={() => onClick(app.state, app)}
													class="h-8 px-4 text-sm text-white transition-colors bg-blue-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-blue-600"
												>
													Clone
												</button>
											</td>
										</tr>
									</tbody>
								);
						})
						: "No Appointments Made"}
				</table>
			</div>
		</div>
	);
}
export default ClientData;
