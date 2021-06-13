<<<<<<< Updated upstream
import { GET_BARBERS, GET_BARBERS_BY_NAME, GET_BARBERS_BY_TYPE } from "../action/barbers"
=======
import { FILTER_BARBERS, GET_BARBERS } from "../action/barbers"
>>>>>>> Stashed changes

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
        
        case FILTER_BARBERS:
            let aux = state.barbersLoaded
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
    
        default:
            return state
    }
}

export default barbersReducer