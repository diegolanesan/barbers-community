import axios from 'axios'
export const GET_BARBERS = 'GET_BARBERS'

export const getBarbers = () => (dispath) => {
    axios.get('http://localhost:3001/barbers/all')
            .then(res => dispath({type: GET_BARBERS, payload: res.data}))
}