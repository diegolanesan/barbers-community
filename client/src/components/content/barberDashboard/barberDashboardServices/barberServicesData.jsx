import React, { useState } from 'react'
import barbers from '../../../../data'
import { Link } from "react-router-dom";

const BarberServicesData = () => {
    const barbersPerPage = barbers
    const [appointment, setAppointment] = useState({ service: "", extraOne: "", extraTwo: "", extraThree: "", seleccion: false })
    console.log(appointment)
    return (
        <div className="grid overflow-auto h-96 sm:grid-cols-1 sm:grid-cols-6">
            {barbersPerPage &&
                barbersPerPage.map((n) => (
                    <div
                        key={n.id}
                        className="text-center m-8 border rounded-xl pb-1 shadow-md"
                    >

                        <img
                            className="rounded-lg h-24 w-full"
                            src='https://www.pngitem.com/pimgs/m/15-151671_barber-barber-icon-png-transparent-png.png'
                            alt=""
                            width="200px"
                            height="200px"
                        />
                        <h4 className="font-bold">{`${n.name} ${n.lastName} (${n.alias})`}</h4>
                        <div className="flex justify-center pt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 m-0 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <h6 className="ml-4">{n.rating}</h6>
                        </div>
                        {
                            appointment.seleccion === false && n.name === appointment.service ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => setAppointment({ service: "", extraOne: "", extraTwo: "", extraThree: "", seleccion: true })}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => setAppointment({ service: n.name, extraOne: n.lastName, extraTwo: n.alias, extraThree: n.rating, seleccion: false })}>Add</button>}
                    </div>
                ))}
        </div>
    )
}

export default BarberServicesData
