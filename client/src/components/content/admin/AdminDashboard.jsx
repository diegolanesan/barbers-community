import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBarbers } from "../../../redux/action/barbers";

const AdminDashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBarbers());
        // eslint-disable-next-line
      }, []);
    const barbersLoaded = useSelector((state) => state.barbers.barbersLoaded);
    const status = useSelector((state) => state.barbers.barbersLoaded);
    const active = () => {
        let count = 0
        for(let i = 0; i < barbersLoaded.length; i++) {
            if(barbersLoaded[i].status === true) count++
        }
        return count
    }
    const suspended = () => {
        let count = 0
        for(let i = 0; i < barbersLoaded.length; i++) {
            if(barbersLoaded[i].status === false) count++
        }
        return count
    }
    return (
<div class="w-full max-w-md w-full mx-auto bg-white shadow-md rounded-md px-6 py-4 my-6">
        <div class="sm:flex sm:justify-between">
            <div class="mt-2 sm:mt-0">
            </div>
        </div>
        <div class="flex justify-between items-center mt-4">
            <div>
                <h4 class="text-gray-600 text-sm">Active Barbers</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{active()}</span>
            </div>
            <div>
                <h4 class="text-gray-600 text-sm">Suspended Barbers</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">{suspended()}</span>
            </div>
        </div>
        <div class="flex justify-between items-center mt-4">
        <div>
                <h4 class="text-gray-600 text-sm">Aproved Apoinments</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">1</span>
            </div>
            <div>
                <h4 class="text-gray-600 text-sm">Canceled Apoinments</h4>
                <span class="mt-2 text-xl font-medium text-gray-800">1</span>
            </div>
        </div>
        <div class="mt-3">
            <h4 class="text-gray-600 text-sm">Services</h4>
            <span class="mt-2 text-xl font-medium text-gray-800">28</span>
            
        </div>
    </div>
    )}

export default AdminDashboard