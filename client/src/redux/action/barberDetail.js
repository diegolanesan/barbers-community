import {BARBER_DETAIL, BARBER_DETAIL_SUCCESS, BARBER_DETAIL_FAIL} from "../constants/barberDetail";
import {HOST_BACK} from "../back_constants/index";
import axios from "axios";


export const barberDetail = (id)=>(dispatch)=>{
    dispatch({type:BARBER_DETAIL});
    axios.get(HOST_BACK + "/barbers/id/" + id)
    .then((resp) => dispatch({type:BARBER_DETAIL_SUCCESS, payload:resp.data}),)
    .catch((err) => dispatch({type:BARBER_DETAIL_FAIL, payload: err}))
}
