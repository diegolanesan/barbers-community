import React from 'react'
import { Route } from "react-router-dom";
import Home from './components/container/Home/Home';
import './App.css';
import NavBar from './components/content/navBar/NavBar';
import showBarberDetail from './components/content/barberDetail/BarberDetail';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/" component={NavBar}/>
      <Route path="/Detail" component={showBarberDetail}/>
    </div>   
  );
}

export default App;




