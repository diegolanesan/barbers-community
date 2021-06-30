import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const SET_FILTERS = "SET_FILTERS"

export const setFilters = (filter) => (dispatch) => {
    dispatch({type: SET_FILTERS, payload: filter})
}

