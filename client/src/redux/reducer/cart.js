import {ADD_TO_CART, REMOVE_FROM_CART} from "../action/cart";

const initialState = {
    cart: [],
}

const reducerCart = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state, cart: action.payload
            }
        case REMOVE_FROM_CART:
            console.log(action.payload + " entra al reducer")
            return {
                ...state, cart: action.payload
            }
        default:
            return state
    }
}



export default reducerCart;