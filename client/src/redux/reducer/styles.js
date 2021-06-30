import { POST_STYLE, POST_STYLE_SUCCESS, POST_STYLE_FAIL, PUT_STYLE, PUT_STYLE_SUCCESS, PUT_STYLE_FAIL, DELETE_STYLE, DELETE_STYLE_SUCCESS, DELETE_STYLE_FAIL } from "../action/style";

const initialState = {
    loading: false,
    resp: [],
    err: false,
}

const reducerStyle= (state=initialState, action)=>{
    switch (action.type) {
        case  POST_STYLE:
            return {
                ...state, loading: true
            }
        case POST_STYLE_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case  POST_STYLE_FAIL :
            return {
                ...state, err: action.payload , loading: false
            }
        case  PUT_STYLE:
            return {
                ...state, loading: true
            }
        case PUT_STYLE_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case  PUT_STYLE_FAIL :
            return {
                ...state, err: action.payload , loading: false
            }
        case  DELETE_STYLE:
            return {
                ...state, loading: true
            }
        case DELETE_STYLE_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case  DELETE_STYLE_FAIL :
            return {
                ...state, err: action.payload , loading: false
            }
        default:
            return state
    }
}

export default reducerStyle;