import {HOST_BACK} from "../back_constants/index";
import axios from "axios"
export const GET_BARBERS = 'GET_BARBERS'

export const getBarbers = () => (dispath) => {
    axios.get(HOST_BACK + "/barbers/all/")
    .then(resp => dispath({type: GET_BARBERS, payload: resp.data}))}
