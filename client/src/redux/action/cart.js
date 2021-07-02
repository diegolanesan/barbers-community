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
export const GET_STATUS_APPOINTMENTS = "GET_STATUS_APPOINTMENTS"
export const CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS"
export const GET_PAID_APPOINTMENTS = "GET_PAID_APPOINTMENTS"
export const GET_ACTIVE_APPOINTMENTS = "GET_ACTIVE_APPOINTMENTS"
export const GET_REJECTED_APPOINTMENTS = "GET_REJECTED_APPOINTMENTS"
export const GET_APPOINTMENTS = "GET_APPOINTMENTS"
export const GET_LAST_FIVE_CARTS_BY_CLIENT_ID = "GET_LAST_FIVE_CARTS_BY_CLIENT_ID"

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

export const getPaidAppointments = () => (dispatch) => {
        const status = "Paid"
		return axios.get(HOST_BACK + "/cart/state/" + status).then((response) => {
		console.log(response.data);
            dispatch({ type: GET_PAID_APPOINTMENTS, payload: response.data });
	});
}
export const getActiveAppointments = () => (dispatch) => {
    const status = "Active"
    return axios.get(HOST_BACK + "/cart/state/" + status).then((response) => {
    console.log(response.data);
        dispatch({ type: GET_ACTIVE_APPOINTMENTS, payload: response.data });
});
}
export const getRejectedAppointments = () => (dispatch) => {
    const status = "Rejected"
    return axios.get(HOST_BACK + "/cart/state/" + status).then((response) => {
    console.log(response.data);
        dispatch({ type: GET_REJECTED_APPOINTMENTS, payload: response.data });
});
}

export const getAppointments = () => (dispatch) =>
	axios
		.get(HOST_BACK + "/cart/")
		.then((res) => dispatch({ type: GET_APPOINTMENTS, payload: res.data }));

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
	
 	return axios.delete("https://barbers-community.herokuapp.com/cart/" + id + "?serviceBarberId=" + body).then((response) => {
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
 	return axios.delete("https://barbers-community.herokuapp.com/cart/reset/" + id).then((response) => {
          dispatch({ type: "RESET_USER_CART", payload: response.data });
          //removeFromGuestCart(body)
	});

}

export const changeCartState = (id, body) => (dispatch) => {
    
     console.log("Body, servicebarberid ..= " + body);
	
 	return axios.put("https://barbers-community.herokuapp.com/cart/state/" + id, body).then((response) => {
          dispatch({ type: "CHANGE_CART_STATE", payload: response.data });
          //removeFromGuestCart(body)
	});

}

export const changeCartStateMercadoPago = (id, body) => (dispatch) => {
    
     console.log("Body, servicebarberid ..= " + body);
	
 	return axios.put("https://barbers-community.herokuapp.com/cart/state/payment/" + id, body).then((response) => {
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

export const getStatusAppointments = (status) => (dispatch) => {
	
	return axios.get(HOST_BACK + "/cart/state/" + status)
	.then((response) => {
	dispatch({ type: GET_STATUS_APPOINTMENTS, payload: response.data });
	});

}

export const changeOrderStatus = (cartId, body) => (dispatch) => {
    
    console.log("entra a la action");
    // console.log(body);
   
    return axios.put("https://barbers-community.herokuapp.com/cart/status/" + cartId, body).then((response) => {
         dispatch({ type: CHANGE_ORDER_STATUS, payload: response.data });
         //removeFromGuestCart(body)
   });

}

export const getLastFiveByClientId = (id) => (dispatch) => {
	
	return axios.get(HOST_BACK + "/cart/five/" + id)
	.then((response) => {
	dispatch({ type: GET_LAST_FIVE_CARTS_BY_CLIENT_ID, payload: response.data });
	});

}