import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_ACTIVE_CART_FROM_USER_ID = "GET_ACTIVE_CART_FROM_USER_ID";



export const addToCart = (id, body) => (dispatch) => {
	// Si no está logueado
		return axios.post("http://localhost:3001/cart/addItem/" + id, body).then((response) => {
		console.log(response.data);
		dispatch({ type: "ADD_TO_CART", payload: response.data });
	});
	
}


export const removeFromCart = (id, body) => (dispatch) => {
    
    console.log("Body, servicebarberid ..= " + body.serviceBarberId);
	
	return axios.delete("http://localhost:3001/cart/" + id + "?serviceBarberId=" + body).then((response) => {
	dispatch({ type: "REMOVE_FROM_CART", payload: response.data });
	});

}


export const getActiveCartFromUserId = (id) => (dispatch) => {
	
	return axios.get("http://localhost:3001/cart/active/" + id)
	.then((response) => {
	dispatch({ type: GET_ACTIVE_CART_FROM_USER_ID, payload: response.data });
	});

}

