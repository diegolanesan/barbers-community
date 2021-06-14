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

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route path="/Detail/:id" component={showBarberDetail}/>
      <Route exact path="/" component={Home}/>
      <Route path="/catalog" component={Catalog} /> {/*hecho para pruebas*/}
      <Route exact path="/admin/barbers" component={BarberTable} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/admin/barbers/edit/:id" component={BarberEdit} />
      <Route exact path="/academic" component={Academic} />
      <Route exact path="/urban" component={Urban} />
      <Route exact path="/hair-technician" component={HairTechnician} />

    </div>   
  );
}

export default App;




