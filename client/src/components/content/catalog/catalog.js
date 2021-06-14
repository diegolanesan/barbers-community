import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import { filterBarbers, getBarbers } from '../../../redux/action/barbers.js';
import Barber from '../barber/barber.js'

export default function Catalog() {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBarbers())
      // eslint-disable-next-line
    }, [])
    
    const [filters, setFilters] = useState({
        Proficiency: '',
        Hair: '',
        Face: '',
        Service: '',
        Style: '',
        order: ''
    })
    
    const handleClick = (e) => {
        if (filters[e.target.name] === e.target.value) setFilters({...filters, [e.target.name]: ''})
        else setFilters({...filters, [e.target.name]: e.target.value})
    }
    
    const handleOrder = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        dispatch(filterBarbers(filters))
        // eslint-disable-next-line
    }, [filters])
    
    // -------------------------------------------------- Paginate --------------------------------------------------
    // Constants
    const barbersLoaded = useSelector(state => state.barbers.barbersLoaded)
    const [barbersToShow] = useState(8)
    const [barbersPerPage, setBarbersPerPage] = useState([])
    
    // Update
    useEffect(() => {
        if (barbersLoaded.slice(0, barbersToShow) !== barbersPerPage) setBarbersPerPage(barbersLoaded.slice(0, barbersToShow))
        // eslint-disable-next-line
    }, [barbersLoaded, filters])

    // Handler
    const handlePaginate = (e) => {
        let selectedPage = e.selected + 1
        setBarbersPerPage(barbersLoaded.slice(((selectedPage - 1) * barbersToShow), (selectedPage * barbersToShow)))
    }
    // ---------------------------------------------- End of Paginate -----------------------------------------------

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
                        <Barber barbersPerPage = {barbersPerPage} />
                    </div>
                    <div className='' >
                        {
                            barbersLoaded && <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={barbersLoaded.length / barbersToShow}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={2}
                                onPageChange={handlePaginate}
                                containerClassName={`pagination flex justify-center`}
                                activeClassName={'active'}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
//