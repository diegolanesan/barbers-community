import React, {useState} from 'react'
//import {useDispatch} from 'react-redux'
// import {getBarberByName} from '../../redux/action/'

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
        <form onSubmit={onSubmit} className="">
            <input type="text" placeholder="Tu barbero" onChange={onChange} 
            className="py-1 px-3 border border-current px-2 mr-2 ml-4 text-black"/>
            <input type="submit" value="Search" className="bg-blue-800 text-white py-1 px-3 rounded"/>
        </form>
    )
}

export default SearchBar
