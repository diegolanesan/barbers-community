const initialState = {
    appointments: [],
}

const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_APPOINTMENTS":
            return {
                ...state,
                appointments: action.payload
            }

        default:
            return state
    }
}

export default clientsReducer