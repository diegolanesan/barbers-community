import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import { getBarbersByType } from '../../../redux/action/barbers.js';
import Barber from '../barber/barber.js'

function HairTechnician() {
    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(getBarbersByType("tecnicocapilar"))
     }, [dispatch])

    // -------------------------------------------------- Paginate --------------------------------------------------
    // Constants
    const barbersLoaded = useSelector(state => state.barbers.barbersLoaded)
    const [barbersToShow] = useState(8)
    const [barbersPerPage, setBarbersPerPage] = useState([])
    
    // Update
    useEffect(() => {
        if (barbersLoaded.slice(0, barbersToShow) !== barbersPerPage) setBarbersPerPage(barbersLoaded.slice(0, barbersToShow))
        // eslint-disable-next-line
    }, [barbersLoaded])

    // Handler
    const handlePaginate = (e) => {
        let selectedPage = e.selected + 1
        setBarbersPerPage(barbersLoaded.slice(((selectedPage - 1) * barbersToShow), (selectedPage * barbersToShow)))
    }
    // ---------------------------------------------- End of Paginate -----------------------------------------------


    return (
        <div className="flex flex-col justify-center w-4/5 mx-auto" >
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
    )                
}

export default HairTechnician
