import barbersReducer from "./barbers";
import reducerPublication from "./publication";
import reducerBarberDetail from "./barberDetail";
import reducerServices from './services'
import reducerTypes from './types'
import authReducer from "./auth";

function combineReducer(state = {}, action) {
    return {
      auth: authReducer(state.auth, action),
      barbers: barbersReducer(state.barbers, action),
      publication: reducerPublication(state.publication,action),
      barberDetail: reducerBarberDetail(state.barberDetail,action),
      services: reducerServices(state.services, action),
      types: reducerTypes(state.types, action)
    };
  }
  
  export default combineReducer;