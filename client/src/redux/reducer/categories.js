import { 
    POST_CATEGORY,
    POST_CATEGORY_SUCCESS,
    POST_CATEGORY_FAIL,
    PUT_CATEGORY,
    PUT_CATEGORY_SUCCESS,
    PUT_CATEGORY_FAIL,
    DELETE_CATEGORY,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    GET_CATEGORY,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAIL} from "../action/categories";

const initialState = {
    loading: false,
    resp: [],
    err: false,
}

const reducerCategory = (state=initialState, action)=>{
    switch (action.type) {
        case POST_CATEGORY:
            return {
                ...state, loading: true
            }
        case POST_CATEGORY_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case POST_CATEGORY_FAIL:
            return {
                ...state, err: action.payload , loading: false
            }
         case PUT_CATEGORY:
            return {
                ...state, loading: true
            }
        case PUT_CATEGORY_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case PUT_CATEGORY_FAIL:
            return {
                ...state, err: action.payload , loading: false
            }
        case DELETE_CATEGORY:
            return {
                ...state, loading: true
            }
        case DELETE_CATEGORY_SUCCESS:
            console.log('sebbbaaa', action.payload)
            return {
                ...state, resp: action.payload , loading: false
            }
        case DELETE_CATEGORY_FAIL:
            return {
                ...state, err: action.payload , loading: false
            }
        case GET_CATEGORY:
            return {
                ...state, loading: true
            }
        case GET_CATEGORY_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case GET_CATEGORY_FAIL:
        return {
            ...state, err: action.payload , loading: false
        }
        default:
            return state
    }
}

export default reducerCategory;