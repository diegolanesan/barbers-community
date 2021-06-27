import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAppointmentDetails } from '../../../../redux/action/appointment'
import { Link } from "react-router-dom"

const DetailsAppointment = ({match}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAppointmentDetails(match.params.id))
    }, [])

    const appointmentDetails = useSelector(state => state.appointments.appointmentDetails)
    // console.log(appointmentDetails)

    return (
        <div className="flex flex-col fixed z-40 bg-black bg-opacity-75 w-screen h-screen justify-center items-center" >
            <Link className="self-end" to="/barbers/dashboard" ><button className="text-white mx-72 mb-10 bg-blue-400 p-4 rounded" >X</button></Link>
            {/* <button onClick={() => window.history.back()} className="text-white mx-72 mb-10 bg-blue-400 p-4 rounded" >X</button> */}
            {appointmentDetails && <div className="flex flex-col bg-white w-7/12 h-3/6 justify-center items-center rounded-3xl" >
                <h2><b>Client:</b> {appointmentDetails.name}</h2>
                <h2><b>Service date:</b> {appointmentDetails.date}</h2>
                <h2><b>Service time:</b> {appointmentDetails.time}</h2>
                <h2><b>Total price:</b> {appointmentDetails.total}</h2>
                <div className="flex flex-col" >
                    <h2><b>Services:</b></h2>
                    <div className="grid grid-cols-3 gap-2 place-content-center" >
                        {appointmentDetails.service && appointmentDetails.service.map(n => (
                            <div className="text-center" >
                                <img src={n.image[Math.floor(Math.random() * n.image.length)]} alt="" className="w-52 h-56" />
                                <h2>{n.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default DetailsAppointment