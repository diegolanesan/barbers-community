import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const PUT_CLIENT = "PUT_CLIENT";
export const GET_BARBER_REVIEWS = "GET_BARBER_REVIEWS";
export const DELETE_CLIENT = "DELETE_CLIENT";
export const POST_REVIEWS = "POST_REVIEWS"

// export const deleteBarber = (id) => (dispatch) => {
// 	return axios
// 		.delete(HOST_BACK + "/clients/" + id)
// 		.then((response) => {
// 			console.log(response.data);
// 			dispatch({ type: DELETE_CLIENT, payload: response.data });
// 		});
// };

export const getBarberReviews = (id) => (dispatch) => {
	return axios.get(HOST_BACK + "/reviews/" + id)
    .then((response) => {	
		dispatch({ type: "GET_BARBER_REVIEWS", payload: response.data });
	});
};

export const postReview = (id, body) => (dispatch) => {
	return axios.post(HOST_BACK + "/reviews/" + id, body)
    .then((response) => {	
		dispatch({ type: "POST_REVIEWS", payload: response.data });
	});
};