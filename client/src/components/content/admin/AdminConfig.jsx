import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
/* import jwtDecode from 'jwt-decode' */
import { getAdminById, putAdmin} from '../../../redux/action/admin';

const AdminConfig = () => {
    const dispatch = useDispatch()
    const adminSelected = useSelector(state => state.admins.adminDetail)
    /* const token = jwtDecode(localStorage.getItem("barberToken"))
    const id = token.id */
    /* console.log(token) */
    const newAdmin = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmedPassword: "",
        location: "",
        mobile: "",
        img: "",
    }

    const [admin, setAdmin] = useState(newAdmin) 
    const [loading, setLoading] = useState(true)

    function fetchData() {
        dispatch(getAdminById(1))
    }
      
    useEffect(() => {
        if(loading) {
            fetchData()
            adminSelected && setLoading(false)
        } else {
            setAdmin(adminSelected)
        }
    
    }, [adminSelected])
    const handleInputChange = (e) => {
        setAdmin({
          ...admin,
          [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = () => {
      if(!admin.name || !admin.lastname ||
         !admin.bio || !admin.resume ||
          !admin.email || !admin.password || !admin.confirmedPassword ||
           !admin.alias || !admin.location || !admin.mobile) {
            alert("Please complete all the camps")
      } else if (admin.password !== admin.confirmedPassword) {
            alert("password and confirm password must be the same")
      } else {
        const adminSend = {
            adminModify: {
              name: admin.name,
              lastname: admin.lastname,
              email: admin.email,
              password: admin.confirmedPassword,
              location: admin.location,
              mobile: admin.mobile,
          }
      };
      dispatch(putAdmin(1,adminSend))
      alert("Updated Successfully")
      }
    };
    console.log(admin, "aaaa")
    return (
        <div class="flex grid h-screen bg-gray-200 items-center justify-center ">
          <div class="grid bg-white rounded-lg shadow-xl w-11/12  md:w-11/12 mx-12 mt-10">
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
                        value={admin.name}
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
                        value={admin.lastname}
                        onChange={handleInputChange} 
                />
              </div>
                 <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Location</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        id="location"
                        type="text"
                        placeholder="location"
                        name="location"
                        value={admin.location}
                        onChange={handleInputChange}
                />
              </div> <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Phone</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        id="phone"
                        type="number"
                        placeholder="phone"
                        name="mobile"
                        value={admin.mobile}
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
                        value={admin.email}
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
                        value={admin.img}
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
                        value={admin.password}
                        onChange={handleInputChange}
                />
              </div> <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Confirm Password</label>
                <input class="py-2 px-3 rounded-lg border-2 border-blue-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        id="c_password"
                        type="password"
                        placeholder={`*********`}
                        name="confirmedPassword"
                        value={admin.confirmedPassword}
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
export default AdminConfig