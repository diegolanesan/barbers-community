import { GET_BARBERS, GET_BARBERS_BY_NAME, GET_BARBERS_BY_TYPE } from "../action/barbers"

// solo pruebas
// import barbers from "../../data.js"
// solo pruebas

const initialState = {
    barbersLoaded: []
}

const barbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BARBERS:
            return {
                ...state,
                barbersLoaded: action.payload
            }
        default:
            return state
    }
}

export default barbersReducer