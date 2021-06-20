import { GET_SERVICES, GET_BARBER_SERVICES, ADD_TO_APPOINTMENT, REMOVE_FROM_APPOINTMENT } from "../action/services"

const initialState = {
    array: [],
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

const reducerServices = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return {
                ...state,
                array: action.payload
            }
        case GET_BARBER_SERVICES:
            return {
                ...state,
                array: action.payload
            }
        case ADD_TO_APPOINTMENT:
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
                        id: [...state.services.id, action.payload.serviceBarber.id]
                    }
                }
            }
        if (action.payload.categories[0].name === "KIDHAIRCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        kids: [action.payload],
                        id: [...state.services.id, action.payload.serviceBarber.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "BEARDCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        beard: [action.payload],
                        id: [...state.services.id, action.payload.serviceBarber.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "HAIRCOLOR") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        color: [action.payload],
                        id: [...state.services.id, action.payload.serviceBarber.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "DESIGN") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        design: [action.payload],
                        id: [...state.services.id, action.payload.serviceBarber.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "OZON") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        ozon: [action.payload],
                        id: [...state.services.id, action.payload.serviceBarber.id]

                    }
                }
            }
            if (action.payload.categories[0].name === "MASK") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        mask: [action.payload],
                        id: [...state.services.id, action.payload.serviceBarber.id]

                    }
                }
            }
            

            case REMOVE_FROM_APPOINTMENT:
            console.log(action.payload.categories[0].name)
        if (action.payload.categories[0].name === "HAIRCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        haircut: []
                    }
                }
            }
        if (action.payload.categories[0].name === "KIDHAIRCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        kids: []
                    }
                }
            }
            if (action.payload.categories[0].name === "BEARDCUT") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        beard: []
                    }
                }
            }
            if (action.payload.categories[0].name === "HAIRCOLOR") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        color: []
                    }
                }
            }
            if (action.payload.categories[0].name === "DESIGN") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        design: []
                    }
                }
            }
            if (action.payload.categories[0].name === "OZON") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        ozon: []
                    }
                }
            }
            if (action.payload.categories[0].name === "MASK") {
                return {
                    ...state,
                    services: {
                        ...state.services,
                        mask: []
                    }
                }
            }
        default:
            return state
    }
}

export default reducerServices