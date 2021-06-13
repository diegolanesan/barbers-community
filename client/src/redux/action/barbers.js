import {HOST_BACK} from "../back_constants/index";
import axios from "axios"
export const GET_BARBERS = 'GET_BARBERS'
export const FILTER_BARBERS = 'FILTER_BARBERS'
export const GET_BARBERS_BY_NAME = 'GET_BARBERS_BY_NAME'
export const GET_BARBERS_BY_TYPE = 'GET_BARBERS_BY_TYPE'

export const getBarbers = () => (dispatch) => axios.get('http://localhost:3001/barbers/all')
            .then(res => dispatch({type: GET_BARBERS, payload: res.data}))

export const filterBarbers = (filters) => (dispatch) => dispatch({type: FILTER_BARBERS, payload: filters})

//export const getBarbers = () => (dispath) => {
//    axios.get(HOST_BACK + "/barbers/all/")
//    .then(resp => dispath({type: GET_BARBERS, payload: resp.data}))}


export const getBarbersByName = (name) => (dispath) => {
    axios.get(HOST_BACK + "/barbers/name/" + name)
        .then(res => dispath({type: GET_BARBERS_BY_NAME, payload: res.data})
        )}

export const getBarbersByType = (type) => (dispath) => {
    axios.get(HOST_BACK + "/barbers/type/" + type)
        .then(res => dispath({type: GET_BARBERS_BY_TYPE, payload: res.data})
        )}