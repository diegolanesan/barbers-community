import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import { Link } from 'react-router-dom'
// import Login from './Login/Login'

function NavBar() {
    return (
        <nav className="flex flex-row items-center w-full bg-blue-400 text-white">
          <div>
            <h1 className="text-xl py-2 px-4">Barber's Community </h1>
          </div>
          <div className="px-4">
            <Link className="pr-4" to="/"> Services </Link>
            <Link className="pr-4" to="/"> Pricing </Link>
          </div>
          <SearchBar/>
        </nav>
    )
}

export default NavBar
