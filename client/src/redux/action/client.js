import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const PUT_CLIENT = "PUT_CLIENT";

export const putBarber = (body) => (dispatch) => {
	return axios
		.put(HOST_BACK + "/clients/add", body)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: PUT_CLIENT, payload: response.data });
		});
};