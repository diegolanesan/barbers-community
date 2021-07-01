import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import WishList from "./wishList/WishList";
import jwtDecode from "jwt-decode";
//import { HOST_BACK } from '../../../redux/back_constants'
import {
	changeCartStateMercadoPago,
	getCartsByUser,
	addToCart,
} from "../../../redux/action/cart";
import { getClientWishList } from "../../../redux/action/wishlist";

function ClientData({ allAppointments }) {
	const user = jwtDecode(localStorage.getItem("clientToken"));
	const clientAppointments = allAppointments.filter(
		(app) => app.clientId === user.id
	);
	const appointments = useSelector((state) => state.cart.clientsAppointments);
	const wishlist = useSelector((state) => state.wishlist.wishlist);

	const dispatch = useDispatch();
	const search = useLocation().search;
	const state = new URLSearchParams(search).get("collection_status");
	useEffect(() => {
		dispatch(getCartsByUser(user.id));
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
						name: x.name,
						price: x.price,
					};
					dispatchAdd(user.id, serviceToRepeat);
					localStorage.setItem(
						"barberId",
						JSON.stringify(service.serviceBarbers[0].barberId)
					);
					window.location.replace("http://localhost:3000/cart");
					// window.location.href = `http://localhost:3000/cart`
				});
		} else {
			alert("You need to have your appointment approved to repeat it!");
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
		<div>
			<div className="grid sm:grid-cols-2 grid-cols-1">
				<div>
			<h2 class="text-3xl font-bold mt-12">Welcome, {user.name}! </h2>
			</div>
					<div>
					<div class="max-w-sm rounded bg-yellow-400 mt-5 bg-opacity-40 overflow-hidden shadow-lg">
					<p class="text-black text-lg"> Appointments </p>
						<p class="text-black font-bold text-3xl">
						{" "}
						{clientAppointments.length}{" "}
						</p>
						
					</div>

				</div>
				</div>
			<hr class="my-4 w-full"></hr>

			<div class="grid sm:grid-cols-3 grid-cols-1 ">
			{/* <h3 class="text-xl font-bold mt-4"> Appointment history </h3> */}
					
				{/* 📧  */}
				
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
								Add to Card
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
			
			</div>
			<h3 class="flex justify-center text-5xl font-bold mt-24 mb-8 "> {user.name}'s Last 5 Services </h3>
			<hr class="mb-8 -mt-4 w-full"></hr>

			<div className="tracking-wide font-bold bg-gray-200">
            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className="p-3 font-bold text-lg uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">#</th>
                        <th className="p-3 font-bold text-lg uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                        <th className="p-3 font-bold text-lg uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Services</th>
						<th className="p-3 font-bold text-lg uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                        <th className="p-3 font-bold text-lg uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                        <th className="p-3 font-bold text-lg uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Clone</th>
							
                    </tr>
                </thead>
                <tbody>
                    {lastFive && lastFive.length > 0 ? lastFive.map((c, id) => {
                        return <tr key={id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                {c.id}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.date && c.date.slice(0, 15)} @ {c.time}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.serviceBarbers &&
												c.serviceBarbers.map((x) => {
													if (c.serviceBarbers.length > 1) {
														return "| " + x.item.serviceName + " |";
													} else {
														return x.item.serviceName + " ";
													}
												})}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								{c.state}
							</td>
							<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
								${c.totalAmount}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <button
												onClick={() => onClick(app.state, app)}
												class="h-8 px-4 text-sm text-white transition-colors bg-blue-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-blue-600"
											>
												Clone
											</button>
                            </td>
                        </tr>
                    }) : ""}
                </tbody>
            </table>
        </div >
			{/* <h3 class="text-xl font-bold mt-4"> Wish List </h3> */}
			{/* {wishlist && wishlist.length > 0
				? wishlist.map((app) => {
						return <WishList wlApp={app} />;
				  })
				: ""} */}
		</div>
	);
}
export default ClientData;
