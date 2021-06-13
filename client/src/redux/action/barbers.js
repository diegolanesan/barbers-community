import axios from 'axios'

export const GET_BARBERS = 'GET_BARBERS'
export const POST_BARBER = 'POST_BARBER'
export const DELETE_BARBER = 'DELETE_BARBER'
export const PUT_BARBER = 'PUT_BARBER'


export const getBarbers = () => (dispatch) => {
    return axios.get('http://localhost:3001/barbers/all')
        .then(res => {
            dispatch({ type: GET_BARBERS, payload: res.data })
        })
    //return dispath({ type: GET_BARBERS, payload: 'Entró en el reducer' })
}

export const postBarber = (body) => (dispatch) => {
    console.log("aaaaaa", body)
        return axios.post("http://localhost:3001/barbers/", body)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "POST_BARBER", payload: response.data })
            })
};

export const deleteBarber = (id) => (dispatch) => {
    console.log("aaaaaa", id)
        return axios.delete("http://localhost:3001/barbers/" + id)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "DELETE_BARBER", payload: response.data })
            })
};

export const putBarber = (id, body) => (dispatch) => {
    console.log("aaaaaa", body)
        return axios.put("http://localhost:3001/barbers/" + id, body)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "PUT_BARBER", payload: response.data })
            })
};


// export const pepe = (payload) => (dispatch) => {
//     console.log("aaaaaa", payload)
//         return axios.post("http://localhost:3001/barbers/", payload)
//             .then(response => {
//                 console.log(response.data)
//                 dispatch({ type: "POST_BARBER", payload: response.data })
//             })
// };
    