import { HOST_BACK } from "../back_constants/index"
import axios from "axios"
import {toast} from 'react-toastify'
export const SIGN_UP_BARBER = "SIGN_UP_BARBER"
export const SIGN_IN_BARBER = "SIGN_IN_BARBER"
export const SIGN_UP_CLIENT = "SIGN_UP_CLIENT"
export const SIGN_IN_CLIENT = "SIGN_IN_CLIENT"
export const BARBER_LOADED = "BARBER_LOADED"
export const SIGN_OUT = "SIGN_OUT"

// ------------------------------  BARBER AUTHENTICATION --------------------------------------- //

export const signUpBarber = (barberUser) => (dispatch) => {
    axios.post(HOST_BACK + "/barbers/", barberUser)
    .then( token => {
        localStorage.setItem('barberToken', JSON.stringify(token.data))

        dispatch({type: SIGN_UP_BARBER, token: token.data})
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

export const signInBarber = (creds)=> (dispatch) => {
    axios.post(HOST_BACK + "/barbers/login", creds) // Verificar ruta de login
    .then( token => {
        console.log(token.data.token)
        localStorage.setItem('barberToken', JSON.stringify(token.data.token))

        dispatch({type: SIGN_IN_BARBER, token: token.data.token})
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

// ------------------------------  CLIENT AUTHENTICATION --------------------------------------- //


export const signUpClient = (clientUser) => (dispatch) => {
    axios.post(HOST_BACK + "/clients/add", clientUser)
    .then( res => {
        console.log(res.data.token)
        localStorage.setItem('clientToken', JSON.stringify(res.data.token))

        dispatch({type: SIGN_UP_CLIENT, token: res.data.token})
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

export const signInClient = (creds) => (dispatch) => {
    axios.post(HOST_BACK + "/clients/login", creds) // Verificar ruta de login
    .then( token => {
        console.log(token.data.token)
        localStorage.setItem('clientToken', JSON.stringify(token.data.token))

        dispatch({type: SIGN_IN_CLIENT, token: token.data.token})
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}


// -------------------------------------- COMMON AUTH ACTIONS ----------------------------------- //

export const loadUser = () => (dispatch, getState) => {
    // Agregar useSelector en App para que funcione
    const token = getState().auth.token // Recuperamos el token de otro estado de Redux
    if(token) {
        dispatch({type: BARBER_LOADED, token})
    } else {
        return null
    }
}

export const signOut = () => (dispatch) => {
    dispatch({
        type: SIGN_OUT
    })
}

