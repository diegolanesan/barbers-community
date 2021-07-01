import React from 'react'
import notFound from '../../../resources/not-found.png'
function Error() {
    return (
        <div class="flex flex-col justify-center items-center w-full h-vh">
            <img src={notFound} class="w-48"/>
            <h1 class="font-prata text-2xl text-secondary font-bold m-6">404 Error Not Found</h1>
            <p class="font-lato text-base">The Page Looking for is not here. We can’t find the page you’re looking for.
            </p>
        </div>
    )
}

export default Error
