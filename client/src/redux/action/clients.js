import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const PUT_CLIENT = "PUT_CLIENT";
export const GET_CLIENT = "GET_CLIENT";
export const DELETE_CLIENT = "DELETE_CLIENT";


export const deleteClient = (id) => (dispatch) => {
	return axios
		.delete(HOST_BACK + "/clients/" + id)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: DELETE_CLIENT, payload: response.data });
		});
};

export const getClients = () => (dispatch) =>
	axios
		.get(HOST_BACK + "/clients/")
		.then((res) => dispatch({ type: GET_CLIENT, payload: res.data }));

export const getAllAppointments = () => (dispatch) => {
	return axios.get(HOST_BACK + "/appointments")
    .then((response) => {	
		dispatch({ type: "GET_APPOINTMENTS", payload: response.data });
	});
};

export const putClient = (id, body) => (dispatch) => {
	return axios
		.put(HOST_BACK + "/clients/" + id, body)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: PUT_CLIENT, payload: response.data });
		});
};

