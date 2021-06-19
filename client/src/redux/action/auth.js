import { HOST_BACK } from "../back_constants/index"
import axios from "axios"
import {toast} from 'react-toastify'
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const SIGN_UP_BARBER = "SIGN_UP_BARBER"
export const BARBER_LOADED = "BARBER_LOADED"
export const SIGN_IN_BARBER = "SIGN_IN_BARBER"
export const SIGN_OUT_BARBER = "SIGN_OUT_BARBER"


export const signUpBarber = (barberUser) => (dispatch) => {
    axios.post(HOST_BACK + "/barbers/", barberUser)
    .then( token => {
        localStorage.setItem('barberToken', token.data)

        dispatch({type: SIGN_UP_BARBER, token: token.data})
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

export const loadBarber = () => (dispatch, getState) => {
    // Agregar useSelector en App para que funcione
    const token = getState().auth.token // Recuperamos el token de otro estado de Redux
    if(token) {
        dispatch({type: BARBER_LOADED, token})
    } else {
        return null
    }
}

export const signInBarber = (creds)=> (dispatch) => {
    axios.post(HOST_BACK + "/barbers/login", creds) // Verificar ruta de login
    .then( token => {
        localStorage.setItem('barberToken', token.data)

        dispatch({type: SIGN_IN_BARBER, token: token.data})
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}


export const signOutBarber = () => (dispatch) => {
    dispatch({
        type: SIGN_OUT_BARBER
    })
}

