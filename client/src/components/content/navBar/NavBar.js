import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import jwtDecode from 'jwt-decode'
// import Login from './Login/Login'
import { signOut} from '../../../redux/action/auth'

function NavBar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const barber = localStorage.getItem("barberToken") ? jwtDecode(localStorage.getItem("barberToken")) : ""
    const client = localStorage.getItem("clientToken") ? jwtDecode(localStorage.getItem("clientToken")) : ""
    
    if (barber.id || client.id) {
      return <nav className="w-full flex flex-row items-center p-1 justify-between shadow-xs bg-blue-400 text-white py-2">
        <div class="flex flex-row items-center">
          <Link to="/"><h1 className="text-xl px-4">Barber's Community </h1></Link>
          <Link className="pr-4 hover:underline ml-4" to="/catalog"> Services </Link>
        </div>
        <SearchBar/>
        <div class="dropdown inline-block relative">
        <button onClick={() => dispatch(signOut(history))}class="bg-blue-800 text-white-700 font-semibold py-1 px-3 rounded-3xl inline-flex items-center mr-8">
          <span>Sign out</span>
        </button>
        </div>
      </nav>
    }
    return (
          <nav className="w-full flex flex-row items-center p-1 justify-between shadow-xs bg-blue-400 text-white py-2">
              <div className="flex flex-row items-center">
                <Link to="/"><h1 className="text-xl px-4">Barber's Community </h1></Link>
                <Link className="pr-4 hover:underline ml-4" to="/catalog"> Services </Link>
              </div>
              <SearchBar/>
              <div className="flex flex-row-reverse mr-8 hidden md:flex">
                <ul className="flex flex-row text-gray-700 pt-1">
                  <li><Link to="/loginBarbers" className="mr-4 bg-gray-200 hover:bg-gray-400 py-1 px-3 block whitespace-no-wrap rounded-3xl"> Barber</Link></li>
                  <li><Link to="/loginClients" className="bg-gray-200 hover:bg-gray-400 py-1 px-3 block whitespace-no-wrap rounded-3xl">Client</Link></li>
                </ul>
              </div>
          </nav> 
          
    )
}

export default NavBar;

