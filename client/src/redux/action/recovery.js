import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const SEND_EMAIL_BARBER = "SEND_EMAIL_BARBER";
export const SEND_EMAIL_BARBER_SUCCESS = "SEND_EMAIL_BARBER_SUCCESS";
export const SEND_EMAIL_BARBER_FAIL = "SEND_EMAIL_BARBER_FAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL";

export const sendEmailBarber= (email)=>(dispatch)=>{
    dispatch({type: SEND_EMAIL_BARBER})
    axios
    .post(HOST_BACK + '/email/recoveryBarber', email)
    .then(
        (resp)=> {dispatch({type: SEND_EMAIL_BARBER_SUCCESS, payload: resp.data})},
        (err)=>  {dispatch({type:SEND_EMAIL_BARBER_FAIL, payload: err.message})}
    )
}

export const sendChangePassword = (payload) =>(dispatch) => {
    dispatch({type: CHANGE_PASSWORD})
    axios
    .put(`${HOST_BACK}/barbers/` + payload.id, payload)
		.then((response) => {
			console.log(response.data);
			dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: response.data });
		})
}