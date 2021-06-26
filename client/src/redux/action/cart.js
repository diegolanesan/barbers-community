import axios from "axios";
import { HOST_BACK } from "../back_constants";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_ACTIVE_CART_FROM_USER_ID = "GET_ACTIVE_CART_FROM_USER_ID";





// ACTIONS PARA CARRITO DE GUEST
// export const addToGuestCart = (service) => (dispatch) => {

// 		getCart.items.push(service)
//         localStorage.setItem("cart", JSON.stringify(getCart))
        
// 		return dispatch({ type: "ADD_TO_GUEST_CART", payload: getCart })
		
// }

// export const removeFromGuestCart = (serviceId) => {
// 	let cart = getCartNotLogged();
// 	let productIndex = cart.items.findIndex((i) => i.productId === productId);
// 	if (productIndex > -1) {
// 		const price = cart.items[productIndex].price;

// 		const items = cart.items.filter((i) => i.productId !== productId);
// 		cart.items = items
// 		cart.totalAmount -= price
// 		localStorage.setItem('cart', JSON.stringify(cart))
// 	}
// }

// export const getCartNotLogged = () => {
//   const getCart = JSON.parse(localStorage.getItem('cart'))
//  	console.log("BBBBB", getCart)
//  	if (!getCart) {
//  		const newCart = {
//  			userId: null,
//  			items: [],
//  			state: 'active',
//  			totalAmount: 0
//  		}
//  		localStorage.setItem('cart', JSON.stringify(newCart))
// 		return newCart;
//  	}
//  	return getCart;
// }

// export const deleteItemNotLogged = (productId) => {
// 	let cart = getCartNotLogged();
// 	let productIndex = cart.items.findIndex((i) => i.productId === productId);
// 	if (productIndex > -1) {
// 		const price = cart.items[productIndex].price;
// 		const quantity = cart.items[productIndex].quantity;

// 		const items = cart.items.filter((i) => i.productId !== productId);
// 		cart.items = items;
// 		cart.totalAmount -= price * quantity;
// 		localStorage.setItem('cart', JSON.stringify(cart))
// 	}
// }


// ACTIONS PARA CARRITO LOGUEADO

export const addToCart = (id, body) => (dispatch) => {
	// Si no está logueado
		return axios.post(HOST_BACK + "/cart/addItem/" + id, body).then((response) => {
		console.log(response.data);
		dispatch({ type: "ADD_TO_CART", payload: response.data });
	});
	
}

export const removeFromCart = (id, body) => (dispatch) => {
    
     console.log(HOST_BACK + "Body, servicebarberid ..= " + body.serviceBarberId);
	
 	return axios.delete("/cart/" + id + "?serviceBarberId=" + body).then((response) => {
 	dispatch({ type: "REMOVE_FROM_CART", payload: response.data });
	});

}

export const getActiveCartFromUserId = (id) => (dispatch) => {
	
	return axios.get(HOST_BACK + "/cart/active/" + id)
	.then((response) => {
	dispatch({ type: GET_ACTIVE_CART_FROM_USER_ID, payload: response.data });
	});

}

