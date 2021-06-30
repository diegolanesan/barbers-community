import {GET_ADMINS} from "../action/admin"

const initialState = {
    adminsStorage: [],
    adminsLoaded: [],
}

const adminsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADMINS:
            return {
                ...state,
                adminsStorage: action.payload,
                adminsLoaded: action.payload
            }
        default:
            return state
    }
}

export default adminsReducer