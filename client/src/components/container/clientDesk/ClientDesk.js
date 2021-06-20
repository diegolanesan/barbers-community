import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BarberServicesDashboard from './clientDashboardServices/ClientServicesDashboard'
import AppointmentsDash from './appointments/Appointments.js'

// import style from './barberDashboard.module.css'

const ClientDesk = () => {
    const buttonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-1 px-0 mx-0 mb-0 w-full"
    const buttonSelected = "bg-blue-800 text-white py-1 px-0 mx-0 mb-0 w-full"
    const filterButtonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-2 px-5 mx-2 mt-3 mb-3"
    const filterSelected = "bg-blue-800 text-white py-2 px-5 mx-2 mt-3 mb-3"

    const auth = useSelector(state => state.auth)
    const [buttonState, setButtonState] = useState({
        menu: 'Dashboard',
        filters: 'HAIRCUT',
    })

    const handleClick = (e) => {
        if(!e.target.name) e.preventDefault()
        else {
            if(e.target.name === 'menu') setButtonState({...buttonState, [e.target.name]: e.target.value})
            else setButtonState({...buttonState, [e.target.name]: e.target.id})
        }
    }

    return (
        <div className="flex h-full " >
            <div className={`w-1/6 bg-gray-200 mr-12`} onClick={handleClick} >
                <div>  
                    <input type='button' value='Dashboard' name='menu' className={buttonState.menu === 'Dashboard' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Appointments' name='menu' className={buttonState.menu === 'Appointments' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Invoices' name='menu' className={buttonState.menu === 'Invoices' ? buttonSelected : buttonStyle} />
                </div>
            
                <div className="w-1/6 absolute bottom-2" >
                    <input type='button' value='Config' name='menu' className={buttonState.menu === 'Config' ? buttonSelected : buttonStyle} />
                </div>
            </div>
            <div className="w-5/6" >
                {buttonState.menu === 'Dashboard' && (
                    <div>
                        <h2 class="text-3xl font-bold mt-12">¡Welcome client! </h2>
                        <hr class="my-4 w-4/5"></hr>
                        <h3 class="text-xl font-bold mt-4"> Appointment history </h3>
                        <div class="flex flex-row items-center justify-around">   
                            <div class="rounded-full h-36 w-36 mt-6 flex flex-col items-center justify-center text-center bg-blue-700"> 
                            <p class="text-white font-bold text-3xl"> 5 </p>
                            <p class="text-white text-lg"> appointments </p> 
                        </div>
                        <div> 
                            <button class="bg-blue-800 text-2xl p-6 rounded-3xl text-white mr-16 hover:bg-blue-600"> 
                                Reserve 
                            </button>
                        </div>
                    </div>
                    <table class="table-fixed mt-8 w-4/5">
                        <thead>
                            <tr>
                            <th class="w-12 p-4"> # </th>
                            <th class="w-1/2">Details</th>
                            <th class="w-1/4">Status</th>
                            <th class="w-1/4">Order Number </th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                            <td> 1 </td>
                            <td> Hair cut </td>
                            <td> Complete </td>
                            <td> 111 </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                )}
                {buttonState.menu === 'Appointments' && (
                    <div className="grid" >
                        <AppointmentsDash />
                    </div>
                )}

                {buttonState.menu === 'Config' && (
                    <div>Config</div>
                )}
            </div>
        </div>
    )
}

export default ClientDesk