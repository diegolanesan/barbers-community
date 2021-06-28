import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import BarberServicesData from './ClientServicesData';

const ClientServicesDashboard = ({ filters }) => {

    // console.log(filters)

    const buttonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-1 px-0 mx-0 mb-0 w-full"
    const buttonSelected = "bg-blue-800 text-white py-1 px-0 mx-0 mb-0 w-full"
    const filterButtonStyle = "bg-blue-400 hover:bg-blue-600 text-white py-2 px-5 mx-2 mt-3 mb-3"
    const filterSelected = "bg-blue-800 text-white py-2 px-5 mx-2 mt-3 mb-3"

    const [buttonState, setButtonState] = useState({
        menu: {
            selected: 'Service',
            change: false
        },
        filters: 'Haircut'
    })

    const [extraTwo, setExtraTwo] = useState({
        menu: {
            selected: 'Service',
            change: false
        },
        filters: 'Haircut'
    })

    const [extraThree, setExtraThree] = useState({
        menu: {
            selected: 'Service',
            change: false
        },
        filters: 'Haircut'
    })

    // console.log(buttonState)
    const handleClick = (e) => {
        if (!e.target.name) e.preventDefault()
        else setButtonState({ ...buttonState, menu: { selected: e.target.value, change: true } })
    }

    return (
        <div class="container mx-auto my-0 p-5">
            <div class="bg-white p-3 shadow-sm rounded-sm border-t-4 border-blue-400">
                <div class="grid">
                    <div>
                        <div class="flex justify-center text-2xl font-semibold text-gray-900 leading-8 mb-3">
                            <span class="tracking-wide"></span>
                        </div>
                        <div class="flex items-center text-lg font-semibold text-gray-900 leading-8 mb-3">
                            <span class="tracking-wide">Choose a Haircut:</span>
                        </div>
                        <ul class="list-inside space-y-2">
                            {/* {resp.services ? resp.hairTypes.map(n => (
                                    	<li>
                                       		<div class="text-teal-600 bg-blue-500 py-1 px-2 rounded text-white text-sm">{n}</div>
                                    	</li>
                                 		)) : "waiting"} */}
                            <BarberServicesData filters={filters} />
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- End of Services --> */}
        </div>
    )
}
<div className="flex justify-center">
    <Link to="/appointment/date">
        <button className="px-20 py-2 -mt-3 mb-7 bg-blue-500 fotn-bold rounded">Next Step</button>
    </Link>
</div>

export default ClientServicesDashboard;
