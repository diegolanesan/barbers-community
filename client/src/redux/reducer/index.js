import barbersReducer from "./barbers";
import reducerPublication from "./publication";

function combineReducer(state = {}, action) {
    return {
      barbers: barbersReducer(state.barbersLoaded, action),
      publication: reducerPublication(state.publication,action),
      followers:{},
      follow:{}
    };
  }
  
  export default combineReducer;