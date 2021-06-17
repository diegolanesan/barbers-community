import React, { useState } from 'react'
// import style from './barberDashboard.module.css'

const BarberDashboard = () => {
    const buttonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-1 px-0 mx-0 mb-0 w-full"
    const buttonSelected = "bg-blue-800 text-white py-1 px-0 mx-0 mb-0 w-full"
    const [buttonState, setButtonState] = useState({
        menu: 'Dashboard'
    })

    const handleMenuClick = (e) => {
        if(!e.target.name) e.preventDefault()
        else setButtonState({...buttonState, [e.target.name]: e.target.value})
    }

    return (
        <div className="flex h-full " >
            <div className={`w-1/6 bg-gray-200`} onClick={handleMenuClick} >
                <div>  
                    <input type='button' value='Dashboard' name='menu' className={buttonState.menu === 'Dashboard' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Appointments' name='menu' className={buttonState.menu === 'Appointments' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Invoices' name='menu' className={buttonState.menu === 'Invoices' ? buttonSelected : buttonStyle} />
                </div>
                <div>  
                    <input type='button' value='Catalog' name='menu' className={buttonState.menu === 'Catalog' ? buttonSelected : buttonStyle} />
                </div>
                <div className="w-1/6 absolute bottom-2" >
                    <input type='button' value='Config' name='menu' className={buttonState.menu === 'Config' ? buttonSelected : buttonStyle} />
                </div>
            </div>
            <div className="w-5/6" >
                {buttonState.menu === 'Dashboard' && (
                    <div>Dashboard</div>
                )}
                {buttonState.menu === 'Appointments' && (
                    <div>Appointments</div>
                )}
                {buttonState.menu === 'Invoices' && (
                    <div>Invoices</div>
                )}
                {buttonState.menu === 'Catalog' && (
                    <div>
                        <div>filtros</div>
                        <div>servicios</div>
                    </div>
                )}
                {buttonState.menu === 'Config' && (
                    <div>Config</div>
                )}
            </div>
        </div>
    )
}

export default BarberDashboard