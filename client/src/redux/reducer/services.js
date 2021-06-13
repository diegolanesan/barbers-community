import { GET_SERVICES } from "../action/services"

const initialState = {
    array: []
}

const reducerServices = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return {
                ...state,
                array: action.payload
            }
    
        default:
            return state
    }
}

export default reducerServices