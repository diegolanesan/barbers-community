import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const GET_ADMINS = "GET_ADMINS";
export const POST_ADMIN = "POST_ADMIN";
export const DELETE_ADMIN = "DELETE_ADMIN";
export const PUT_ADMIN = "PUT_ADMIN";
export const GET_ADMINS_BY_NAME = "GET_ADMINS_BY_NAME";
export const GET_ADMIN_BY_ID = "GET_ADMIN_BY_ID";

export const postAdmin = (body) => (dispatch) => {
	console.log("aaaaaa", body);
	return axios.post(HOST_BACK + "/admins/", body).then((response) => {
		console.log(response.data);
		dispatch({ type: POST_ADMIN, payload: response.data });
	});
};

export const deleteAdmin = (id) => (dispatch) => {
	console.log("aaaaaa", id);
	return axios
		.delete(HOST_BACK + "/admins/" + id)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: DELETE_ADMIN, payload: response.data });
		});
};

export const putAdmin = (id, body) => (dispatch) => {
	console.log("aaaaaa", body);
	return axios
		.put(HOST_BACK + "/admins/" + id, body)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: PUT_ADMIN, payload: response.data });
		});
};

export const getAdmin = () => (dispatch) =>
	axios
		.get(HOST_BACK + "/admins/all")
		.then((res) => dispatch({ type: GET_ADMINS, payload: res.data }));

export const getAdminsByName = (name) => (dispath) => {
    axios
        .get(HOST_BACK + "/admins/name/" + name)
        .then((res) => dispath({ type: GET_ADMINS_BY_NAME, payload: res.data }));
};

export const getAdminById = (id) => (dispatch) => {
	axios
		.get(HOST_BACK + "/admins/id/" + id)
		.then((res) => dispatch({ type: GET_ADMIN_BY_ID, payload: res.data }));
};