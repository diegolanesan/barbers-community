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

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route path="/Detail" component={showBarberDetail}/>
      <Route exact path="/" component={Home}/>
      <Route path="/catalog" component={Catalog} /> {/*hecho para pruebas*/}
      <Route exact path="/admin/barbers" component={BarberTable} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/admin/barbers/edit/:id" component={BarberEdit} />

    </div>   
  );
}

export default App;




