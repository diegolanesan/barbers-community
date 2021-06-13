import {HOST_BACK} from "../back_constants/index";
import axios from "axios"
export const GET_BARBERS = 'GET_BARBERS'
export const POST_BARBER = 'POST_BARBER'
export const DELETE_BARBER = 'DELETE_BARBER'
export const PUT_BARBER = 'PUT_BARBER'

export const postBarber = (body) => (dispatch) => {
    console.log("aaaaaa", body)
        return axios.post("http://localhost:3001/barbers/", body)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "POST_BARBER", payload: response.data })
            })
};

export const deleteBarber = (id) => (dispatch) => {
    console.log("aaaaaa", id)
        return axios.delete("http://localhost:3001/barbers/" + id)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "DELETE_BARBER", payload: response.data })
            })
};

export const putBarber = (id, body) => (dispatch) => {
    console.log("aaaaaa", body)
        return axios.put("http://localhost:3001/barbers/" + id, body)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "PUT_BARBER", payload: response.data })
            })
};
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
