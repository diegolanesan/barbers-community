import {GET_ADMINS, VALIDATION} from "../action/admin"

const initialState = {
    adminsStorage: [],
    adminsLoaded: [],
    validationCode: false
}

const adminsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADMINS:
            return {
                ...state,
                adminsStorage: action.payload,
                adminsLoaded: action.payload
            }
        case VALIDATION:
            return {
                ...state,
                validationCode: action.payload,
            }
        default:
            return state
    }
}

export default adminsReducer