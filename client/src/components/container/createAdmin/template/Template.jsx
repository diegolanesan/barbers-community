import React from "react";
import "./Template.css";

const Template = ({info})=>{
    return (
        <div className="containerTable">
            <div className="table w-full p-2">
            <table className="w-full border">
                <thead>
                   {
                       !info ? ("No hay informacion"):
                       (
                           info.title.map(t=> {return ( 
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                {t.name}
                             </div>
                        </th>
                           )})
                       )
                   }
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                             ACTION
                         </div>
                    </th>
                </thead>
                <tbody>
                    <tr className="bg-gray-50 text-center">
                        <td className="p-2 border-r">
                            <input type="text" className="border p-1 w-20" placeholder="" />
                        </td>
                        <td>
                           <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin ">Edit</a>
                           <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin ml-1">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Template;

