import barbersReducer from "./barbers";
import reducerPublication from "./publication";
import reducerBarberDetail from "./barberDetail";
import reducerServices from "./services";
import reducerTypes from "./types";
import authReducer from "./auth";
import clientsReducer from "./clients";
import reducerRecovery from "./recovery";
import appointmentReduer from "./appointment";
import reducerCart from "./cart";
import adminsReducer from "./admins";


function combineReducer(state = {}, action) {
    return {
      appointments: appointmentReduer(state.appointments, action),
      auth: authReducer(state.auth, action),
      barbers: barbersReducer(state.barbers, action),
      admins: adminsReducer(state.admins, action),
      publication: reducerPublication(state.publication,action),
      barberDetail: reducerBarberDetail(state.barberDetail,action),
      services: reducerServices(state.services, action),
      types: reducerTypes(state.types, action),
      clients: clientsReducer(state.clients, action),
      recovery: reducerRecovery(state.recovery, action),
      cart: reducerCart(state.cart, action),
    };
  }
  
  export default combineReducer;
