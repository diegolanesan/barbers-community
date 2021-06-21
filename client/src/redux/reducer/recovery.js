import { SEND_EMAIL_BARBER, SEND_EMAIL_BARBER_SUCCESS,SEND_EMAIL_BARBER_FAIL } from "../action/recovery"

const initialState = {
    loading: false,
    resp: false,
    err: false,
}

const reducerRecovery= (state=initialState, action)=>{
    switch (action.type) {
        case SEND_EMAIL_BARBER:
            return {
                ...state, loading: true
            }
        case SEND_EMAIL_BARBER_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case SEND_EMAIL_BARBER_FAIL :
            return {
                ...state, err: action.payload , loading: false
            }
        default:
            return state
    }
}

export default reducerRecovery;