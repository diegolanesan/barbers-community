import {BARBER_DETAIL} from "../constants/barberDetail";

const initialState = {
    resp: {},
}

const reducerBarberDetail = (state=initialState, action)=>{
    switch (action.type) {
        case BARBER_DETAIL:
            return {
                ...state, resp: action.payload
            }
        default:
            return state
    }
}

export default reducerBarberDetail;