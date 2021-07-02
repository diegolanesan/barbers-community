import React, { useState } from 'react'
import BarberServicesDashboard from './barberDashboardServices/BarberServicesDashboard'

const BarberCatalog = () => {
    const [buttonState, setButtonState] = useState({
        menu: 'Appointments',
        filters: 'HAIRCUT',
    })
    //const [option, setOption] = React.useState({})
    const handleClick = (e) => {
        if (!e.target.name) e.preventDefault()
        else {
            if (e.target.name === 'menu') setButtonState({ ...buttonState, [e.target.name]: e.target.value })
            else setButtonState({ ...buttonState, [e.target.name]: e.target.id })
        }

    }

    return (
        <div>
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
    )
}

export default BarberCatalog
