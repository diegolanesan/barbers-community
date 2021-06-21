import { GET_HAIRTYPES, GET_FACETYPES, GET_STYLES } from "../action/types"

const initialState = {
    hair: [],
    face: [],
    style: []
}

const reducerTypes = (state = initialState, action) => {
    switch (action.type) {
        case GET_HAIRTYPES:
            return {
                ...state,
                hair: action.payload
            }
        case GET_FACETYPES:
            return {
                ...state,
                face: action.payload
            }
        case GET_STYLES:
            return {
                ...state,
                style: action.payload
            }
    
        default:
            return state
    }
}

export default reducerTypes