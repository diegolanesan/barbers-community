import {
    APPOINTMENT_RELATION,
    GET_APPOINTMENT_BY_BARBER,
    POST_APPOINTMENT
} from "../action/appointment"

const initialState = {
    appointment: [],
    appointmentsById: []
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
        case GET_APPOINTMENT_BY_BARBER:
            console.log(action.payload)
            return {
                ...state,
                appointmentsById: action.payload.json
            }
        default:
            return state
    }
}

export default appointmentReduer