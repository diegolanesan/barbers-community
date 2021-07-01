import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { filterBarbers, getBarbers } from "../../../redux/action/barbers.js";
import Barber from "../barber/barber.js";
import { getCategory } from "../../../redux/action/categories.js";
import { getAllStyles } from "../../../redux/action/types.js";
import { setFilters } from "../../../redux/action/filters.js";

export default function Catalog() {
    
   
    const buttonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 mx-2 mb-3 rounded-lg"
    const buttonSelected = "bg-blue-800 text-white py-1 px-2 mx-2 mb-3 rounded-lg"
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBarbers())
        dispatch(getCategory())
        dispatch(getAllStyles())
      // eslint-disable-next-line
    }, [])
    
    const barberLevel = ['Urban', 'Academy', 'Hair Technician', 'Seminary']
    const categories = useSelector(state => state.category.resp)
    const styles = useSelector(state => state.types.style)
    const filters = useSelector(state => state.filters.filters)

    const [category, setCategory] = useState("")
    const [level, setLevel] = useState("")
    const [style, setStyle] = useState("")
    

    function handleCategory(e) {
        setCategory(e.target.value)
        if(e.target.value === 'all') {
            dispatch(getBarbers())   
           }
        if(filters && filters.length !== 0) {
            const result = filters.filter(barber => {
               return barber.categoryBarber.includes(e.target.value)
            })
        dispatch(setFilters(result))
        } 
    }

    function handleLevel(e) {
        setLevel(e.target.value)
        if(e.target.value === 'all') {
            dispatch(getBarbers())   
           }
        if(filters && filters.length !== 0) {

            const result = filters.filter(barber => {
                return barber.type === e.target.value
            })
        dispatch(setFilters(result))
        } 
    }

    function handleStyle(e) {
        setStyle(e.target.value)
        if(e.target.value === 'all') {
            dispatch(getBarbers())   
           }
        if(filters && filters.length !== 0) {
            const result = filters.filter(barber => {
               return barber.styleBarber.includes(e.target.value)
            })
        dispatch(setFilters(result))
        } 
    }
    

    // -------------------------------------------------- Paginate --------------------------------------------------
    // Constants
    const barbersLoaded = useSelector((state) => state.barbers.barbersLoaded);
    const [barbersToShow] = useState(8);
    const [barbersPerPage, setBarbersPerPage] = useState([]);

    // Update
    useEffect(() => {
      if (filters.slice(0, barbersToShow) !== barbersPerPage) setBarbersPerPage(filters.slice(0, barbersToShow));
      // eslint-disable-next-line
    }, [filters, filters]);

    // Handler
    const handlePaginate = (e) => {
        let selectedPage = e.selected + 1
        setBarbersPerPage(filters.slice(((selectedPage - 1) * barbersToShow), (selectedPage * barbersToShow)))
    }
    // ---------------------------------------------- End of Paginate -----------------------------------------------
    
    return (
        <div className="flex justify-center">
            <div className="w-4/5" >
                <div className="flex justify-end items-center w-full h-9 bg-gray-200" >
                    
                    <label className="px-4 font-bold">Order by</label>
                        <select onChange={(e) => handleCategory(e)} className="px-2 mr-8 rounded" name='order'>
                            <option value="all"> All </option>
                            {categories && categories.map(category => {
                                return <option key={category.id} value={category.name}> {category.name} </option>
                            })}
                        </select>

                    <label className="px-4 font-bold">Order by</label>
                        <select onChange={(e) => handleLevel(e)} className="px-2 mr-8 rounded" name='order'>
                            <option value="all"> All </option>
                            {barberLevel && barberLevel.map(level => {
                                return <option key={level} value={level}> {level} </option>
                            })}
                        </select>

                    <label className="px-4 font-bold">Order by</label>
                        <select onChange={(e) => handleStyle(e)} className="px-2 mr-8 rounded" name='order'>
                            <option value="all"> All </option>
                            {styles && styles.map(style => {
                                return <option key={style.id} value={style.description}> {style.description} </option>
                            })}
                        </select>
                    
                    <label className="px-4 font-bold">Order by</label>
                    <select className="px-2 mr-8 rounded" name='order'>
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
                            filters && <ReactPaginate
                                previousLabel={'← Previous'}
                                previousClassName={"px-4 font-bold"}
                                nextLabel={'Next →'}
                                nextClassName={"px-4 font-bold"}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={filters.length / barbersToShow}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={2}
                                onPageChange={handlePaginate}
                                containerClassName={"flex container mx-auto px-4 w-4/5 justify-evenly list-none cursor-pointer absolute top-100 "}
                                activeClassName={'active'}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

