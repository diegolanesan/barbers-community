import React from 'react'
import { Route } from "react-router-dom";
import Home from './components/container/Home/Home';
import './App.css';
import NavBar from './components/content/navBar/NavBar';
<<<<<<< HEAD
import showBarberDetail from './components/content/barberDetail/BarberDetail';
=======
import Catalog from './components/content/catalog/catalog';
>>>>>>> 43f55a800706fbf5eaf3697809d6e9243a092b1b

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
<<<<<<< HEAD
      <Route path="/Detail" component={showBarberDetail}/>
=======
      <Route exact path="/" component={Home}/>
      <Route path="/catalog" component={Catalog} /> {/*hecho para pruebas*/}
>>>>>>> 43f55a800706fbf5eaf3697809d6e9243a092b1b
    </div>   
  );
}

export default App;




