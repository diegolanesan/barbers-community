import { GET_HAIRTYPES, GET_FACETYPES } from "../action/types"

const initialState = {
    hair: [],
    face: []
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
    
        default:
            return state
    }
}

export default reducerTypes