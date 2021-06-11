import {React, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {barberDetail} from "../../../redux/action/barberDetail"

function showBarberDetail (props) {
    const dispatch = useDispatch();
    useEffect(() => {
        const id = props.match.params.id;
        dispatch(barberDetail(id));
    },[])
    return <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
    <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src="https://image.freepik.com/vector-gratis/hombre-barbero-mascota-corte-barberia_165162-68.jpg" alt=""/>
    <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
       <div class="flex items-center">
          <h2 class="text-xl text-gray-800 font-medium mr-auto">Barber Fullname</h2>
       </div>
       <p class="text-sm text-gray-700 mt-4">
          Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
       </p>
       <div class="flex items-center justify-end mt-4 top-auto">
          <button class="bg-blue-600 text-gray-200 px-4 py-2 rounded mr-auto hover:underline">Styles</button>
          <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md mr-2">Hair Types</button>
          <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">Face types</button>
       </div>
    </div>
 </div>
}

export default showBarberDetail
