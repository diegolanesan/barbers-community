import {
    APPOINTMENT_RELATION,
    GET_APPOINTMENT_BY_BARBER,
    GET_APPOINTMENT_DETAILS,
    POST_APPOINTMENT
} from "../action/appointment"

const initialState = {
    appointment: [],
    appointmentsById: [],
    appointmentDetails: {}
}

const appointmentReducer = (state = initialState, action) => {
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
        case GET_APPOINTMENT_DETAILS:
            let aux = state.appointmentsById.filter(n => n.appointmentId === Number(action.payload))
            return {
                ...state,
                appointmentDetails: {},
                appointmentDetails: aux[0]
            }
        default:
            return state
    }
}

export default appointmentReducer