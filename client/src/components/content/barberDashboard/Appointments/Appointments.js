import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAppointmentByBarber } from '../../../../redux/action/appointment'

const AppointmentsDash = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAppointmentByBarber(1))
      // eslint-disable-next-line
    }, [])

    const appointments = useSelector(state => state.appointments.appointmentsById)

    console.log(appointments)

    const [filtered, setFiltered] = useState([])

    const handleFilter = (e) => {
        setFiltered(appointments.filter(n => n.status === e.target.value))
    }

    return (
        <div className='flex flex-col' >
            <div className="mt-5 self-end mr-5 " >
                <select className="px-2 mr-8 rounded" onChange={handleFilter} name='filter'>
                    <option >All</option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Canceled</option>
                </select>
            </div>
            <div className='flex h-96 w-full my-5 justify-center overflow-y-auto' >
                <table className='w-11/12 text-center ' >
                    <tr>
                        <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >#</th>
                        <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >Details</th>
                        <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >Status</th>
                        <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >Name</th>
                        <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >Service</th>
                    </tr>
                    {filtered.length ? filtered.map(n => (
                        <tr >
                            <td>{n.id}</td>
                            <td>{n.date}</td>
                            <td>{n.status}</td>
                            <td>{n.name}</td>
                            <td>{n.time}</td>
                        </tr>
                    )) : (
                        appointments.map(n => (
                            <tr >
                                <td>{n.id}</td>
                                <td>{n.date}</td>
                                <td>{n.status}</td>
                                <td>{n.name}</td>
                                <td>{n.time}</td>
                            </tr>
                        )) 
                    )}
                </table>
            </div>
        </div>
    )
}

export default AppointmentsDash