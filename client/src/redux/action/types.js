import axios from 'axios'
import {HOST_BACK} from "../back_constants/index";
export const GET_HAIRTYPES = 'GET_HAIRTYPES'
export const GET_FACETYPES = 'GET_FACETYPES'


export const getAllHairTypes = () => (dispath) => {
    console.log("aaaaaa");
    axios.get(HOST_BACK + '/types/Hair')
            .then(res => dispath({type: GET_HAIRTYPES, payload: res.data}))
}
export const getAllFaceTypes = () => (dispath) => {
    console.log("aaaaaa");
    axios.get(HOST_BACK + '/types/Face')
            .then(res => dispath({type: GET_FACETYPES, payload: res.data}))
}
