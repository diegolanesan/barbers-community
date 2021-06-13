import {
    DELETE_BARBER, GET_BARBERS, POST_BARBER,
    PUT_BARBER, GET_BARBERS_BY_NAME, GET_BARBERS_BY_TYPE
} from "../action/barbers"

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
        case POST_BARBER:
            {console.log("Aaaaaaaaaaaaaa")}
            return {
                ...state,
                barbersLoaded: action.payload
            };
        case DELETE_BARBER:
            {console.log("Aaaaaaaaaaaaaa")}
            return {
                ...state,
                barbersLoaded: state.barbersLoaded.filter((barber) => barber.id !== action.payload)
            }
        case PUT_BARBER:
            return {
                ...state,
                barbersLoaded: state.barbersLoaded.map((barber) => {
                    if (action.payload.id === barber.id) {
                        barber = {
                            ...barber,
                            ...action.payload,
                        }
                    }
                    return barber;
                })
            }
        default:
            return state
    }
}

export default barbersReducer