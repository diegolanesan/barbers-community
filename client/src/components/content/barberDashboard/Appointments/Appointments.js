import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getAppointmentByBarber } from '../../../../redux/action/appointment'
import { changeOrderStatus, getCartsByBarberId } from '../../../../redux/action/cart'
// import { Link } from 'react-router-dom'
// import DetailsAppointment from './DetailsAppointment.js'
import jwtDecode from 'jwt-decode'

const AppointmentsDash = () => {
    const dispatch = useDispatch()
    const token = jwtDecode(localStorage.getItem("barberToken"))
    // const idBarber = useState(1)
    const appointments = useSelector(state => state.cart.barberAppointments)
    
    useEffect(() => {
        dispatch(getCartsByBarberId(token.id))
      // eslint-disable-next-line
    }, [])

    // console.log(appointments)

    const [filtered, setFiltered] = useState([])

    const handleFilter = (e) => {
        setFiltered(appointments.filter(n => n.status === e.target.value))
    }

    const handleClick = async(e) =>  {
        e.preventDefault()
        await dispatch(changeOrderStatus(e.target.name, {status: e.target.title}))
        dispatch(getCartsByBarberId(token.id))
    }

    return (
        <div className="tracking-wide font-bold bg-gray-200">
            <div className=" mb-4  flex justify-center">
                {/* <button
                    className="inline-block px-12 flex justify-center w-10 h-11 h-10 -py-3 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                    <a href="/postCategory">
                        Create category
                    </a>
                </button> */}
                <div className="relative mr-6 my-4 mb-1">
                    <input type="search" className="bg-purple-white w-26 shadow rounded border-0 p-3" placeholder="Search by name...   " />
                    <button className="bg-gray" title="Buscar Categoria">🔍</button>
                    <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
                        <svg version="1.1" class="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 52.966 52.966" style={{ enableBackground: "new 0 0 52.966 52.966" }} xmlSpace="preserve">
                        </svg>
                    </div>
                </div>
            </div >

            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">#</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Details</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">$</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Client</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Service</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments && appointments.length > 0 ? appointments.map((c, id) => {
                        return <tr key={id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                {c.id}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.date.slice(0, 15)} ({c.time})
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.state}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <div onClick={handleClick} className="flex gap-5 justify-center" >
                                    <button title="Pending" name={c.id} className={c.orderStatus === "Pending" ? "flex text-white bg-red-700 border-0  mt-2 mb-2 py-2 px-6 focus:outline-none rounded" : "flex text-white bg-red-400 border-0  mt-2 mb-2 py-2 px-6 focus:outline-none hover:bg-red-500 rounded"}>
                                        Pending
                                    </button>
                                    <button title="In progress" name={c.id} className={c.orderStatus === "In progress" ? "flex text-white bg-yellow-700 border-0  mt-2 mb-2 py-2 px-6 focus:outline-none rounded" : "flex text-white bg-yellow-400 border-0  mt-2 mb-2 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded"}>
                                        In progress
                                    </button>
                                    <button  title="Completed" name={c.id} className={c.orderStatus === "Completed" ? "flex text-white bg-green-700 border-0  mt-2 mb-2 py-2 px-6 focus:outline-none rounded" : "flex text-white bg-green-400 border-0  mt-2 mb-2 py-2 px-6 focus:outline-none hover:bg-green-500 rounded"}>
                                        Completed
                                    </button>
                                </div>
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.client.name + " " + c.client.lastname}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.serviceBarbers.map(n => "| " + n.item.serviceName + " |")}
                            </td>
                            {/* <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <div className="flex gap-5 justify-center" >
                                    <button onClick={() => deleteC(c.id)} title="Delete Admin" className="flex text-white bg-red-500 border-0  mt-4 py-2 px-6 focus:outline-none hover:bg-red-700 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" /></svg>
                                    </button>
                                </div>
                            </td> */}
                        </tr>
                    }) : ""}
                </tbody>
            </table>
            <br></br>
            <div className="flex justify-center">
                <button className="border border-teal-500 bg-teal-500 text-black block rounded-sm font-bold py-4 px-6 ml-2 flex items-center">
                    <svg className="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style={{ enableBackground: 'new -49 141 512 512' }} xmlSpace="preserve">
                        <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
                    </svg>
                    Previous page
                </button>
                <button className="border border-teal-500 bg-teal-500 text-black block rounded-sm font-bold py-4 px-6 ml-2 flex items-center" >
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
        // <div className='flex flex-col' >
        //     <div className="mt-5 self-end mr-5 " >
        //         <select className="px-2 mr-8 rounded" onChange={handleFilter} name='filter'>
        //             <option >All</option>
        //             <option>Approved</option>
        //             <option>Pending</option>
        //             <option>Canceled</option>
        //         </select>
        //     </div>
        //     <div className='flex h-96 w-full my-5 justify-center overflow-y-auto' >
        //         <table className='w-11/12 text-center ' >
        //             <tr>
        //                 <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >#</th>
        //                 <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >Details</th>
        //                 <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >Status</th>
        //                 <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >Name</th>
        //                 <th className='border-solid border-2 border-black w-5 max-w-5 h-10 max-h-5' >Service</th>
        //             </tr>
        //             {filtered.length ? filtered.map(n => (
        //                 <tr >
        //                     <td>{n.appointmentId}</td>
        //                     <td>{n.date}</td>
        //                     <td>{n.status}</td>
        //                     <td>{n.name}</td>
        //                     <td>{n.time}</td>
        //                 </tr>
        //             )) : (
        //                 appointments.map(n => (
        //                     <tr key={n.appointmentId} >
        //                         <Link to={`/barbers/dashboard/${n.id}`} ><td>{n.id}</td></Link>
        //                         <td>{n.date.slice(0, 15)} ({n.time})</td>
        //                         <td>{n.state}</td>
        //                         <td>{n.client.name + " " + n.client.lastname}</td>
        //                         <td>{n.serviceBarbers.map(n => "| " + n.item.serviceName + " |")}</td>
        //                     </tr>
        //                 )) 
        //             )}
        //         </table>
        //     </div>
        // </div>
    )
}

export default AppointmentsDash