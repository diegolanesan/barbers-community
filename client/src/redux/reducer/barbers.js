import {
    DELETE_BARBER, GET_BARBERS, POST_BARBER,
    PUT_BARBER, GET_BARBERS_BY_NAME, GET_BARBERS_BY_TYPE,
    FILTER_BARBERS,
    GET_BARBER_BY_ID, REMOVE_SERVICE_BARBER,
    ADD_SERVICE_BARBER
} from "../action/barbers"

const initialState = {
    barbersStorage: [],
    barbersLoaded: [],
    barberDetail: {},
    services: {
        haircut: [],
        kids: [],
        beard: [],
        color: [],
        ozon: [],
        design: [],
        mask: [],
        barber: [],
        id: []
    }
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
            if (action.payload.type) {
                aux = state.barbersStorage.filter(n => n.type === action.payload.type)
            }
            else aux = state.barbersStorage
            if (action.payload.category) {
                aux = aux.filter(m => m.categoryBarber.includes(action.payload.category))
            }
            if (action.payload.sytle) {
                aux = aux.filter(m => m.styleBarber.includes(action.payload.style))  
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
        case GET_BARBER_BY_ID:
            return {
                ...state,
                barberDetail: action.payload
            }
        case ADD_SERVICE_BARBER:
            if (action.payload.email) {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        barber: [action.payload]
                    }
                }
            }
            if (action.payload.categories[0].name === "HAIRCUT") {
            //console.log(action.payload)
            console.log(action.payload.serviceBarber)
                return {
                    ...state,
                    services: {
                        ...state.services,
                        haircut: [action.payload],
                        id: [...state.services.id, action.payload.id]
                    }
                }
            }
        if (action.payload.categories[0].name === "KIDHAIRCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        kids: [action.payload],
                        id: [...state.services.id, action.payload.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "BEARDCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        beard: [action.payload],
                        id: [...state.services.id, action.payload.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "HAIRCOLOR") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        color: [action.payload],
                        id: [...state.services.id, action.payload.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "DESIGN") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        design: [action.payload],
                        id: [...state.services.id, action.payload.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "OZON") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        ozon: [action.payload],
                        id: [...state.services.id, action.payload.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "MASK") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        mask: [action.payload],
                        id: [...state.services.id, action.payload.id]

                    }
                }
            }
            case REMOVE_SERVICE_BARBER:
            console.log(action.payload.categories[0].name)
        if (action.payload.categories[0].name === "HAIRCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        haircut: [],
                        id: []
                    }
                }
            }
        if (action.payload.categories[0].name === "KIDHAIRCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        kids: [],
                        id: []
                    }
                }
            }
            if (action.payload.categories[0].name === "BEARDCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        beard: [],
                        id: []
                    }
                }
            }
            if (action.payload.categories[0].name === "HAIRCOLOR") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        color: [],
                        id: []
                    }
                }
            }
            if (action.payload.categories[0].name === "DESIGN") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        design: [],
                        id: []
                    }
                }
            }
            if (action.payload.categories[0].name === "OZON") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        ozon: [],
                        id: []
                    }
                }
            }
            if (action.payload.categories[0].name === "MASK") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        mask: [],
                        id: []
                    }
                }
            }
        default:
            return state
    }
}

export default barbersReducer