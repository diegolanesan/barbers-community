import {CREATE_PUBLICATION, CREATE_PUBLICATION_SUCCESS, CREATE_PUBLICATION_FAIL} from "../constants/publication";
import {HOST_BACK} from "../back_constants/index";


export const createPublication = (payload)=>(dispatch)=>{
    dispatch({type:CREATE_PUBLICATION});
    fetch(HOST_BACK + "/crearPublicacion",{ 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            usuarioId: payload.usuarioId,
            texto: payload.texto,
            imagen: payload.imagen,
            video: payload.video
        })})
    .then(
        (resp) => dispatch({type:CREATE_PUBLICATION_SUCCESS, payload:resp}),
        (err) => dispatch({type:CREATE_PUBLICATION_FAIL, payload: err})
    )
}