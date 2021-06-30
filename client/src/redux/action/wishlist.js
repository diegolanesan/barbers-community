import axios from "axios";
import { HOST_BACK } from "../back_constants";

export const GET_CLIENT_WISH_LIST = "GET_CLIENT_WISH_LIST";

export const getClientWishList = (id) => (dispath) => {
	axios
		.get(HOST_BACK + "/wishlist/" + id)
		.then((res) => dispath({ type: GET_CLIENT_WISH_LIST, payload: res.data }));
};
