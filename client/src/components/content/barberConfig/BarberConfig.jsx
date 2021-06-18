import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { putBarber } from '../../../redux/action/barbers';
import { getBarberById } from '../../../redux/action/barbers';

const BarberConfig = () => {
    const dispatch = useDispatch()
    const barberSelected = useSelector(state => state.barbers.barberDetail)

    const newBarber = {
        name: "",
        lastname: "",
        bio: "",
        resume: "",
        email: "",
        password: "",
        confirmedPassword: "",
        alias: "",
        location: "",
        mobile: "",
        img: "",
        type: "",
    }
	
    const [barber, setBarber] = useState(newBarber) 
    const [loading, setLoading] = useState(true)
    var { id } = useParams()

    function fetchData() {
        dispatch(getBarberById(id))
    }

    useEffect(() => {
        if(loading) {
            fetchData()
            barberSelected && setLoading(false)
        } else {
            setBarber(barberSelected)
        }
    
    }, [barberSelected])

	const handleInputChange = (e) => {
		setBarber({
			...barber,
			[e.target.name]: e.target.value,
		});
	};



    const handleSubmit = () => {
        const barberSend = {
            barberModify: {
                status: true,
                rating: 0,
                name: barber.name,
                lastname: barber.lastname,
                bio: barber.bio,
                resume: barber.resume,
                email: barber.email,
                password: barber.confirmedPassword,
                alias: barber.alias,
                location: barber.location,
                mobile: barber.mobile,
                //img: "",
                type: barber.type,
            }
        };
        dispatch(putBarber(id, barberSend))
    };
    return (
        <div class="flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32">
          <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
            <div class="flex justify-center">
              <div class="flex">
                <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Choose your Specialities</h1>
              </div>
            </div>
        
        
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Styles</label>
              <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 1" />
            </div>
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Face Types</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 2" />
              </div>
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Hair Types</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 3" />
              </div>
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Professional level</label>
              <select class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option>Urban</option>
                <option>Academy</option>
                <option>Seminary</option>
                <option>Hair Technician</option>
              </select>
            </div>
            </div>

            <div class="flex justify-center">
              <div class="flex">
                <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Change your Info</h1>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        name="name"
                        value={barber.name}
                        onChange={handleInputChange}
                />
              </div>
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={barber.lastname}
                        onChange={handleInputChange} 
                />
              </div>
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Username</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
						id="userName"
						type="text"
						placeholder="Username"
						name="alias"
						value={barber.alias}
						onChange={handleInputChange}
                />
              </div> <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Location</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
						id="location"
						type="text"
						placeholder="location"
						name="location"
						value={barber.location}
						onChange={handleInputChange}
                />
              </div> <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Phone</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
						id="phone"
						type="number"
						placeholder="phone"
						name="mobile"
						value={barber.mobile}
						onChange={handleInputChange}
                />
              </div> <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Biography</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
						id="biography"
						type="text"
						placeholder="Short Biography"
						name="bio"
						value={barber.bio}
						onChange={handleInputChange}
                />
              </div> <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Password</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
						id="password"
						type="password"
						placeholder="******************"
						name="password"
						value={barber.password}
						onChange={handleInputChange}
                />
              </div> <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Confirm Password</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
						id="c_password"
						type="password"
						placeholder="******************"
						name="confirmedPassword"
						value={barber.confirmedPassword}
						onChange={handleInputChange}
                />
              </div>
            </div>
        
            <div class="grid grid-cols-1 mt-5 mx-7">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                <div class='flex items-center justify-center w-full'>
                    <label class='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-blue-300 group'>
                        <div class='flex flex-col items-center justify-center pt-7'>
                          <svg class="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <p class='lowercase text-sm text-gray-400 group-hover:text-blue-600 pt-1 tracking-wider'>Select a photo</p>
                        </div>
                      <input type='file' class="hidden" />
                    </label>
                </div>
            </div>
        
            <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
              <button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
              <button class='w-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => handleSubmit()}>Update</button>
            </div>
        
          </div>
        </div>
  )}
export default BarberConfig