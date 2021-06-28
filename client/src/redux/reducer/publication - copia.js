import {CREATE_PUBLICATION, CREATE_PUBLICATION_SUCCESS, CREATE_PUBLICATION_FAIL} from "../constants/publication";

const initialState = {
    loading: false,
    resp: false,
    err: false,
}

const reducerPublication = (state=initialState, action)=>{
    switch (action.type) {
        case CREATE_PUBLICATION:
            return {
                ...state, loading: true
            }
        case CREATE_PUBLICATION_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case CREATE_PUBLICATION_FAIL:
            return {
                ...state, err: action.payload , loading: false
            }
        default:
            return state
    }
}

export default reducerPublication;