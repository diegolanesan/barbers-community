import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode'
import { putBarber } from '../../../redux/action/barbers';
import { getBarberById, relationFaiceType, relationHairType, relationStyle } from '../../../redux/action/barbers';
import { getAllHairTypes, getAllFaceTypes, getAllStyles } from '../../../redux/action/types';

const BarberConfig = () => {
    const dispatch = useDispatch()
    const barberSelected = useSelector(state => state.barbers.barberDetail)
    const {hair, face, style} = useSelector(state => state.types)
    const token = jwtDecode(localStorage.getItem("barberToken"))
    const id = token.id
    console.log(token)
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
        faces: [],
        hairs: [],
        barberStyles: [],
    }

    const [barber, setBarber] = useState(newBarber) 
    const [loading, setLoading] = useState(true)

    function fetchData() {
        dispatch(getBarberById(id))
    }
      
    useEffect(() => {
        if(loading) {
            fetchData()
            barberSelected && setLoading(false)
        } else {
            setBarber(barberSelected)
            dispatch(getAllHairTypes())
            dispatch(getAllFaceTypes())
            dispatch(getAllStyles())
        }
    
    }, [barberSelected])
    const handleInputChange = (e) => {
      if(e.target.name === "faces" || e.target.name === "hairs" || e.target.name === "barberStyles"){
        for(let i = 0; i< barber[e.target.name].length; i++) {
          if(e.target.value === barber[e.target.name][i].toString()) { 
            return barber[e.target.name].splice(i , 1);
          }
        }
        setBarber({...barber, [e.target.name] : barber[e.target.name].concat(e.target.value)});
      } else {
        setBarber({
          ...barber,
          [e.target.name]: e.target.value,
        });
      }
    };
    console.log(barber.faces, barber.hairs, barber.barberStyles)
    
    const handleSubmit = () => {
      if(!barber.name || !barber.lastname ||
         !barber.bio || !barber.resume ||
          !barber.email || !barber.password || !barber.confirmedPassword ||
           !barber.alias || !barber.location || !barber.mobile) {
            alert("Please complete all the camps")
      } else if (barber.password !== barber.confirmedPassword) {
            alert("password and confirm password must be the same")
      } else {
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
      dispatch(relationHairType({hairTypeId :barber.hairs, barberId : id}))
      dispatch(relationFaiceType({faceTypeId :barber.faces, barberId : id}))
      dispatch(relationStyle({styleId :barber.barberStyles, barberId : id}))
      alert("Updated Successfully")
      }
    };
    console.log(barber)
    return (
        <div class="flex grid h-screen bg-gray-200 items-center justify-center ">
          <div class="grid bg-white rounded-lg shadow-xl w-11/12  md:w-11/12 mx-12 mt-10">
            <div class="flex justify-center">
              <div class="flex">
                <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Choose your Specialities</h1>
              </div>
            </div>
        
        
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Styles</label>
                <div class="block pt-3 pb-2 space-x-4">
                  {style ? style.map(b => {
                    return <label>
                      {barber.barberStyles.includes(b.id) ? 
                      <input
                      type="checkbox"
                      name="barberStyles"
                      defaultChecked
                      value={`${b.id}`}
                      onChange={handleInputChange}
                      class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                      /> :
                      <input
                      type="checkbox"
                      name="barberStyles"
                      value={`${b.id}`}
                      onChange={handleInputChange}
                      class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                      />}
                      {b.description}
                    </label>
                  }) : ""}
                </div>
              </div>
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Face Types</label>
                <div class="block pt-3 pb-2 space-x-4">
                  {face ? face.map(b => {
                    return <label>
                      {barber.faces.includes(b.id) ? 
                      <input
                      type="checkbox"
                      name="faces"
                      defaultChecked
                      value={`${b.id}`}
                      onChange={handleInputChange}
                      class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                      /> :
                      <input
                      type="checkbox"
                      name="faces"
                      value={`${b.id}`}
                      onChange={handleInputChange}
                      class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                      />}
                      {b.description}
                    </label>
                  }) : ""}
                </div>
              </div>
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Hair Types</label>
                <div class="block pt-3 pb-2 space-x-4">
                  { hair ? hair.map(b => {
                    return <label>
                      {barber.hairs.includes(b.id) ? 
                      <input
                      type="checkbox"
                      name="hairs"
                      defaultChecked
                      value={`${b.id}`}
                      onChange={handleInputChange}
                      class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                      /> :
                      <input
                      type="checkbox"
                      name="hairs"
                      
                      value={`${b.id}`}
                      onChange={handleInputChange}
                      class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                      />}
                      {b.description}
                    </label>
                  }): ""}
                </div>
              </div>
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Professional level</label>
              <select class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          name="type"
                          value={barber.type}
                          onChange={handleInputChange}
              >
                <option>Urban</option>
                <option>Academy</option>
                <option>Seminary</option>
                <option>Hair technician</option>
              </select>
            </div>
            </div>

            <div class="flex justify-center">
              <div class="flex">
                <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Change your Info</h1>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
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
                        id="lastname"
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
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
              </div> 
            </div>
            <div class="grid grid-cols-1 mt-5 mx-7">
            <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Email</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                        name="email"
                        value={barber.email}
                        onChange={handleInputChange}
                />
              </div>
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Resume</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        id="resume"
                        type="text"
                        placeholder="example@mail.com"
                        name="resume"
                        value={barber.resume}
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
                      <input  
                        id="img"
                        type="file"
                        name="img"
                        value={barber.img}
                        onChange={handleInputChange} 
                        class="hidden" />
                    </label>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
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
                        placeholder={`${barber.password}`}
                        name="confirmedPassword"
                        value={barber.confirmedPassword}
                        onChange={handleInputChange}
                />
              </div>
              </div>
            <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
              <button class='w-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => handleSubmit()}>Update</button>
            </div>
        
          </div>
        </div>
  )}
export default BarberConfig