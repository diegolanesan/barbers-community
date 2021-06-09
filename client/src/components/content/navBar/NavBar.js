import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Login from './Login/Login'
//import styles from './NavBar.module.css'

function NavBar() {
    return (
        <Navbar>
            <Navbar.Brand href="#home">Barber Community </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home"> Barberos </Nav.Link>
            </Nav>
            <SearchBar />
            {/* <Login /> */}
        </Navbar>
    )
}

export default NavBar
