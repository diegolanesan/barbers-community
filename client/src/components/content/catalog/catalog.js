import React, { useState } from 'react'
import Barber from '../barber/barber.js'

export default function Catalog() {

    const [filters, setFilters] = useState({
        Proficiency: '',
        Hair: '',
        Face: '',
        Service: '',
        Style: '',
        order: 'A-Z'
    })

    const handleClick = (e) => {
        if (filters[e.target.name] === e.target.value) setFilters({...filters, [e.target.name]: ''})
        else setFilters({...filters, [e.target.name]: e.target.value})
    }

    const handleOrder = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value})
    }

    //console.log(filters)

    return (
        <div class="flex">
            <div class="w-1/5 bg-gray-200">
                <div class="flex flex-col" onClick={handleClick} >
                    <h5 class="font-bold pl-4 pt-4 pb-2">Professional level</h5>
                    <div class="ml-2">
                        <input type='button' value='Urban' name='Proficiency' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg "/>
                        <input type='button' value='Academy' name='Proficiency' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Seminary' name='Proficiency' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='hair technician' name='Proficiency' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 class="font-bold pl-4 pt-4 pb-2">Hair type</h5>
                    <div class="ml-2">
                        <input type='button' value='Straight' name='Hair' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Wavy' name='Hair' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Curly' name='Hair' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Afro' name='Hair' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 class="font-bold pl-4 pt-4 pb-2">Face type</h5>
                    <div class="ml-2">
                        <input type='button' value='Long' name='Face' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Square' name='Face' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Rectangular' name='Face' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Round' name='Face' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Oval' name='Face' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Triangular' name='Face' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 class="font-bold pl-4 pt-4 pb-2">Service</h5>
                    <div class="ml-2">
                        <input type='button' value='Haircut' name='Service' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Colorimetry' name='Service' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='beard trim' name='Service' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Tribal design' name='Service' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 class="font-bold pl-4 pt-4 pb-2">Style</h5>
                    <div class="ml-2">
                        <input type='button' value='Classic' name='Style' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='American' name='Style' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='European' name='Style' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Regular' name='Style' class="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
            </div>
            <div class="w-4/5" >
                <div class="flex justify-end items-center w-full h-9 bg-gray-200" >
                    <label class="px-4 font-bold">Ordenar por</label>
                    <select class="px-2 mr-8 rounded" onChange={handleOrder} name='order'>
                        <option >A-Z</option>
                        <option>Z-A</option>
                    </select>
                </div>
                <div class="flex flex-row justify-center" >
                    <div class="h-5/6" >
                        <Barber />
                    </div>
                    {/* <div class="h-10 border" >paginado</div> */}
                </div>
            </div>
        </div>
    )
}