import {
    ADD_TO_CART, REMOVE_FROM_CART, GET_ACTIVE_CART_FROM_USER_ID,
    RESET_USER_CART, CHANGE_CART_STATE, CHANGE_CART_STATE_MERCADO_PAGO,
    GET_CARTS_BY_BARBER_ID, GET_CARTS_BY_USER, GET_STATUS_APPOINTMENTS, CHANGE_ORDER_STATUS
} from "../action/cart";

const initialState = {
    cart: [],
    gessCart: [],
    activeCart: {},
    statusAppoinments: [],
    barberAppointments: [],
    clientsAppointments: []
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
        case RESET_USER_CART: 
            return {
                ...state,
                activeCart: action.payload
            }
        case CHANGE_CART_STATE: 
            return {
                ...state,
                activeCart: action.payload
            }
        case CHANGE_CART_STATE_MERCADO_PAGO: 
            return {
                ...state,
                activeCart: action.payload
            }
        case GET_CARTS_BY_BARBER_ID: 
            return {
                ...state,
                barberAppointments: action.payload
            }
        case GET_CARTS_BY_USER:
            // console.log(action.payload)
        return {
            ...state,
            clientsAppointments: action.payload
        }
        case GET_STATUS_APPOINTMENTS: 
        return {
            ...state,
            statusAppoinments: action.payload
        }
        case CHANGE_ORDER_STATUS:
            return state
        default:
            return state
    }
}



export default reducerCart;