import {
    GET_BARBER_REVIEWS,
    POST_REVIEWS,

} from "../action/reviews"

const initialState = {
    barberReviews: [],
    postReview: []
}

const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BARBER_REVIEWS:
            console.log(action.payload)
            return {
                ...state,
                barberReviews: action.payload
            }
        case POST_REVIEWS:
            console.log(action.payload)
            return {
                ...state,
                postReview: action.payload
            }
        default:
            return state
    }
}

export default appointmentReducer