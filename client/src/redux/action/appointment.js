import axios from "axios";
export const POST_APPOINTMENT = "POST_APPOINTMENT"
export const APPOINTMENT_RELATION = "APPOINTMENT_RELATION"



export const postAppointment = (body) => (dispatch) => {
	return axios.post("http://localhost:3001/appointments/add", body).then((response) => {
		console.log(response.data);
		dispatch({ type: "POST_APPOINTMENT", payload: response.data });
	});
};

export const detailAppointment = (body) => (dispatch) => {
	return axios.post("http://localhost:3001/detailAppointments/add", body).then((response) => {
		console.log(response.data);
		dispatch({ type: "APPOINTMENT_RELATION", payload: response.data });
	});
};
