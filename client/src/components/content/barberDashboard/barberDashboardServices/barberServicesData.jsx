import React, { useEffect, useState } from 'react'
import barbers from '../../../../data'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToService, getBarbers, removeFromService } from '../../../../redux/action/barbers';
import { getServices, postBarberService } from '../../../../redux/action/services';
import jwtDecode from "jwt-decode"

const BarberServicesData = ({ filters }) => {
    const dispatch = useDispatch();
    const { resp } = useSelector((state) => state);
    const services = useSelector((state) => state.services.array);
    const barbers = useSelector((state) => state.barbers.services)
    const { id } = useParams()
    //console.log(id);
    useEffect(() => {
        // console.log(id + "");
        //dispatch(barberDetail(id));
        // dispatch(getBarbers());
        dispatch(getServices())
    }, []);

    const barberId = localStorage.getItem("barberToken")
    const barberData = jwtDecode(barberId)
    const [data, setData] = useState({ price: "", barberId: "", serviceId: "" })
    console.log(data)
    const handleAdd = (e) => {
        dispatch(addToService(e))
    }

    const handleRemove = (e) => {
        dispatch(removeFromService(e))
    }

    const handleChange = (e) => {

    }

    const postService = () => {
        const barberService = {
            price: data.price,
            barberId: barberData.id,
            serviceId: barbers.id
        }
        dispatch(postBarberService(barberService))
    }

    const filtered = services.filter(n => n.Categories ? n.Categories.name === filters : 0)
    console.log(filtered)
    // const barbersPerPage = services
    const [appointment, setAppointment] = useState({ service: "", extraOne: "", extraTwo: "", extraThree: "", seleccion: false })
    //console.log(appointment)
    return (
        <div>
            <div className="grid overflow-auto h-96 sm:grid-cols-1 sm:grid-cols-6">
                {filtered &&
                    filtered.map((n) => (
                        <div
                            key={n.id}
                            className="text-center m-8 border rounded-xl pb-1 w-4/5 shadow-md"
                        >

                            <img
                                className="rounded-lg h-30 w-full"
                                src={n.image[0]}
                                alt=""
                                width="200px"
                                height="200px"
                            />
                            <h4 className="font-bold">{`${n.name}`}</h4>
                            {filters === "HAIRCUT" ? barbers.haircut.length !== 0 && n.name === barbers.haircut[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "KIDHAIRCUT" ? barbers.kids.length !== 0 && n.name === barbers.kids[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "MASK" ? barbers.mask.length !== 0 && n.name === barbers.mask[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "OZON" ? barbers.ozon.length !== 0 && n.name === barbers.ozon[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "HAIRCOLOR" ? barbers.color.length !== 0 && n.name === barbers.color[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "DESIGN" ? barbers.design.length !== 0 && n.name === barbers.design[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "BEARDCUT" ? barbers.beard.length !== 0 && n.name === barbers.beard[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                        </div>
                    ))}
            </div>
            <div className="border-t-4 border-blue-400 mt-10"></div>
            <div className="flex justify-center text-2xl font-semibold text-gray-900 leading-8 mt-4 ">
                <span className="tracking-wide"> Your New Service </span>
            </div>
            <div>
                <div className="grid sm:grid-cols-3 mt-6 mb-4 grid-cols-1">
                    <div>
                        <label className="font-semibold text-gray-900 leading-8 mr-2">Service Name:</label>
                        <input className="border-2 border-gray-700 rounded"></input>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-900 leading-8 mr-2">Description:</label>
                        <input className="border-2 border-gray-700 rounded"></input>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-900 leading-8 mr-2">Price:</label>
                        <input onChange={(e) => setData({ price: e.target.value })} className="border-2 border-gray-700 rounded"></input>
                    </div>
                </div>
                {/* <div className="grid overflow-auto h-96 sm:grid-cols-1 sm:grid-cols-6">
                    {appointment && appointment.service ? <div
                        key={appointment.id}
                        className="text-center m-8 border rounded-xl pb-1 shadow-md"
                    >

                        <img
                            className="rounded-lg h-24 w-full"
                            src='https://www.pngitem.com/pimgs/m/15-151671_barber-barber-icon-png-transparent-png.png'
                            alt=""
                            width="200px"
                            height="200px"
                        />
                        <h4 className="font-bold">{`${appointment.name} ${appointment.lastName} (${appointment.alias})`}</h4>
                        <div className="flex justify-center pt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 m-0 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <h6 className="ml-4">{appointment.rating}</h6>
                        </div>
                    </div> : ""}
                </div> */}
            </div>

            <div className="flex justify-center mt-10">
                <button onClick={() => postService()} className="bg-blue-400 px-8 py-2 rounded">Post</button>
            </div>
        </div>
    )
}

export default BarberServicesData
