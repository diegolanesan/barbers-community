import React from 'react'
import heading from '../../../../resources/heading-line.png'
import scissors from '../../../../resources/scissors.png'
import razor from '../../../../resources/razor.png'
import hairbrush from '../../../../resources/hairbrush.png'
import barbershop from '../../../../resources/barbershop.png'

function Services() {
    return (
        <div class="bg-background my-8">
            <div class="flex flex-col justify-center text-center">
                <h2 class="font-prata text-4xl text-primary mt-16"> Our Services </h2>
                <img class="w-36 mt-8 mb-4 mx-auto"src={heading} alt="line"></img>
            </div>

            <div class="flex flex-row justify-center w-full text-center">
                <div class="flex flex-col justify-center m-4 bg-white p-8">
                    <img class="object-contain h-16 mb-4" src={scissors} alt="service logo"></img>
                    <h3 class="font-prata text-primary text-xl"> Haircut Styles </h3>
                </div>
                <div class="flex flex-col justify-center m-4 bg-white p-8">
                    <img class="object-contain h-16 mb-4" src={razor} alt="" />
                    <h3 class="font-prata text-primary text-xl"> Beard Triming </h3>
                </div>
                <div class="flex flex-col justify-center m-4 bg-white p-8">
                    <img class="object-contain h-16 mb-4" src={hairbrush} alt="service logo"></img>
                    <h3 class="font-prata text-primary text-xl"> Smooth Shave </h3>
                </div>
                <div class="flex flex-col justify-center m-4 bg-white p-8"> 
                    <img class="object-contain h-16 mb-4" src={barbershop} alt="service logo"></img>
                    <h3 class="font-prata text-primary text-xl"> Face Masking </h3>
                </div>
            </div>
        </div>
    )
}

export default Services
