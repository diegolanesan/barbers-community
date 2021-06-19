import { toast } from 'react-toastify'
import jwtDecode from 'jwt-decode'
import { SIGN_UP_BARBER, BARBER_LOADED, SIGN_IN_BARBER, SIGN_OUT_BARBER } from "../action/auth"

const initialState = {
    token: localStorage.getItem("barberToken"), // Obtenido de localStorage
    barberUser: {} // Chequear si no es conveniente solo guardarse los datos para autenticar el barbero (mail y password)

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case BARBER_LOADED:
        case SIGN_IN_BARBER:
        case SIGN_UP_BARBER:
            toast("¡Welcome!", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            const barber = jwtDecode(action.token)
            return {
                ...state,
                // Con el token desencriptado, debería quedarme acá el objeto de Barbero con todos sus datos
                barberUser: barber
            }
        
        case SIGN_OUT_BARBER:
            localStorage.removeItem('barberToken')
            toast("Sign out successfully", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return {
                ...state,
                barberUser: {}
            }
            
        default:
            return state
    }
}

export default authReducer