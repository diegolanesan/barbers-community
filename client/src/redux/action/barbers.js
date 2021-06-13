import axios from 'axios'
export const GET_BARBERS = 'GET_BARBERS'
export const GET_BARBERS_BY_NAME = 'GET_BARBERS_BY_NAME'
export const GET_BARBERS_BY_TYPE = 'GET_BARBERS_BY_TYPE'

export const getBarbers = () => (dispath) => {
    axios.get('http://localhost:3001/barbers/all')
            .then(res => dispath({type: GET_BARBERS, payload: res.data}))
}

export const getBarbersByName = (name) => (dispatch) => {
    axios.get('http://localhost:3001/barbers/name/' + name)
        .then(res => dispatch({type: GET_BARBERS_BY_NAME, payload: res.data}))
}

export const getBarbersByType = (type) => (dispatch) => {
    axios.get('http://localhost:3001/barbers/type/' + type)
        .then(res => dispatch({type: GET_BARBERS_BY_TYPE, payload: res.data}))
    
}