import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const PUT_CLIENT = "PUT_CLIENT";
export const GET_CLIENT = "GET_CLIENT";
export const GET_CLIENT_BY_ID = "GET_CLIENT_BY_ID";
export const DELETE_CLIENT = "DELETE_CLIENT";
export const GET_APPOINTMENTS_BY_CLIENT_ID = "GET_APPOINTMENTS_BY_CLIENT_ID"

export const deleteClient = (id) => (dispatch) => {
	return axios
		.delete(HOST_BACK + "/clients/" + id)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: DELETE_CLIENT, payload: response.data });
		});
};

export const getClients = (name) => (dispatch) =>{
	if(name) {
		axios
		.get(HOST_BACK + "/clients/?name="+name)
		.then((res) => dispatch({ type: GET_CLIENT, payload: res.data }));
	}else {
		axios
		.get(HOST_BACK + "/clients/")
		.then((res) => dispatch({ type: GET_CLIENT, payload: res.data }));
	}}

export const getClientById = (id) => (dispatch) =>
    axios
		.get(HOST_BACK + "/clients/"+id)
		.then((res) => dispatch({ type: GET_CLIENT_BY_ID, payload: res.data }));

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


export const getAllAppointmentsByClientId = (id) => (dispatch) => {
    return axios.get(HOST_BACK + "/appointments/byClientId/" + id)
    .then((response) => {
        console.log("Entra a la action!");
        dispatch({ type: GET_APPOINTMENTS_BY_CLIENT_ID, payload: response.data });
    });
};

