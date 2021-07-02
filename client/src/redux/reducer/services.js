import { ADD_SERVICE_BARBER } from "../action/barbers"
import { GET_SERVICES, GET_BARBER_SERVICES, ADD_TO_APPOINTMENT, REMOVE_FROM_APPOINTMENT } from "../action/services"

const initialState = {
    array: [],
    services: []
}

const reducerServices = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return {
                ...state,
                array: action.payload
            }
        case GET_BARBER_SERVICES:
            return {
                ...state,
                array: action.payload
            }
        case ADD_SERVICE_BARBER:
                return {
                    ...state,
                    services: action.payload
                }
        default:
            return state
    }
}

export default reducerServices