import React from 'react'
import { Route } from "react-router-dom";
import Home from './components/container/Home/Home';
import './App.css';
import NavBar from './components/content/navBar/NavBar';
import Catalog from './components/content/catalog/catalog';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/" component={NavBar}/>
      <Route path="/catalog" component={Catalog} /> {/*hecho para pruebas*/}
    </div>   
  );
}

export default App;




