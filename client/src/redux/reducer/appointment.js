import {
    APPOINTMENT_RELATION,
    POST_APPOINTMENT
} from "../action/appointment"

const initialState = {
    appointment: [],
}

const appointmentReduer = (state = initialState, action) => {
    switch (action.type) {
        case APPOINTMENT_RELATION:
            return {
                ...state,
                appointment: action.payload
            }
        case POST_APPOINTMENT:
            return {
                ...state,
                appointment: action.payload
            };
        default:
            return state
    }
}