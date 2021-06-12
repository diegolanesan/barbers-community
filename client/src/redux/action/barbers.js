export const GET_BARBERS = 'GET_BARBERS'

export const getBarbers = () => (dispath) => {
    return dispath({type: GET_BARBERS, payload: 'Entró en el reducer'})
}