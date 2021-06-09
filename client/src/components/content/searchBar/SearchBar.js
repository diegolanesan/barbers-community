import React, {useState} from 'react'
//import {useDispatch} from 'react-redux'
// import {getBarberByName} from '../../redux/action/'
//import styles from './SearchBar.module.css'

function SearchBar() {
    const [input, setinput] = useState("")
    //const dispatch = useDispatch()

    function onChange(e) {
        setinput(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        // Dispatch de action asíncrónica para buscar por nombre
        // dispatch.getBarberByName()
        // Redirigir a la ruta del catálogo 
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Tu barbero" onChange={onChange}/>
        </form>
    )
}

export default SearchBar
