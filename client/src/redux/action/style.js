import {HOST_BACK} from "../back_constants/index";
import axios from "axios";

export const POST_STYLE = "POST_STYLE";
export const POST_STYLE_SUCCESS = "POST_STYLE_SUCCESS";
export const POST_STYLE_FAIL = "POST_STYLE_FAIL";

export const PUT_STYLE = "PUT_STYLE";
export const PUT_STYLE_SUCCESS = "PUT_STYLE_SUCCESS";
export const PUT_STYLE_FAIL = "PUT_STYLE_FAIL";

export const DELETE_STYLE = "DELETE_STYLE";
export const DELETE_STYLE_SUCCESS = "DELETE_STYLE_SUCCESS";
export const DELETE_STYLE_FAIL = "DELETE_STYLE_FAIL";



export const postStyle = (payload)=>(dispatch)=>{
    dispatch({type: POST_STYLE})
    axios.post(HOST_BACK + "/types/styles", payload).then(
        (resp)=>{
            dispatch({type: POST_STYLE_SUCCESS, payload: resp.data})
        },
        (err)=>{
            dispatch({type: POST_STYLE_FAIL, payload: err})
        }
    )
}


export const putStyle = (payload)=>(dispatch)=>{
    dispatch({type: POST_STYLE})
    axios.put(HOST_BACK + "/types/styles", payload).then(
        (resp)=>{
            dispatch({type: PUT_STYLE_SUCCESS, payload: resp.data})
        },
        (err)=>{
            dispatch({type: PUT_STYLE_FAIL, payload: err})
        }
    )
};


export const deleteStyle = (payload)=>(dispatch)=>{
    dispatch({type: DELETE_STYLE})
    axios.delete(`${HOST_BACK}/types/styles/${payload}`).then(
        (resp)=>{
            dispatch({type:DELETE_STYLE_SUCCESS, payload: resp.data})
        },
        (err)=>{
            dispatch({type:DELETE_STYLE_FAIL, payload: err})
        }
    )
}