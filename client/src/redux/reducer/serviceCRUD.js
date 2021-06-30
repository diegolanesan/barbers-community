import { DELETE_SERVICES_CRUD, DELETE_SERVICES_CRUD_FAIL, DELETE_SERVICES_CRUD_SUCCESS, POST_SERVICES_CRUD, POST_SERVICES_CRUD_FAIL, POST_SERVICES_CRUD_SUCCESS, PUT_SERVICES_CRUD, PUT_SERVICES_CRUD_FAIL, PUT_SERVICES_CRUD_SUCCESS } from "../action/servicesCRUD"

const initialState = {
    loading: false,
    resp: [],
    err: false,
}

const reducerServiceCRUD= (state=initialState, action)=>{
    switch (action.type) {
        case  POST_SERVICES_CRUD:
            return {
                ...state, loading: true
            }
        case POST_SERVICES_CRUD_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case  POST_SERVICES_CRUD_FAIL:
            return {
                ...state, err: action.payload , loading: false
            }
        case  PUT_SERVICES_CRUD:
            return {
                ...state, loading: true
            }
        case PUT_SERVICES_CRUD_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case  PUT_SERVICES_CRUD_FAIL :
            return {
                ...state, err: action.payload , loading: false
            }
        case  DELETE_SERVICES_CRUD:
            return {
                ...state, loading: true
            }
        case DELETE_SERVICES_CRUD_SUCCESS:
            return {
                ...state, resp: action.payload , loading: false
            }
        case  DELETE_SERVICES_CRUD_FAIL :
            return {
                ...state, err: action.payload , loading: false
            }
        default:
            return state
    }
}

export default reducerServiceCRUD;