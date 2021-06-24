import React, { useState, /* useEffect */ } from 'react'
import AdminUsers from "./Users"
import AdminRates from './Rates'

export default function AdminDesk() {
	/* const dispatch = useDispatch() */
/*     useEffect(() => {
    
    }, [dispatch])

    const allAppointments = useSelector(state => state.clients.appointments) */

    const buttonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-1 px-0 mx-0 mb-0 w-full"
    const buttonSelected = "bg-blue-800 text-white py-1 px-0 mx-0 mb-0 w-full"

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
                    <input type='button' value='Params' name='menu' className={buttonState.menu === 'Params' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Rates' name='menu' className={buttonState.menu === 'Rates' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Users' name='menu' className={buttonState.menu === 'Users' ? buttonSelected : buttonStyle} />
                </div>
                <div className="w-1/6 absolute bottom-2" >
                    <input type='button' value='Config' name='menu' className={buttonState.menu === 'Config' ? buttonSelected : buttonStyle} />
                </div>
            </div>
            <div className="w-5/6" >
                {buttonState.menu === 'Dashboard' && (
                    <div>Dashboard</div>
                )}
                {buttonState.menu === 'Params' && (
                    <div>Params</div>
                )}
                {buttonState.menu === 'Rates' && (
                    <AdminRates/>
                )}
                {buttonState.menu === 'Users' && (
                    <AdminUsers/>
                )}
                {buttonState.menu === 'Config' && (
                    <div>Config</div>
                )}
            </div>
        </div>
    )}