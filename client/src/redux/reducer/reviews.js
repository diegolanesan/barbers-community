import {
    GET_BARBER_REVIEWS,

} from "../action/reviews"

const initialState = {
    barberReviews: [],
    appointmentsById: [],
    appointmentDetails: {}
}

const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BARBER_REVIEWS:
            console.log(action.payload)
            return {
                ...state,
                barberReviews: action.payload
            }
        default:
            return state
    }
}

export default appointmentReducer