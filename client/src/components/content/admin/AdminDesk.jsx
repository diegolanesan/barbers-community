import React, { useState, /* useEffect */ } from 'react'
import AdminConfig from './AdminConfig'
import AdminDashboard from './AdminDashboard'
import AdminAdmins from './Users/Admins'
import AdminBarbers from "./Users/Barbers"
import AdminClients from './Users/Clients'

export default function AdminDesk() {
	/* const dispatch = useDispatch() */
/*     useEffect(() => {
    
    }, [dispatch])

    const allAppointments = useSelector(state => state.clients.appointments) */

    const buttonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-1 px-0 mx-0 mb-0 w-full"
    const buttonSelected = "bg-blue-800 text-white py-1 px-0 mx-0 mb-0 w-full"

    const [buttonState, setButtonState] = useState({
        menu: 'Dashboard',
        filters: 'BARBERS',
    })

    const handleClick = (e) => {
        if(!e.target.name) e.preventDefault()
        else {
            if(e.target.name === 'menu') setButtonState({...buttonState, [e.target.name]: e.target.value})
            else setButtonState({...buttonState, [e.target.name]: e.target.value})
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
                    <input type='button' value='Barbers' name='menu' className={buttonState.menu === 'Barbers' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Clients' name='menu' className={buttonState.menu === 'Clients' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Admins' name='menu' className={buttonState.menu === 'Admins' ? buttonSelected : buttonStyle} />
                </div>
                <div className="w-1/6 absolute bottom-2" >
                    <input type='button' value='Config' name='menu' className={buttonState.menu === 'Config' ? buttonSelected : buttonStyle} />
                </div>
            </div>
            <div className="w-5/6" >
                {buttonState.menu === 'Dashboard' && (
                    <AdminDashboard/>
                )}
                {buttonState.menu === 'Params' && (
                    <div>Params</div>
                )}
                {buttonState.menu === 'Rates' && (
                    <div>Rates</div>
                )}
                {buttonState.menu === 'Barbers' && (
                    <AdminBarbers/>
                )}
                {buttonState.menu === 'Clients' && (
                    <AdminClients/>
                )}
                {buttonState.menu === 'Admins' && (
                    <AdminAdmins/>
                )}
                {buttonState.menu === 'Config' && (
                    <AdminConfig/>
                )}
            </div>
        </div>
    )}