import {
    DELETE_BARBER, GET_BARBERS, POST_BARBER,
    PUT_BARBER, GET_BARBERS_BY_NAME, GET_BARBERS_BY_TYPE,
    FILTER_BARBERS
} from "../action/barbers"

// solo pruebas
// import barbers from "../../data.js"
// solo pruebas

const initialState = {
    barbersStorage: [],
    barbersLoaded: []
}

const barbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BARBERS:
            return {
                ...state,
                barbersStorage: action.payload,
                barbersLoaded: action.payload
            }
        case POST_BARBER:
            return {
                ...state,
                barbersLoaded: action.payload
            };
        case DELETE_BARBER:
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
        
        case FILTER_BARBERS:
            let aux = state.barbersStorage
            console.log(state.barbersStorage)
            if (action.payload.Proficiency) {
                for (let i = 0; i < state.barbersStorage.length; i++) {
                    aux = state.barbersStorage.filter(n => n.type === action.payload.Proficiency)
                }
            }
            switch (action.payload.order) {
                case "A-Z": aux = aux.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
                    break;
                case "Z-A": aux = aux.sort(function (a, b) {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                })
                    break;
                default:
                    break;
            }
            return {
                ...state,
                barbersLoaded: aux
            }
            // return {
            //     ...state
            // }
    

        case GET_BARBERS_BY_NAME:
            return {
                ...state,
                barbersLoaded: action.payload
            }
        case GET_BARBERS_BY_TYPE:
            return {
                ...state,
                barbersLoaded: action.payload
            }
        default:
            return state
    }
}

export default barbersReducer