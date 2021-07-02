import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../../../resources/not-found.png'
function Error() {
    return (
        <div class="flex flex-col justify-center items-center w-full h-vh">
            <img src={notFound} class="w-48"/>
            <h1 class="font-prata text-2xl text-secondary font-bold m-6">Ups!</h1>
            <p class="font-lato text-base">The page does not exist or you don't have permission to access it.
            </p>
            <p> Try going back to the home. </p>
            <Link to="/"> <button class="p-2 px-4 font-lato text-white font-bold bg-secondary m-6 hover:bg-primary"> 
            Home 
            </button> </Link>
        </div>
    )
}

export default Error
