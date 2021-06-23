import {ADD_TO_CART, REMOVE_FROM_CART, GET_ACTIVE_CART_FROM_USER_ID} from "../action/cart";

const initialState = {
    cart: [],
    gessCart: [],
    activeCart: {}
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
        case GET_ACTIVE_CART_FROM_USER_ID: 
            return {
                ...state,
                activeCart: action.payload
            }
        default:
            return state
    }
}



export default reducerCart;