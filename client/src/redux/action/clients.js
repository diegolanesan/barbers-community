import { HOST_BACK } from "../back_constants/index";
import axios from "axios";


export const getAllAppointments = () => (dispatch) => {
	return axios.get(HOST_BACK + "/appointments")
    .then((response) => {	
		dispatch({ type: "GET_APPOINTMENTS", payload: response.data });
	});
};

