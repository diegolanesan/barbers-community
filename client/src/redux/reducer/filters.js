import {
    SET_FILTERS,
} from "../action/filters";
import {GET_BARBERS} from '../action/barbers';

const initialState = {
    filters: [],

}

const filtersReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_FILTERS:
            return {
                ...state,
                filters: action.payload             
            }
        case GET_BARBERS:
            return {
                ...state,
                filters: action.payload
            }
        default:
            return state
    }
}



export default filtersReducer;