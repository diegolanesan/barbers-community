import React from 'react'
import { Route } from "react-router-dom";
import Home from './components/container/Home/Home';
import './App.css';
import NavBar from './components/content/navBar/NavBar';
import showBarberDetail from './components/content/barberDetail/BarberDetail';
import Catalog from './components/content/catalog/catalog';
import BarberTable from './components/content/barberTable/BarberTable';
import Register from './components/content/register/Register';
import BarberEdit from './components/content/barberEdit/BarberEdit';
import Academic from './components/content/academic/Academic';
import Urban from './components/content/urban/Urban';
import HairTechnician from './components/content/hairTechnician/HairTechnician';
import Recovery from './components/container/recovery/Recovery';
import AppointmentDate from './components/content/appointmentDate/AppointmentDate';
import BarberDashboard from './components/content/barberDashboard/barberDashboard';
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {(location.pathname === "/" || location.pathname === "/catalog") &&  <Route path="/" component={NavBar}/>}
      <Route path="/Detail/:id" component={showBarberDetail}/>
      <Route exact path="/" component={Home}/>
      <Route path="/catalog" component={Catalog} /> {/*hecho para pruebas*/}
      <Route exact path="/admin/barbers" component={BarberTable} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/admin/barbers/edit/:id" component={BarberEdit} />
      <Route exact path="/academic" component={Academic} />
      <Route exact path="/urban" component={Urban} />
      <Route exact path="/hair-technician" component={HairTechnician} />
      <Route exact path="/recovery/:token" component={Recovery} />
      <Route exact path="/appointment/date" component={AppointmentDate} />
      <Route exact path="/barbers/dashboard" component={BarberDashboard} />
    </div>   
  );
}

export default App;




