import axios from "axios";
import { HOST_BACK } from "../back_constants";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_ACTIVE_CART_FROM_USER_ID = "GET_ACTIVE_CART_FROM_USER_ID";
export const RESET_USER_CART = "RESET_USER_CART";
export const CHANGE_CART_STATE = "CHANGE_CART_STATE"
export const CHANGE_CART_STATE_MERCADO_PAGO = "CHANGE_CART_STATE_MERCADO_PAGO"
export const GET_CARTS_BY_BARBER_ID = "GET_CARTS_BY_BARBER_ID"
export const GET_CARTS_BY_USER = "GET_CARTS_BY_USER"


// ACTIONS PARA CARRITO DE GUEST
export const getGuestCart = () => {
    const getCart = JSON.parse(localStorage.getItem('cart'))
    if (!getCart){
        const newCart = {
            userId: null,
            items:[], 
            state: 'active',
            totalAmount: 0
        }
        localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
    }
    return getCart;
}

export const addToGuestCart = (service) => {
    let cart = getGuestCart()
    console.log("CCCCC",cart)
    console.log("ADDITEMNOTLOGGED",service)
    const {serviceBarberId, price, name} = service
    
    cart.items.push(service)
    cart.totalAmount += price
    
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromGuestCart = (service) => {
    let cart = getGuestCart();
    console.log(service)
	const {serviceBarberId, price, name} = service

    const items = cart.items.filter((i) => i.serviceBarberId !== serviceBarberId)
    cart.items = items
    cart.totalAmount -= price 
    localStorage.setItem('cart', JSON.stringify(cart))
    
}

// ACTIONS PARA CARRITO LOGUEADO

export const addToCart = (id, body) => (dispatch) => {
	// Si no está logueado
		return axios.post(HOST_BACK + "/cart/addItem/" + id, body).then((response) => {
		console.log(response.data);
            dispatch({ type: "ADD_TO_CART", payload: response.data });
            //addToGuestCart(body)
	});
}

export const removeFromCart = (id, body) => (dispatch) => {
    
     console.log(HOST_BACK + "Body, servicebarberid ..= " + body.serviceBarberId);
	
 	return axios.delete("http://localhost:3001/cart/" + id + "?serviceBarberId=" + body).then((response) => {
          dispatch({ type: "REMOVE_FROM_CART", payload: response.data });
          //removeFromGuestCart(body)
	});

}

export const getActiveCartFromUserId = (id) => (dispatch) => {
	
	return axios.get(HOST_BACK + "/cart/active/" + id)
	.then((response) => {
	dispatch({ type: GET_ACTIVE_CART_FROM_USER_ID, payload: response.data });
	});

}

export const getCartsByUser = (id) => (dispatch) => {
    console.log("Entra a la action!");
	return axios.get(HOST_BACK + "/cart/client/all/" + id)
    .then((response) => {	
		dispatch({ type: "GET_CARTS_BY_USER", payload: response.data });
	});
};

export const resetUserCart = (id) => (dispatch) => {	
 	return axios.delete("http://localhost:3001/cart/reset/" + id).then((response) => {
          dispatch({ type: "RESET_USER_CART", payload: response.data });
          //removeFromGuestCart(body)
	});

}

export const changeCartState = (id, body) => (dispatch) => {
    
     console.log("Body, servicebarberid ..= " + body);
	
 	return axios.put("http://localhost:3001/cart/state/" + id, body).then((response) => {
          dispatch({ type: "CHANGE_CART_STATE", payload: response.data });
          //removeFromGuestCart(body)
	});

}

export const changeCartStateMercadoPago = (id, body) => (dispatch) => {
    
     console.log("Body, servicebarberid ..= " + body);
	
 	return axios.put("http://localhost:3001/cart/state/payment/" + id, body).then((response) => {
          dispatch({ type: "CHANGE_CART_STATE_MERCADO_PAGO", payload: response.data });
          //removeFromGuestCart(body)
	});

}

export const getCartsByBarberId = (id) => (dispatch) => {
	
	return axios.get(HOST_BACK + "/cart/barber/" + id)
	.then((response) => {
	dispatch({ type: GET_CARTS_BY_BARBER_ID, payload: response.data });
	});

}