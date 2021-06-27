import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
//import { HOST_BACK } from '../../../redux/back_constants'
import { changeCartStateMercadoPago, getCartsByUser, addToCart } from '../../../redux/action/cart'

function ClientData({allAppointments}) {
    
    const user = jwtDecode(localStorage.getItem("clientToken"))

    const clientAppointments = allAppointments.filter(app => app.clientId === user.id )

    const appointments = useSelector(state => state.cart.clientsAppointments)

    const dispatch = useDispatch()

    const search = useLocation().search;

    const state = new URLSearchParams(search).get('collection_status');
    useEffect(() => {
        dispatch(getCartsByUser(user.id));
        
        if (state && state === "approved") {
            dispatch(changeCartStateMercadoPago(user.id, {state: "Paid"}))
        }

        if (state && state === "rejected") {
            dispatch(changeCartStateMercadoPago(user.id, {state: "Rejected"}))
        }

        if (state && state === "pending") {
            dispatch(changeCartStateMercadoPago(user.id, {state: "Pending"}))
        }

    }, [])
    
    function dispatchAdd(id, service) {
        dispatch(addToCart(id, service));
    }

    async function onClick(state, service) {
        if(state === "Paid"){
                service?.serviceBarbers && service?.serviceBarbers?.map (async x => {
                    let serviceToRepeat = {
                        serviceBarberId : x.id,
                        name : x.name,
                        price : x.price
                    }
                    dispatchAdd(user.id, serviceToRepeat);
                    // window.location.href = `http://localhost:3000/cart`
                })
                localStorage.setItem("barberId", service.serviceBarberId);
        } else {
            alert("You need to have your appointment approved to repeat it!");
        }
    }
    

    return (
        <div>
            <h2 class="text-3xl font-bold mt-12">Welcome, {user.name}! </h2>
            <hr class="my-4 w-4/5"></hr>
            <h3 class="text-xl font-bold mt-4"> Appointment history </h3>
            <div class="flex flex-row items-center justify-around">   
                <div class="rounded-full h-36 w-36 mt-6 flex flex-col items-center justify-center text-center bg-blue-700"> 
                    <p class="text-white font-bold text-3xl"> {clientAppointments.length} </p>
                    <p class="text-white text-lg"> appointments </p> 
                </div>
                <div> 
                    <button class="bg-blue-800 text-2xl p-6 rounded-3xl text-white mr-16 hover:bg-blue-600"> 
                        <Link to="/catalog">Schedule an appointment</Link> 
                    </button>
                </div>
            </div>
            <table class="table-fixed mt-8 w-4/5">
            <thead>
                <tr>
                <th class="w-12 p-4"> # </th>
                <th class="w-1/2">Date</th>
                <th class="w-1/2">Services</th>
                <th class="w-1/4">Status</th>
                <th class="w-1/4"> Total price </th>
                </tr>
            </thead>
                {
                    appointments && appointments.length > 0 ? 
                    appointments.map(app => {
                        return <tbody class="text-center">
                        <tr>
                        <td> {app.id} </td>
                        <td> {app.date && app.date.slice(0, 10)} </td>
                        <td> {app.serviceBarbers && app.serviceBarbers.map(x => {
                             if(app.serviceBarbers.length > 1){
                                return "| " + x.name + " |";
                            } else {return x.name + " "}
                        })} </td>
                        <td> {app && app.state} </td>
                        <td> $ {app.totalAmount && app.totalAmount} </td>
                        <td><button onClick={() => onClick(app.state, app)} class="h-8 px-4 text-sm text-white transition-colors bg-blue-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-blue-600">Details</button></td>
                        </tr>
                    </tbody>}) : ""
                }
            </table>
        </div>
    )
}

export default ClientData;