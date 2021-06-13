import axios from 'axios'
export const GET_SERVICES = 'GET_SERVICES'

export const getServices = () => (dispath) => {
    axios.get('http://localhost:3001/admin/service')
            .then(res => dispath({type: GET_SERVICES, payload: res.data}))
}

