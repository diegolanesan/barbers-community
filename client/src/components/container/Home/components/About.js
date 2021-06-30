import React from 'react'
import aboutLogo from '../../../../resources/about-logo.png'
import about from '../../../../resources/about.jpg'

function About() {
    return (
        <div class="flex flex-row w-screen justify-center items-center mt-16 mb-4">
            <div class="flex flex-col items-center w-2/5">
                <p class="font-prata text-xl text-primary mb-2"> Introducing </p>
                <h2 class="font-prata text-4xl text-brown"> Barbers Community </h2>
                <img src={aboutLogo} class="my-8" alt="About Logo"/>
                <p class="font-lato text-text text-center"> Barbers Community is a social platform that allows barbers to connect with their clients. Our clients, can reserve and pay for any type of barber service.</p>
                <button class="mt-8 mb-4 p-4 bg-brown text-white text-sm font-medium hover:bg-primary"> 
                FIND YOUR NEXT BARBER 
                </button>
            </div>
            <div class="ml-16 mb-20">
                <img class="object-contain h-80 rounded-xl" src={about} alt="About"/>
            </div>

        </div>
    )
}

export default About
