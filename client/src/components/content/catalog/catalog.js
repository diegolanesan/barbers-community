import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import style from './catalog.module.css'
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
        <div className={`${style.container}`} >
            <div className={style.filters} >
                <div className={`flex flex-column`} onClick={handleClick} >
                    <h5>Professional level</h5>
                    <div>
                        <input type='button' value='Urban' name='Proficiency' />
                        <input type='button' value='Academy' name='Proficiency' />
                        <input type='button' value='Seminary' name='Proficiency' />
                        <input type='button' value='hair technician' name='Proficiency' />
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5>Hair type</h5>
                    <div>
                        <input type='button' value='Straight' name='Hair' />
                        <input type='button' value='Wavy' name='Hair' />
                        <input type='button' value='Curly' name='Hair' />
                        <input type='button' value='Afro' name='Hair' />
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5>Face type</h5>
                    <div>
                        <input type='button' value='Long' name='Face' />
                        <input type='button' value='Square' name='Face' />
                        <input type='button' value='Rectangular' name='Face' />
                        <input type='button' value='Round' name='Face' />
                        <input type='button' value='Oval' name='Face' />
                        <input type='button' value='Triangular' name='Face' />
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5>Service</h5>
                    <div>
                        <input type='button' value='Haircut' name='Service' />
                        <input type='button' value='Colorimetry' name='Service' />
                        <input type='button' value='beard trim' name='Service' />
                        <input type='button' value='Tribal design' name='Service' />
                    </div>
                </div>
                <div onClick={handleClick} >
                    <h5>Style</h5>
                    <div>
                        <input type='button' value='Classic' name='Style' />
                        <input type='button' value='American' name='Style' />
                        <input type='button' value='European' name='Style' />
                        <input type='button' value='Regular' name='Style' />
                    </div>
                </div>
            </div>
            <div className={style.section} >
                <div className={style.order} >
                    <select onChange={handleOrder} name='order'>
                        <option >A-Z</option>
                        <option>Z-A</option>
                    </select>
                </div>
                <div className={style.cards} >
                    <div className={style.card} >
                        <Barber />
                    </div>
                    <div className={style.paginate} >
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={10}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={() => console.log('hola')}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}