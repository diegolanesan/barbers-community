import React from 'react'
import { Route } from "react-router-dom";
import Home from './components/container/Home/Home';
import './App.css';
import NavBar from './components/content/navBar/NavBar';
import Catalog from './components/content/catalog/catalog';
import BarberTable from './components/content/barberTable/BarberTable';
import Register from './components/content/register/Register';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={Home}/>
      <Route path="/catalog" component={Catalog} /> {/*hecho para pruebas*/}
      <Route exact path="/admin/barbers" component={BarberTable} />
      <Route exact path="/register" component={Register} />

    </div>   
  );
}

export default App;




