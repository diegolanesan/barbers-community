import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBarbers } from "../../../redux/action/barbers";
import { getClients } from "../../../redux/action/clients";
import { getPaidAppointments, getActiveAppointments, getRejectedAppointments, getAppointments } from "../../../redux/action/cart";

const AdminDashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBarbers());
        dispatch(getClients());
        dispatch(getAppointments());
        dispatch(getPaidAppointments());
        dispatch(getActiveAppointments());
        dispatch(getRejectedAppointments());
        // eslint-disable-next-line
      }, []);
    const barbersLoaded = useSelector((state) => state.barbers.barbersLoaded);
    const clientsLoaded = useSelector((state) => state.clients.clientsLoaded);
    const Appointments = useSelector((state) => state.cart.appoinments);
    const {Paid, Active, Rejected} = useSelector((state) => state.cart);
    const activeBarbers = () => {
        let count = 0
        for(let i = 0; i < barbersLoaded.length; i++) {
            if(barbersLoaded[i].status === true) count++
        }
        return count
    }
    const suspendedBarbers = () => {
        let count = 0
        for(let i = 0; i < barbersLoaded.length; i++) {
            if(barbersLoaded[i].status === false) count++
        }
        return count
    }
    const activeClients = () => {
        let count = 0
        for(let i = 0; i < clientsLoaded.length; i++) {
            if(clientsLoaded[i].status === "active" && clientsLoaded[i].rol === "client") count++
        }
        return count
    }
    const suspendedClients = () => {
        let count = 0
        for(let i = 0; i < clientsLoaded.length; i++) {
            if(clientsLoaded[i].status === "banned" && clientsLoaded[i].rol === "client") count++
        }
        return count
    }
    return (
        <div>
<div class="w-full max-w-md w-full mx-auto bg-white shadow-md rounded-md px-6 py-4 my-6">
        <div class="sm:flex sm:justify-between">
            <div class="mt-2 sm:mt-0">
            </div>
        </div>
        <div class="flex justify-between items-center mt-4">
            <div>
                <h4 class="text-gray-600 text-sm">Active Barbers</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{activeBarbers()}</span>
            </div>
            <div>
                <h4 class="text-gray-600 text-sm">Suspended Barbers</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{suspendedBarbers()}</span>
            </div>
        </div>
        <div class="flex justify-between items-center mt-4">
            <div>
                <h4 class="text-gray-600 text-sm">Active Clients</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{activeClients()}</span>
            </div>
            <div>
                <h4 class="text-gray-600 text-sm">Suspended CLients</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{suspendedClients()}</span>
            </div>
        </div>
        <div class="flex justify-between items-center mt-4">
            <div>
                <h4 class="text-gray-600 text-sm">Aproved Apoinments</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{Paid? Paid: 0}</span>
            </div>
            <div>
                <h4 class="text-gray-600 text-sm">Canceled Apoinments</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{Rejected? Rejected: 0}</span>
            </div>
            <div>
                <h4 class="text-gray-600 text-sm">Active Apoinments</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{Active ? Active: 0}</span>
            </div>
        </div>
        </div>

        <div className="tracking-wide font-bold bg-gray-200">
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
            {Appointments && Appointments.length > 0 ? Appointments.map((c, id) => {
                return <tr key={id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        {c.barberId}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        {c.date && c.date.slice(0, 15)} ({c.time})
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        ${c.totalAmount}   
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        {c.state}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        {c.client.name + " " + c.client.lastname}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        {c.serviceBarbers.map(n => "| " + n.item.serviceName + " |")}
                    </td>
                </tr>
            }) : ""}
        </tbody>
    </table>
    </div>
</div>
    )}

export default AdminDashboard