import React, { useEffect, useState} from 'react'
import jwtDecode from 'jwt-decode'
import { getCartsByUser } from '../../../../redux/action/cart'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AppointmentsDashClient = () => {
    const dispatch = useDispatch()
    const user = jwtDecode(localStorage.getItem("clientToken"))
    useEffect(() => {
        dispatch(getCartsByUser(user.id))
      // eslint-disable-next-line
    }, [])

    const clientsAppointments = useSelector(state => state.cart.clientsAppointments)
    console.log(clientsAppointments)
    // const clientAppointments = allAppointments.filter(app => app.clientId === user.id )
    const [filtered, setFiltered] = useState([])

    // console.log(filtered)
    
    const handleFilter = (e) => {
        setFiltered(clientsAppointments.filter(n => n.orderStatus === e.target.value))
    }

    return (
        <div className="tracking-wide font-bold bg-background">
            <div className=" mb-4 flex flex-col">
                
                <div className="relative self-end mr-6 my-4 mb-1">
                   
                    <div className="mt-5 mr-5" >
                        <select className="px-2 mr-14 rounded" onChange={handleFilter} name='filter'>
                            <option >All</option>
                            <option>Pending</option>
                            <option>In progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
                        <svg version="1.1" class="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 52.966 52.966" style={{ enableBackground: "new 0 0 52.966 52.966" }} xmlSpace="preserve">
                        </svg>
                    </div>
                </div>
            </div >

            <table className="border-collapse w-5/6 mx-auto">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">#</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">Details</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">$</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">Status</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">Barber</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 hidden lg:table-cell">Service</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.length ? filtered.map((c, id) => {
                        return <tr key={id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                {c.id}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.date && c.date.slice(0, 15)} ({c.time})
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.state}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.orderStatus}
                               
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <Link className="text-blue-900" to={"/detail/" + c.barberId} >{c.barberName}</Link>
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.serviceBarbers.map(n => "| " + n.item.serviceName + " |")}
                            </td>
                        </tr>
                    }) : clientsAppointments.map((c, id) => {
                        return <tr key={id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                {c.id}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.date && c.date.slice(0, 15)} ({c.time})
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.state}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.orderStatus}
                               
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <Link className="text-blue-900" to={"/detail/" + c.barberId} >{c.barberName}</Link>
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.serviceBarbers.map(n => "| " + n.item.serviceName + " |")}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <br></br>
            <div className="flex justify-center">
                <button className="border block font-bold py-4 px-6 ml-2 flex items-center hover:bg-primary hover:text-white">
                    <svg className="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style={{ enableBackground: 'new -49 141 512 512' }} xmlSpace="preserve">
                        <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
                    </svg>
                    Previous page
                </button>
                <button className="border block font-bold py-4 px-6 ml-2 flex items-center hover:bg-primary hover:text-white" >
                    Next page
                    <svg className="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="-49 141 512 512" style={{ enableBackground: 'new -49 141 512 512' }} xmlSpace="preserve">
                        <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default AppointmentsDashClient;