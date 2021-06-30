import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
//import { HOST_BACK } from '../../../redux/back_constants'
import {
	changeCartStateMercadoPago,
	getCartsByUser,
	addToCart,
} from "../../../redux/action/cart";

function ClientData({ allAppointments }) {
	const user = jwtDecode(localStorage.getItem("clientToken"));
	const clientAppointments = allAppointments.filter(
		(app) => app.clientId === user.id
	);
	const appointments = useSelector((state) => state.cart.clientsAppointments);
	const dispatch = useDispatch();
	const search = useLocation().search;
	const state = new URLSearchParams(search).get("collection_status");
	useEffect(() => {
		dispatch(getCartsByUser(user.id));
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
	return (
		<div>
			<h2 class="text-3xl font-bold mt-12">Welcome, {user.name}! </h2>
			<hr class="my-4 w-4/5"></hr>
			<h3 class="text-xl font-bold mt-4"> Appointment history </h3>
			<div class="flex flex-row items-center justify-around">
				<div class="rounded-full h-36 w-36 mt-6 flex flex-col items-center justify-center text-center bg-blue-700">
					<p class="text-white font-bold text-3xl">
						{" "}
						{clientAppointments.length}{" "}
					</p>
					<p class="text-white text-lg"> appointments </p>
				</div>
				<div>
					<div class="max-w-sm rounded overflow-hidden shadow-lg">
						<img
							class="w-full"
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
				</div>
			</div>
			<h3 class="text-xl font-bold mt-4"> LIST LAST 5 SERVICES </h3>
			<table class="table-fixed mt-8 w-4/5">
				<thead>
					<tr>
						<th class="w-12 p-4"> # </th>
						<th class="w-1/2">Date</th>
						<th class="w-1/2">Services</th>
						<th class="w-1/4">Status</th>
						<th class="w-1/4"> Total price </th>
					</tr>
				</thead>
				{appointments && appointments.length > 0
					? appointments.map((app) => {
							return (
								<tbody class="text-center">
									<tr>
										<td> {app.id} </td>
										<td> {app.date && app.date.slice(0, 10)} </td>
										{/* c.serviceBarbers.map(n => "| " + n.item.serviceName + " |") */}
										<td>
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
										<td> {app && app.state} </td>
										<td> $ {app.totalAmount && app.totalAmount} </td>
										<td>
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
					: ""}
			</table>

			{/* -- */}
			<h3 class="text-xl font-bold mt-4"> Wish List </h3>
			<table class="table-fixed mt-8 w-4/5">
				<thead>
					<tr>
						<th class="w-12 p-4"> # </th>
						<th class="w-1/2">Date</th>
						<th class="w-1/2">Services</th>
						<th class="w-1/4">Status</th>
						<th class="w-1/4"> Total price </th>
					</tr>
				</thead>
				{appointments && appointments.length > 0
					? appointments.map((app) => {
							return (
								<tbody class="text-center">
									<tr>
										<td> {app.id} </td>
										<td> {app.date && app.date.slice(0, 10)} </td>
										{/* c.serviceBarbers.map(n => "| " + n.item.serviceName + " |") */}
										<td>
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
										<td> {app && app.state} </td>
										<td> $ {app.totalAmount && app.totalAmount} </td>
										<td>
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
					: ""}
			</table>
		</div>
	);
}
export default ClientData;
