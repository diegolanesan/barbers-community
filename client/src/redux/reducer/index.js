import barbersReducer from "./barbers";
import reducerPublication from "./publication";
import reducerBarberDetail from "./barberDetail";
import reducerServices from './services'

function combineReducer(state = {}, action) {
    return {
      barbers: barbersReducer(state.barbersLoaded, action),
      publication: reducerPublication(state.publication,action),
      followers:{},
      follow:{},
      barberDetail: reducerBarberDetail(state.barberDetail,action),
      services: reducerServices(state.services, action)
    };
  }
  
  export default combineReducer;