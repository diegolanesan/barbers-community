import axios from 'axios'
export const GET_BARBERS = 'GET_BARBERS'
export const POST_BARBER = 'POST_BARBER'

export const getBarbers = () => (dispath) => {
    return dispath({type: GET_BARBERS, payload: 'Entró en el reducer'})
}

export const postBarber = (body) => (dispatch) => {
    console.log("aaaaaa", body)
        return axios.post("http://localhost:3001/barbers/", body)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "POST_BARBER", payload: response.data })
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
    axios.get('http://localhost:3001/barbers/all')
            .then(res => dispath({type: GET_BARBERS, payload: res.data}))