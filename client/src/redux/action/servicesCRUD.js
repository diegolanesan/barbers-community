import axios from 'axios'
import {HOST_BACK} from "../back_constants/index";

export const POST_SERVICES_CRUD = "POST_SERVICES_CRUD";
export const POST_SERVICES_CRUD_SUCCESS = "POST_SERVICES_CRUD_SUCCESS";
export const POST_SERVICES_CRUD_FAIL = "POST_SERVICES_CRUD_FAIL";

export const PUT_SERVICES_CRUD = "PUT_SERVICES_CRUD";
export const PUT_SERVICES_CRUD_SUCCESS = "PUT_SERVICES_CRUD_SUCCESS";
export const PUT_SERVICES_CRUD_FAIL = "PUT_SERVICES_CRUD_FAIL";

export const DELETE_SERVICES_CRUD = "DELETE_SERVICES_CRUD";
export const DELETE_SERVICES_CRUD_SUCCESS = "DELETE_SERVICES_CRUD_SUCCESS";
export const DELETE_SERVICES_CRUD_FAIL = "DELETE_SERVICES_CRUD_FAIL";

export const postServicesCRUD = (payload)=>(dispatch)=>{
    dispatch({type: POST_SERVICES_CRUD})
    axios.post(HOST_BACK + "/admin/service", payload).then(
        (resp)=>{
            dispatch({type: POST_SERVICES_CRUD_SUCCESS, payload: resp.data})
        },
        (err)=>{
            dispatch({type: POST_SERVICES_CRUD_FAIL, payload: err})
        }
    )
}


export const putServicesCRUD = (payload)=>(dispatch)=>{
    dispatch({type: PUT_SERVICES_CRUD})
    axios.put(HOST_BACK + "/admin/service", payload).then(
        (resp)=>{
            dispatch({type: PUT_SERVICES_CRUD_SUCCESS, payload: resp.data})
        },
        (err)=>{
            dispatch({type: PUT_SERVICES_CRUD_FAIL, payload: err})
        }
    )
};


export const deleteServicesCRUD = (payload)=>(dispatch)=>{
    dispatch({type: DELETE_SERVICES_CRUD})
    axios.delete(`${HOST_BACK}/admin/service/${payload}`).then(
        (resp)=>{
            dispatch({type: DELETE_SERVICES_CRUD_SUCCESS , payload: resp.data})
        },
        (err)=>{
            dispatch({type: DELETE_SERVICES_CRUD_FAIL, payload: err})
        }
    )
}