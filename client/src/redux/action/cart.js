import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_ACTIVE_CART_FROM_USER_ID = "GET_ACTIVE_CART_FROM_USER_ID";


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
    let localCart = getGuestCart() 
	// Si no está logueado
		return axios.post("http://localhost:3001/cart/addItem/" + id, body).then((response) => {
		console.log(response.data);
            dispatch({ type: "ADD_TO_CART", payload: response.data });
            //addToGuestCart(body)
	});
	
}

export const removeFromCart = (id, body) => (dispatch) => {
    
     console.log("Body, servicebarberid ..= " + body.serviceBarberId);
	
 	return axios.delete("http://localhost:3001/cart/" + id + "?serviceBarberId=" + body).then((response) => {
          dispatch({ type: "REMOVE_FROM_CART", payload: response.data });
          //removeFromGuestCart(body)
	});

}

export const getActiveCartFromUserId = (id) => (dispatch) => {
	
	return axios.get("http://localhost:3001/cart/active/" + id)
	.then((response) => {
	dispatch({ type: GET_ACTIVE_CART_FROM_USER_ID, payload: response.data });
	});

}

