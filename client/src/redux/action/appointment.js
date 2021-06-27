import axios from "axios";
import { HOST_BACK } from "../back_constants";
export const POST_APPOINTMENT = "POST_APPOINTMENT"
export const APPOINTMENT_RELATION = "APPOINTMENT_RELATION"
export const GET_APPOINTMENT_BY_BARBER = "GET_APPOINTMENT_BY_BARBER"
export const GET_APPOINTMENT_DETAILS = "GET_APPOINTMENT_DETAILS"



export const postAppointment = (body) => (dispatch) => {
	return axios.post(HOST_BACK + "/appointments/add", body).then((response) => {
		console.log(response.data);
		dispatch({ type: "POST_APPOINTMENT", payload: response.data });
	});
};

export const detailAppointment = (body) => (dispatch) => {
	return axios.post(HOST_BACK + "/detailAppointments/add", body).then((response) => {
		console.log(response.data);
		dispatch({ type: "APPOINTMENT_RELATION", payload: response.data });
	});
};

export const getAppointmentByBarber = (id) => (dispatch) => {
	return axios.get(HOST_BACK + "/appointments")
	.then(res => dispatch({ type: GET_APPOINTMENT_BY_BARBER, payload: {id: id, json: res.data} }))
}

export const getAppointmentDetails = (id) => (dispatch) => {
	return dispatch({ 
		type: GET_APPOINTMENT_DETAILS,
		payload: id
	})
}