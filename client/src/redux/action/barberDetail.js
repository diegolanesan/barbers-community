import {BARBER_DETAIL, BARBER_DETAIL_SUCCESS, BARBER_DETAIL_FAIL} from "../constants/barberDetail";
import {HOST_BACK} from "../back_constants/index";


export const barberDetail = (id)=>(dispatch)=>{
    dispatch({type:BARBER_DETAIL});
    fetch(HOST_BACK + "/barberDetail" + id)
    .then(
        (resp) => dispatch({type:BARBER_DETAIL_SUCCESS, payload:resp}),
        (err) => dispatch({type:BARBER_DETAIL_FAIL, payload: err})
    )
}