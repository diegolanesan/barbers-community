import {
    DELETE_ADMIN, GET_ADMINS, POST_ADMIN,
    PUT_ADMIN, GET_ADMINS_BY_NAME,
    GET_ADMIN_BY_ID,
} from "../action/admin"

const initialState = {
    adminsStorage: [],
    adminsLoaded: [],
    adminDetail: {},
}

const adminsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADMINS:
            return {
                ...state,
                adminsStorage: action.payload,
                adminsLoaded: action.payload
            }
        case POST_ADMIN:
            return {
                ...state,
                adminsLoaded: action.payload
            };
        case DELETE_ADMIN:
            return {
                ...state,
                adminsLoaded: state.adminsLoaded.filter((admin) => admin.id !== action.payload)
            }
        case PUT_ADMIN:
            return {
                ...state,
                adminsLoaded: state.adminsLoaded.map((admin) => {
                    if (action.payload.id === admin.id) {
                        admin = {
                            ...admin,
                            ...action.payload,
                        }
                    }
                    return admin;
                })
            }
        case GET_ADMINS_BY_NAME:
            return {
                ...state,
                adminsLoaded: action.payload
            }
        case GET_ADMIN_BY_ID:
            return {
                ...state,
                adminDetail: action.payload
            }
        default:
            return state
    }
}

export default adminsReducer