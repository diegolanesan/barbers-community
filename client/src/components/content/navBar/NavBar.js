import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
// import Login from './Login/Login'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Barber's Community</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Link to='/catalog' >Catalog</Link> {/*hecho para pruebas*/}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    )
}

export default NavBar
