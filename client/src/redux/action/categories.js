import { HOST_BACK } from "../back_constants/index";
import axios from "axios";
export const POST_CATEGORY = "POST_CATEGORY";
export const POST_CATEGORY_SUCCESS = "POST_CATEGORY_SUCCESS";
export const POST_CATEGORY_FAIL = "POST_CATEGORY_FAIL";

export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_FAIL = "DELETE_CATEGORY_FAIL";


export const PUT_CATEGORY = "PUT_CATEGORY";
export const PUT_CATEGORY_SUCCESS = "PUT_CATEGORY_SUCCESS";
export const PUT_CATEGORY_FAIL = "PUT_CATEGORY_FAIL";

export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_FAIL = "GET_CATEGORY_FAIL";

export const postCategory = (category) => (dispatch) => {
    dispatch({type:POST_CATEGORY});
    axios.post(HOST_BACK + "/admin/categories", category).then(
        (resp) => dispatch({type:POST_CATEGORY_SUCCESS, payload:resp.data}),
        (err) => dispatch({type:POST_CATEGORY_FAIL, payload: err.message})
    )
}

export const deleteCategory = (id) => (dispatch) =>{
    dispatch({type:DELETE_CATEGORY});
    axios.delete(`${HOST_BACK}/admin/categories/${id}`).then(
        (resp)=> dispatch({type:DELETE_CATEGORY_SUCCESS , payload:resp.data}),
        (err)=> dispatch({type: DELETE_CATEGORY_FAIL, payload:err.message})
    )
}

export const putCategory = (id, category) => (dispatch) =>{
    dispatch({type:PUT_CATEGORY});
    axios.put(`${HOST_BACK}/admin/categories/${id}`, category).then(
        (resp)=> dispatch({type:PUT_CATEGORY_SUCCESS , payload:resp.data}),
        (err)=> dispatch({type: PUT_CATEGORY_FAIL, payload:err.message})
    )
}
<<<<<<< HEAD
export const getAllCategory = ()=> (dispatch)=>{
    dispatch({type:GET_ALL_CATEGORY})
    axios.get(HOST_BACK + "/admin/categories/all").then(
        (resp)=>{
            dispatch({type:GET_ALL_CATEGORY_SUCCESS, payload: resp.data})
        },
        (err)=>{
            dispatch({type:GET_ALL_CATEGORY_FAIL, payload: err})
        }
    ) 
} 

=======

export const getCategory = () => (dispatch) =>{
    dispatch({type:GET_CATEGORY});
    axios.get(`${HOST_BACK}/admin/categories/all`).then(
        (resp)=> dispatch({type:GET_CATEGORY_SUCCESS , payload:resp.data}),
        (err)=> dispatch({type: GET_CATEGORY_FAIL, payload:err.message})
    )
}
>>>>>>> a4a3a75c04ebcbcf8e11c52742b9f9964eb0ba75
