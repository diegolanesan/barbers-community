import {DELETE_CLIENT, GET_CLIENT, GET_APPOINTMENTS_BY_CLIENT_ID, GET_CLIENT_BY_ID, GET_CLIENT_BANNED} from "../action/clients"

const initialState = {
    appointments: [],
    clientsLoaded: [],
    clientDetail: [],
    bannedClient: []
}

const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_APPOINTMENTS":
            return {
                ...state,
                appointments: action.payload
            }
        case GET_CLIENT:
            return {
                ...state,
                clientsLoaded: action.payload
            }
        case GET_CLIENT_BANNED:
            return {
                ...state,
                bannedClient: action.payload
            }
        case DELETE_CLIENT:
            return {
                ...state,
                clientsLoaded: state.clientsLoaded.filter((client) => client.id !== action.payload)
            }
        case GET_APPOINTMENTS_BY_CLIENT_ID:
            return {
                ...state,
                appointments: action.payload
            }
        case GET_CLIENT_BY_ID:
        return {
            ...state,
            clientDetail: action.payload
        }
        default:
            return state
    }
}

export default clientsReducer