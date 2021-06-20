import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import Login from './Login/Login'
import { signOut} from '../../../redux/action/auth'

function NavBar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const barber = useSelector(state => state.auth.barberUser)
    const client = useSelector(state => state.auth.clientUser)
  
    if (barber.id || client.id) {
      return <nav className="flex flex-row items-center w-full bg-blue-400 text-white">
      <div>
        <Link to="/"><h1 className="text-xl py-2 px-4">Barber's Community </h1></Link>
      </div>
      <div className="px-4">
        <Link className="pr-4 hover:underline" to="/catalog"> Services </Link>
        {/* <Link className="pr-4" to="/"> Pricing </Link> */}
      </div>
      {/* <p> {user} </p> */}
      <SearchBar/>
      <div class="dropdown inline-block relative">
      <button onClick={() => dispatch(signOut(history))}class="bg-blue-800 text-white-700 font-semibold py-1 px-3 rounded inline-flex items-center">
        <span>Sign out</span>
      </button>
      </div>
      </nav>
    }
    return (
          <nav className="flex flex-row items-center w-full bg-blue-400 text-white">
              <div>
                <Link to="/"><h1 className="text-xl py-2 px-4">Barber's Community </h1></Link>
              </div>
              <div className="px-4">
                <Link className="pr-4 hover:underline" to="/catalog"> Services </Link>
              </div>
              <SearchBar/>
              <div class="dropdown inline-block relative">
                <ul class="flex flex-row text-gray-700 pt-1">
                  <li><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="http://localhost:3000/loginBarbers">Barber</a></li>
                  <li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="http://localhost:3000/loginClients">Client</a></li>
                </ul>
              </div>
          </nav> 
    )
}

export default NavBar;
