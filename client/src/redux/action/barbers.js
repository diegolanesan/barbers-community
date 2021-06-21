import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const GET_BARBERS = "GET_BARBERS";
export const POST_BARBER = "POST_BARBER";
export const DELETE_BARBER = "DELETE_BARBER";
export const PUT_BARBER = "PUT_BARBER";
export const FILTER_BARBERS = "FILTER_BARBERS";
export const GET_BARBERS_BY_NAME = "GET_BARBERS_BY_NAME";
export const GET_BARBERS_BY_TYPE = "GET_BARBERS_BY_TYPE";
export const GET_BARBER_BY_ID = "GET_BARBERS_BY_ID";
export const RELATION_FACE_TYPE = "RELATION_FACE_TYPE";
export const RELATION_HAIR_TYPE = "RELATION_HAIR_TYPE";
export const RELATION_STYLE = "RELATION_STYLE";
export const ADD_SERVICE_BARBER = "ADD_SERVICE_BARBER";
export const REMOVE_SERVICE_BARBER = "REMOVE_SERVICE_BARBER";


export const postBarber = (body) => (dispatch) => {
	console.log("aaaaaa", body);
	return axios.post("http://localhost:3001/barbers/", body).then((response) => {
		console.log(response.data);
		dispatch({ type: "POST_BARBER", payload: response.data });
	});
};

export const deleteBarber = (id) => (dispatch) => {
	console.log("aaaaaa", id);
	return axios
		.delete("http://localhost:3001/barbers/" + id)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: "DELETE_BARBER", payload: response.data });
		});
};

export const putBarber = (id, body) => (dispatch) => {
	console.log("aaaaaa", body);
	return axios
		.put("http://localhost:3001/barbers/" + id, body)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: "PUT_BARBER", payload: response.data });
		});
};

export const getBarbers = () => (dispatch) =>
	axios
		.get("http://localhost:3001/barbers/all")
		.then((res) => dispatch({ type: GET_BARBERS, payload: res.data }));

export const filterBarbers = (filters) => (dispatch) =>
	dispatch({ type: FILTER_BARBERS, payload: filters });

export const getBarbersByName = (name) => (dispath) => {
	axios
		.get(HOST_BACK + "/barbers/name/" + name)
		.then((res) => dispath({ type: GET_BARBERS_BY_NAME, payload: res.data }));
};

export const getBarbersByType = (type) => (dispath) => {
	axios
		.get(HOST_BACK + "/barbers/type/" + type)
		.then((res) => dispath({ type: GET_BARBERS_BY_TYPE, payload: res.data }));
};

export const getBarberById = (id) => (dispatch) => {
	axios
		.get(HOST_BACK + "/barbers/id/" + id)
		.then((res) => dispatch({ type: GET_BARBER_BY_ID, payload: res.data }));
};

export const relationFaiceType = (body) => (dispatch) => {
	axios
		.post(HOST_BACK + "/barbers/addFaceType", body)
		.then((res) => dispatch({ type: RELATION_FACE_TYPE, payload: res.data }));
};

export const relationHairType = (body) => (dispatch) => {
	axios
		.post(HOST_BACK + "/barbers/addHairType", body)
		.then((res) => dispatch({ type: RELATION_HAIR_TYPE, payload: res.data }));
};

export const relationStyle = (body) => (dispatch) => {
	axios
		.post(HOST_BACK + "/barbers/addStyle", body)
		.then((res) => dispatch({ type: RELATION_STYLE, payload: res.data }));
};

export const addToService = (payload) => (dispatch) => {
	dispatch({ type: ADD_SERVICE_BARBER, payload})
}

export const removeFromService = (payload) => (dispatch) => {
	dispatch({ type: REMOVE_SERVICE_BARBER, payload})
}


