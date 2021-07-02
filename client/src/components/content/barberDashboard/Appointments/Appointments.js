import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeOrderStatus, getCartsByBarberId } from '../../../../redux/action/cart'
import jwtDecode from 'jwt-decode'
import Swal from 'sweetalert2'

const AppointmentsDash = () => {
    const dispatch = useDispatch()
    const token = jwtDecode(localStorage.getItem("barberToken"))
    const appointments = useSelector(state => state.cart.barberAppointments)
    
    useEffect(() => {
        dispatch(getCartsByBarberId(token.id))
      // eslint-disable-next-line
    }, [])

    const [filtered, setFiltered] = useState([])

    const handleFilter = (e) => {
        setFiltered(appointments.filter(n => n.orderStatus === e.target.value))
    }

    const handleClick = async(e) =>  {
        e.preventDefault()
        await dispatch(changeOrderStatus(e.target.name, {status: e.target.title}))
        Swal.fire({
            title: (e.target.title === "Completed" ?'Completed!!':
                     e.target.title === "In progress" ?'In progress!!' :
                     'Pending!!'),
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(getCartsByBarberId(token.id))
            }
          })
    }

    return (
        <div className="tracking-wide font-bold bg-gray-200">
            <div className=" mb-4 flex flex-col">
                {/* <button
                    className="inline-block px-12 flex justify-center w-10 h-11 h-10 -py-3 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                    <a href="/postCategory">
                        Create category
                    </a>
                </button> */}
                <div className="relative self-end mr-6 my-4 mb-1">
                    {/* <input type="search" className="bg-purple-white w-26 shadow rounded border-0 p-3" placeholder="Search by name...   " />
                    <button className="bg-gray" title="Buscar Categoria">🔍</button> */}
                    <div className="mt-5 mr-5 " >
                        <select className="px-2 mr-8 rounded" onChange={handleFilter} name='filter'>
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
                    {filtered.length ? filtered.map((c, id) => {
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
                        </tr>
                    }) : appointments.map((c, id) => {
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
                        </tr>
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default AppointmentsDash