import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const GET_ADMINS = "GET_ADMINS";
export const VALIDATION = "VALIDATION";

export const getAdmin = () => (dispatch) =>
	axios
		.get(HOST_BACK + "/admins/all")
		.then((res) => dispatch({ type: GET_ADMINS, payload: res.data }));

export const validation = (body) => (dispatch) =>
	axios
		.post(HOST_BACK + "/admins/validation", body)
		.then((res) => dispatch({ type: VALIDATION, payload: res.data }));