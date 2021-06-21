import React from 'react'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'


function ClientData({allAppointments}) {

    
    const user = jwtDecode(localStorage.getItem("clientToken"))
    const clientAppointments = allAppointments.filter(app => app.clientId === user.id )
    

    return (
<div>
                        <h2 class="text-3xl font-bold mt-12">¡Welcome {user.name}! </h2>
                        <hr class="my-4 w-4/5"></hr>
                        <h3 class="text-xl font-bold mt-4"> Appointment history </h3>
                        <div class="flex flex-row items-center justify-around">   
                            <div class="rounded-full h-36 w-36 mt-6 flex flex-col items-center justify-center text-center bg-blue-700"> 
                            <p class="text-white font-bold text-3xl"> {clientAppointments.length} </p>
                            <p class="text-white text-lg"> appointments </p> 
                        </div>
                        <div> 
                            <button class="bg-blue-800 text-2xl p-6 rounded-3xl text-white mr-16 hover:bg-blue-600"> 
                               <Link to="/catalog"> Reserve </Link> 
                            </button>
                        </div>
                    </div>
                    <table class="table-fixed mt-8 w-4/5">
                    <thead>
                            <tr>
                            <th class="w-12 p-4"> # </th>
                            <th class="w-1/2">Date</th>
                            <th class="w-1/4">Status</th>
                            <th class="w-1/4"> Total price </th>
                            </tr>
                        </thead>
                        {
                            clientAppointments.map(app => {
                                return <tbody class="text-center">
                                <tr>
                                <td> {app.id} </td>
                                <td> {app.date.slice(0, 10)} </td>
                                <td> {app.status} </td>
                                <td> {app.total} </td>
                                </tr>
                            </tbody>})
                        }
                        
                        
                    </table>
                    </div>
    )
}

export default ClientData
