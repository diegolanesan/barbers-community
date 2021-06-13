import {HOST_BACK} from "../back_constants/index";
import axios from "axios"
export const GET_BARBERS = 'GET_BARBERS'
export const GET_BARBERS_BY_NAME = 'GET_BARBERS_BY_NAME'
export const GET_BARBERS_BY_TYPE = 'GET_BARBERS_BY_TYPE'

export const getBarbers = () => (dispath) => {
    axios.get(HOST_BACK + "/barbers/all/")
    .then(resp => dispath({type: GET_BARBERS, payload: resp.data}))}


export const getBarbersByName = (name) => (dispath) => {
    axios.get(HOST_BACK + "/barbers/name/" + name)
        .then(res => dispath({type: GET_BARBERS_BY_NAME, payload: res.data})
        )}

export const getBarbersByType = (type) => (dispath) => {
    axios.get(HOST_BACK + "/barbers/type/" + type)
        .then(res => dispath({type: GET_BARBERS_BY_TYPE, payload: res.data})
        )}
