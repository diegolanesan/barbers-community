import axios from "axios";
import { HOST_BACK } from "../back_constants";

export const GET_CLIENT_WISH_LIST = "GET_CLIENT_WISH_LIST";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";


export const getClientWishList = (id) => (dispath) => {
	axios
		.get(HOST_BACK + "/wishlist/" + id)
		.then((res) => dispath({ type: GET_CLIENT_WISH_LIST, payload: res.data }));
};

export const addToWishlist = (id, service) => (dispath) => {
	axios
		.post(HOST_BACK + "/wishlist/addFavorite/" + id, service)
		.then((res) => dispath({ type: ADD_TO_WISHLIST, payload: res.data }));
};

export const removeFromWishlist = (id, serviceBarberId) => (dispath) => {
	axios
		.delete(HOST_BACK + "/wishlist/" + id + "/?serviceBarberId=" + serviceBarberId)
		.then((res) => dispath({ type: REMOVE_FROM_WISHLIST, payload: res.data }));
};