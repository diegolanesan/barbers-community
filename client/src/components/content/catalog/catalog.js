import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import { filterBarbers, getBarbers } from '../../../redux/action/barbers.js';
import Barber from '../barber/barber.js'

export default function Catalog() {
    
    const buttonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBarbers())
      // eslint-disable-next-line
    }, [])
    
    const [isSelected, setIsSelected] = useState(false)

    const [filters, setFilters] = useState({
        Proficiency: '',
        Hair: '',
        Face: '',
        Service: '',
        Style: '',
        order: ''
    })
    
    const handleClick = (e) => {
        if (filters[e.target.name] === e.target.value) {
            setFilters({...filters, [e.target.name]: ''})
            setIsSelected(!isSelected)
        }
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
    console.log(barbersLoaded)
    return (
        <div className="flex">
            <div className="w-1/5 bg-gray-200">
                <div className="flex flex-col" onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Professional level</h5>
                    <div className="ml-2">  
                        <input type='button' value='Urban' name='Proficiency' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'} />
                        <input type='button' value='Academy' name='Proficiency' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' value='Seminary' name='Proficiency' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' value='Hair technician' name='Proficiency' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Hair type</h5>
                    <div className="ml-2">
                        <input type='button' id ='1' value='Afro' name='Hair' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='2' value='Curly' name='Hair' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='4' value='Wavy' name='Hair' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='3' value='Straight' name='Hair' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Face type</h5>
                    <div className="ml-2">
                        <input type='button' id ='1' value='Square' name='Face' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='2' value='Triangular' name='Face' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='3' value='Oval' name='Face' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='4' value='Round' name='Face' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='5' value='Long' name='Face' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='6' value='Rectangular' name='Face' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Service</h5>
                    <div className="ml-2">
                        <input type='button' value='Haircut' name='Service' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' value='Colorimetry' name='Service' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' value='beard trim' name='Service' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' value='Tribal design' name='Service' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5 className="font-bold pl-4 pt-4 pb-2">Style</h5>
                    <div className="ml-2">
                        <input type='button' id ='1' value='American' name='Style' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='2' value='Classic' name='Style' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='3' value='Fresh' name='Style' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='4' value='Youth' name='Style' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='5' value='Modern' name='Style' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='6' value='Versatile' name='Style' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='7' value='European' name='Style' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                        <input type='button' id ='8' value='Regular' name='Style' className={buttonStyle + ' focus:bg-blue-800 focus:ring-2'}/>
                    </div>
                </div>
            </div>
            <div className="w-4/5" >
                <div className="flex justify-end items-center w-full h-9 bg-gray-200" >
                    <label className="px-4 font-bold">Order by</label>
                    <select className="px-2 mr-8 rounded" onChange={handleOrder} name='order'>
                        <option >A-Z</option>
                        <option>Z-A</option>
                    </select>
                </div>
                <div className="flex flex-col justify-center" >
                    <div className="h-5/6" >
                        <Barber barbersPerPage = {barbersPerPage} />
                    </div>
                    <div className='pagination'>
                        {
                            barbersLoaded && <ReactPaginate
                                previousLabel={'← Previous'}
                                previousClassName={"px-4 font-bold"}
                                nextLabel={'Next →'}
                                nextClassName={"px-4 font-bold"}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={barbersLoaded.length / barbersToShow}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={2}
                                onPageChange={handlePaginate}
                                containerClassName={"flex container mx-auto px-4 justify-evenly list-none cursor-pointer absolute bottom-10 "}
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