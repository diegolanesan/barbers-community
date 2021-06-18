import barbersReducer from "./barbers";
import reducerPublication from "./publication";
import reducerBarberDetail from "./barberDetail";
import reducerServices from './services'
import reducerTypes from './types'

function combineReducer(state = {}, action) {
    return {
      barbers: barbersReducer(state.barbers, action),
      publication: reducerPublication(state.publication,action),
      followers:{},
      follow:{},
      barberDetail: reducerBarberDetail(state.barberDetail,action),
      services: reducerServices(state.services, action),
      types: reducerTypes(state.types, action)
    };
  }
  
  export default combineReducer;