import {HOST_BACK} from "../back_constants/index";
import axios from "axios"
export const GET_BARBERS = 'GET_BARBERS'
export const FILTER_BARBERS = 'FILTER_BARBERS'

export const getBarbers = () => (dispatch) => axios.get('http://localhost:3001/barbers/all')
            .then(res => dispatch({type: GET_BARBERS, payload: res.data}))

export const filterBarbers = (filters) => (dispatch) => dispatch({type: FILTER_BARBERS, payload: filters})
