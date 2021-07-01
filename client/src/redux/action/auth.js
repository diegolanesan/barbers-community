import { HOST_BACK } from "../back_constants/index"
import axios from "axios"
import {toast} from 'react-toastify'
import { addToCart } from "./cart"
import jwtDecode from "jwt-decode"
export const SIGN_UP_BARBER = "SIGN_UP_BARBER"
export const SIGN_IN_BARBER = "SIGN_IN_BARBER"
export const SIGN_IN_BARBER_GOOGLE = "SIGN_IN_BARBER_GOOGLE"
export const SIGN_UP_CLIENT = "SIGN_UP_CLIENT"
export const SIGN_IN_CLIENT = "SIGN_IN_CLIENT"
export const LOAD_USER = "LOAD_USER"
export const SIGN_OUT = "SIGN_OUT"


// ------------------------------  BARBER AUTHENTICATION --------------------------------------- //

export const signUpBarber = (barberUser) => (dispatch) => {
    axios.post(HOST_BACK + "/barbers/", barberUser)
        .then(async token => {
        
        localStorage.setItem('barberToken', JSON.stringify(token.data))
        // let localStorageCart = await JSON.parse(localStorage.getItem('cart'))
        //     if (localStorageCart) {
        //     let user = jwtDecode(token)
        //     localStorageCart.items?.map(async(i)=> addToCart(user.id, {serviceBarberId: i.serviceBarberId, price: i.price, name: i.name}))
        // }    
        dispatch({type: SIGN_UP_BARBER, token: token.data})
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

export const signInBarber = (history, creds)=> (dispatch) => {
    axios.post(HOST_BACK + "/barbers/login", creds) 
    .then( token => {
        console.log(token.data.token)
        localStorage.setItem('barberToken', JSON.stringify(token.data.token))

        dispatch({type: SIGN_IN_BARBER, token: token.data.token})
        history.push("/barbers/dashboard")
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

export const signInBarberWithGoogle = (history, userData)=> (dispatch) => {
    axios.post(HOST_BACK + "/barbers/login/google", userData) 
    .then( token => {
        localStorage.setItem('barberToken', JSON.stringify(token.data.token))

        dispatch({type: SIGN_IN_BARBER_GOOGLE, token: token.data.token})
        history.push("/barbers/dashboard")
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

// ------------------------------  CLIENT AUTHENTICATION --------------------------------------- //


export const signUpClient = (clientUser) => async (dispatch) => {
    axios.post(HOST_BACK + "/clients/add", clientUser)
    .then(async res => {
        console.log(res.data.token)
        localStorage.setItem('clientToken', JSON.stringify(res.data.token))
        let localStorageCart = await JSON.parse(localStorage.getItem('cart'))
            if (localStorageCart) {
            let user = jwtDecode(res.data.token)
            localStorageCart.items?.map(async(i)=> addToCart(user.id, {serviceBarberId: i.serviceBarberId, price: i.price, name: i.name}))
        }    
        dispatch({type: SIGN_UP_CLIENT, token: res.data.token})
        
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

export const signInClient = (creds, history) => (dispatch) => {
    axios.post(HOST_BACK + "/clients/login", creds)
    .then(async token => {
        
        localStorage.setItem('clientToken', JSON.stringify(token.data.token))
        let localStorageCart = JSON.parse(localStorage.getItem('cart'))
        
        if (localStorageCart) {
            let user = await jwtDecode(token.data.token)
            
            localStorageCart.items?.map((i) => {
                return dispatch(addToCart(user.id, i))
            })
        }  
        dispatch({type: SIGN_IN_CLIENT, token: token.data.token})
        let user = await jwtDecode(token.data.token)
        if(user.rol === "client") history.push("/clients/dashboard")
        else history.push("/admin/dashboard")
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}

export const signInClientWithGoogle = (history, userData)=> (dispatch) => {
    axios.post(HOST_BACK + "/clients/login/google", userData) 
    .then( token => {
        localStorage.setItem('clientToken', JSON.stringify(token.data.token))

        dispatch({type: SIGN_IN_BARBER_GOOGLE, token: token.data.token})
        history.push("/clients/dashboard")
    })
    .catch( error => {
        console.log(error.response)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    })
}


// -------------------------------------- COMMON AUTH ACTIONS ----------------------------------- //

export const loadUser = () => (dispatch) => {
    const token = localStorage.getItem("clientToken") // Recuperamos el token de otro estado de Redux
    if(token) {
        dispatch({type: LOAD_USER, token: token})
    } else {
        return null
    }
}

export const signOut = (history) => (dispatch) => {
    dispatch({
        type: SIGN_OUT
    })
    history.push("/")
}

