import {BARBER_DETAIL, BARBER_DETAIL_SUCCESS, BARBER_DETAIL_FAIL} from "../constants/barberDetail";

const initialState = {
    loading: false,
    resp: false,
    err: false,
}

const reducerBarberDetail = (state=initialState, action)=>{
    switch (action.type) {
        case BARBER_DETAIL:
            return {
                ...state, loading: true
            }
        case BARBER_DETAIL_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case BARBER_DETAIL_FAIL:
            return {
                ...state, err: action.payload , loading: false
            }
        default:
            return state
    }
}

export default reducerBarberDetail;