import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
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

    console.log(filters)

    return (
        <div className="flex">
            <div className="w-1/5 bg-gray-200">
                <div className="flex flex-col" onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Professional level</h5>
                    <div className="ml-2">
                        <input type='button' value='Urban' name='Proficiency' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg "/>
                        <input type='button' value='Academy' name='Proficiency' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Seminary' name='Proficiency' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='hair technician' name='Proficiency' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Hair type</h5>
                    <div className="ml-2">
                        <input type='button' value='Straight' name='Hair' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Wavy' name='Hair' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Curly' name='Hair' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Afro' name='Hair' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Face type</h5>
                    <div className="ml-2">
                        <input type='button' value='Long' name='Face' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Square' name='Face' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Rectangular' name='Face' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Round' name='Face' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Oval' name='Face' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Triangular' name='Face' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Service</h5>
                    <div className="ml-2">
                        <input type='button' value='Haircut' name='Service' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Colorimetry' name='Service' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='beard trim' name='Service' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Tribal design' name='Service' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Style</h5>
                    <div className="ml-2">
                        <input type='button' value='Classic' name='Style' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='American' name='Style' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='European' name='Style' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                        <input type='button' value='Regular' name='Style' className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"/>
                    </div>
                </div>
            </div>
            <div className="w-4/5" >
                <div className="flex justify-end items-center w-full h-9 bg-gray-200" >
                    <label className="px-4 font-bold">Ordenar por</label>
                    <select className="px-2 mr-8 rounded" onChange={handleOrder} name='order'>
                        <option >A-Z</option>
                        <option>Z-A</option>
                    </select>
                </div>
                <div className="flex flex-col justify-center" >
                    <div className="h-5/6" >
                        <Barber />
                    </div>
                    <div className='' >
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={10}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={() => console.log('hola')}
                            containerClassName={`pagination flex justify-center`}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}