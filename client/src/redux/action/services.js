import axios from 'axios'
import {HOST_BACK} from "../back_constants/index";
export const GET_SERVICES = 'GET_SERVICES'
export const GET_BARBER_SERVICES = 'GET_BARBER_SERVICES'
export const ADD_TO_APPOINTMENT = "ADD_TO_APPOINTMENT";
export const REMOVE_FROM_APPOINTMENT = "REMOVE_FROM_APPOINTMENT";

export const getServices = () => (dispath) => {
    axios.get(HOST_BACK + '/admin/service/')
            .then(res => dispath({type: GET_SERVICES, payload: res.data}))
}

export const getBarberServices = (id) => (dispath) => {
    axios.get(HOST_BACK + '/admin/service/barbers/'+ id)
            .then(res => dispath({type: GET_BARBER_SERVICES, payload: res.data}))
}

export const addToAppointment = (payload) => (dispatch) => {
	dispatch({ type: ADD_TO_APPOINTMENT, payload})
}

export const removeFromAppointment = (payload) => (dispatch) => {
	dispatch({ type: REMOVE_FROM_APPOINTMENT, payload})
}