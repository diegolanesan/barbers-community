import React, { useState } from 'react'
import BarberServicesDashboard from './barberDashboardServices/BarberServicesDashboard.jsx'
import AppointmentsDash from './Appointments/Appointments.js'
import InvoicesDash from './Invoices/Invoices'
import BarberConfig from '../barberConfig/BarberConfig.jsx'
import Error from '../error/Error.js'
import jwtDecode from 'jwt-decode'
import BarberCatalog from './BarberCatalog.jsx'
// import style from './barberDashboard.module.css'

const BarberDashboard = () => {
    const buttonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-1 px-0 mx-0 mb-0 w-full"
    const buttonSelected = "bg-blue-800 text-white py-1 px-0 mx-0 mb-0 w-full"
    const filterButtonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-2 px-5 mx-2 mt-3 mb-3"
    const filterSelected = "bg-blue-800 text-white py-2 px-5 mx-2 mt-3 mb-3"
    const barber = localStorage.getItem("barberToken") ? jwtDecode(localStorage.getItem("barberToken")) : false;

    const [buttonState, setButtonState] = useState({
        menu: 'Appointments',
        filters: 'HAIRCUT',
    })
    const [option, setOption] = React.useState({})
    const handleChange = (v) => {
        const value = v.target.innerText;
        setOption({
            [value]: true
        })
    };

    const handleClick = (e) => {
        if(!e.target.name) e.preventDefault()
        else {
            if(e.target.name === 'menu') setButtonState({...buttonState, [e.target.name]: e.target.value})
            else setButtonState({...buttonState, [e.target.name]: e.target.id})
        }
        
    }
    if (barber) {
        return (
            <div className="cntContainer">
            <input type="checkbox" id="check" className="checkbox" />
            <label className="menu" for="check"><svg xmlns="http://www.w3.org/2000/svg" className="mt-2 ml-2" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg></label>
            <div className="left-panel">
                <ul className="listOptions" onClick={handleChange}>

                    <li className={option.APPOINTMENTS ? "active" : ""}><h1>APPOINTMENTS</h1></li>
                    {/* <li className={option.SERVICE ? "active" : ""}>NEW SERVICE</li> */}
                    <li className={option.GENERAL ? "active" : ""}  ><h1>GENERAL</h1></li>
                    
                    <li className={option.ACCOUNT ? "active" : ""} className="cntConfig" id="ACCOUNT"><h1>ACCOUNT</h1></li>

                </ul>
            </div>

            <div className="contentList">
                {option.APPOINTMENTS && (
                        <AppointmentsDash />
                )}
                    {option.GENERAL && (
                        <div>
                            {console.log("hola")}
                            <div >
                                <div className={`w-full mt-4 justify-center flex`} onClick={handleClick} >
                                    <div>
                                        <input type='button' id='HAIRCUT' value='Haircut' name='filters' className={buttonState.filters === 'HAIRCUT' ? filterSelected : filterButtonStyle} />
                                    </div>
                                    <div>
                                        <input type='button' id='BEARDCUT' value='Beard trim' name='filters' className={buttonState.filters === 'BEARDCUT' ? filterSelected : filterButtonStyle} />
                                    </div>
                                    <div>
                                        <input type='button' id='KIDHAIRCUT' value='Kids haircuts' name='filters' className={buttonState.filters === 'KIDHAIRCUT' ? filterSelected : filterButtonStyle} />
                                    </div>
                                    <div>
                                        <input type='button' id='HAIRCOLOR' value='Coloration' name='filters' className={buttonState.filters === 'HAIRCOLOR' ? filterSelected : filterButtonStyle} />
                                    </div>
                                    <div>
                                        <input type='button' id='DESIGN' value='Tribal trim' name='filters' className={buttonState.filters === 'DESIGN' ? filterSelected : filterButtonStyle} />
                                    </div>
                                    <div>
                                        <input type='button' id='OZON' value='Ozone' name='filters' className={buttonState.filters === 'OZON' ? filterSelected : filterButtonStyle} />
                                    </div>
                                    <div>
                                        <input type='button' id='MASK' value='Face mask' name='filters' className={buttonState.filters === 'MASK' ? filterSelected : filterButtonStyle} />
                                    </div>
                                </div>
                            </div>
                            <BarberServicesDashboard filters={buttonState.filters} />
                        </div>
                )}
                {option.ACCOUNT && (
                    <BarberConfig />
                )}
            </div>
            {/* <div className="flex h-full" > */}
                {/* <div className={`w-1/6 bg-gray-200`} onClick={handleClick} >
                    {/* <div>  
                    <input type='button' value='Dashboard' name='menu' className={buttonState.menu === 'Dashboard' ? buttonSelected : buttonStyle} />
                </div> */}
                    {/* <div>
                        <input type='button' value='Appointments' name='menu' className={buttonState.menu === 'Appointments' ? buttonSelected : buttonStyle} />
                    </div>
                    {/* <div>
                    <input type='button' value='Invoices' name='menu' className={buttonState.menu === 'Invoices' ? buttonSelected : buttonStyle} />
                </div> */}
                    {/* <div>
                        <input type='button' value='Catalog' name='menu' className={buttonState.menu === 'Catalog' ? buttonSelected : buttonStyle} />
                    </div>
                    <div className="w-1/6 absolute bottom-2" >
                        <input type='button' value='Config' name='menu' className={buttonState.menu === 'Config' ? buttonSelected : buttonStyle} />
                    </div>
                </div>
                <div className="w-5/6" > */}
                    {/* {buttonState.menu === 'Dashboard' && (
                        <div>Dashboard</div>
                    )} */}
                    {/* {buttonState.menu === 'Appointments' && (
                        <div className="grid" >
                            <AppointmentsDash />
                        </div> */}
                    {/* )}  */}
                    {/* {buttonState.menu === 'Invoices' && (
                    <div>
                        <InvoicesDash />
                    </div>
                )} */}
                    {/* {buttonState.menu === 'Catalog' && (
                        
                    )} */}
                    {buttonState.menu === 'Config' && (
                        <div><BarberConfig /></div>
                    )}
                </div>
            // </div>
        )
    } else {
        return (
            <Error />
        )
    }
}

export default BarberDashboard