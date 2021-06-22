import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import {
	SIGN_UP_BARBER,
	SIGN_IN_BARBER,
	SIGN_IN_CLIENT,
	LOAD_USER,
	SIGN_OUT,
	SIGN_IN_BARBER_GOOGLE,
} from "../action/auth";

const initialState = {
	token: localStorage.getItem("barberToken"), // Obtenido de localStorage
	barberUser: {},
	clientUser: {},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN_BARBER:
		case SIGN_IN_BARBER_GOOGLE:
		case SIGN_UP_BARBER:
		case LOAD_USER:
			toast("¡Welcome!", {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			const barber = jwtDecode(action.token);
			return {
				...state,
				// Con el token desencriptado, debería quedarme acá el objeto de Barbero con todos sus datos
				barberUser: barber,
			};
		case SIGN_IN_CLIENT:
			toast("¡Welcome!", {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			const client = jwtDecode(action.token);
			return {
				...state,
				// Con el token desencriptado, debería quedarme acá el objeto de Barbero con todos sus datos
				clientUser: client,
			};

		case SIGN_OUT:
			localStorage.clear();
			// localStorage.removeItem('barberToken')
			// localStorage.removeItem('clientToken')
			toast("Sign out successfully", {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return {
				...state,
				barberUser: {},
				clientUser: {},
			};

		default:
			return state;
	}
};

export default authReducer;
