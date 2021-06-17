import React, { useState } from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";

export default function AppointmentDate() {
    const [fecha, setFecha] = useState("")
    function onchange(args) { console.log(args._d) }
    var yesterday = moment().subtract(1, "day");
    function valid(current) {
        return current.isAfter(yesterday);
    }
    return (
        <div>
            <div class="bg-gray-100 max-w-6xl mx-auto my-20">
                <div class="container mx-auto my-5 p-5">
                    <a href="http://localhost:3000/catalog">
                        <button class="bg-blue-400 hover:bg-blue-600 border-b-2  text-white py-2 px-4 mx-4 mb-0 rounded-lg">
                            <svg className="transform rotate-180" xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 24 24"><path d="M24 12l-12-9v5h-12v8h12v5l12-9z" /></svg>
                        </button>
                    </a>
                    <div class="md:flex no-wrap md:-mx-2 pt-8 pb-32 ">
                        {/* <!-- Left Side --> */}
                        <div class="w-full md:w-3/12 md:mx-2">

                            {/* <!-- Profile Card --> */}
                            <div class="bg-white p-3 border-t-4 border-blue-400 ">
                                <Datetime className="border-4 border-blue-400" input={false} isValidDate={valid} timeConstraints={{ hours: { min: 9, max: 15, step: 1 } }} onChange={onchange} />
                            </div>
                            {/* <!-- End of profile card --> */}
                        </div>
                        {/* <!-- Right Side --> */}
                        <div class="w-full md:w-9/12 mx-2 h-64">
                            {/* <!-- About Section --> */}
                            <div class="bg-white p-3 shadow-sm rounded-sm border-t-4 border-blue-400">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span class="text-green-500 transform -rotate-180">
                                        <svg class="transform -rotate-45" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.026 14.116c-3.475 1.673-7.504 3.619-8.484 4.09-1.848.889-3.542-1.445-3.542-1.445l8.761-4.226 3.265 1.581zm7.93 6.884c-.686 0-1.393-.154-2.064-.479-1.943-.941-2.953-3.001-2.498-4.854.26-1.057-.296-1.201-1.145-1.612l-14.189-6.866s1.7-2.329 3.546-1.436c1.134.549 5.689 2.747 9.614 4.651l.985-.474c.85-.409 1.406-.552 1.149-1.609-.451-1.855.564-3.913 2.51-4.848.669-.321 1.373-.473 2.054-.473 2.311 0 4.045 1.696 4.045 3.801 0 1.582-.986 3.156-2.613 3.973-1.625.816-2.765.18-4.38.965l-.504.245.552.27c1.613.789 2.754.156 4.377.976 1.624.819 2.605 2.392 2.605 3.97 0 2.108-1.739 3.8-4.044 3.8zm-2.555-12.815c.489 1.022 1.876 1.378 3.092.793 1.217-.584 1.809-1.893 1.321-2.916-.489-1.022-1.876-1.379-3.093-.794s-1.808 1.894-1.32 2.917zm-3.643 3.625c0-.414-.335-.75-.75-.75-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75zm6.777 3.213c-1.215-.588-2.604-.236-3.095.786-.491 1.022.098 2.332 1.313 2.919 1.215.588 2.603.235 3.094-.787.492-1.021-.097-2.33-1.312-2.918z" /></svg>
                                    </span>
                                    <span class="tracking-wide">Your Appointment</span>
                                </div>
                                <div class="text-gray-700">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}