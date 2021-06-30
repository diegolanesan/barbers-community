import {BARBER_DETAIL} from "../constants/barberDetail";
import {HOST_BACK} from "../back_constants/index";
import axios from "axios";


export const barberDetail = (id)=>(dispatch)=>{
    axios.get(HOST_BACK + "/barbers/id/" + id)
    .then((resp) => dispatch({type:BARBER_DETAIL, payload:resp.data}))
    .catch((err) => console.log(err))
}
