import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const GET_ADMINS = "GET_ADMINS";

export const getAdmin = () => (dispatch) =>
	axios
		.get(HOST_BACK + "/admins/all")
		.then((res) => dispatch({ type: GET_ADMINS, payload: res.data }));
