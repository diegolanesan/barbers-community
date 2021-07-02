import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode'
import { getClientById, putClient} from '../../../../redux/action/clients';
import axios from "axios";
import Swal from 'sweetalert2'
import "./Config.css"
const ClientConfig = () => {
    const dispatch = useDispatch()
    const adminSelected = useSelector(state => state.clients.clientDetail)
    const token = jwtDecode(localStorage.getItem("clientToken"))
    const id = token.id
    console.log(token)
    const newAdmin = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmedPassword: "",
        location: "",
        mobile: "",
        image: [""],
    }

    const [admin, setAdmin] = useState(newAdmin) 
    const [loading, setLoading] = useState(true)

    function fetchData() {
        dispatch(getClientById(id))
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
          !admin.email || !admin.password || !admin.confirmedPassword 
          || !admin.location || !admin.mobile) {
            Swal.fire({
              title: 'Please complete all the camps',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
      } else if (admin.password !== admin.confirmedPassword) {
            Swal.fire({
              title: 'Password and confirm password must be the same',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
      } else {
        const adminSend = {
          clientModified: {
              name: admin.name,
              lastname: admin.lastname,
              email: admin.email,
              password: admin.confirmedPassword,
              location: admin.location,
              mobile: admin.mobile,
          }
      };
      dispatch(putClient(id,adminSend))
      Swal.fire({
        title: 'Updated Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      }
    };
    console.log(admin, "aaaa")

    //--------------CLOUDINARY------------
    const [error, setError]= React.useState({
      image: false
  })

    const handleChange = async (e) => {
      const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "Product");
        setError({ ...error, image: true });
        const res = await axios.post( "https://api.cloudinary.com/v1_1/dtqd9ehbe/image/upload", data);
        const file = res.data;
        const url = file.secure_url;
        dispatch(putClient(id,{clientModified:{image:[url]}} ));
        setAdmin({ ...admin, image: [url]});
        setError({ ...error, image: false });
    }
    const handleCruz2 = ()=>{
      setAdmin({ ...admin, image: [""]});
  }
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
            </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div class="grid grid-cols-1">
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
            <div className="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Image</label>
            <div className="p-2 border-r imagen">
              {
                error.image === false && admin.image[0] !== "" ? 
                (<>
                <div>
                <img src={admin.image[0]} alt=""/>
                <div className="cruz" onClick={()=>{handleCruz2()}}>X</div>
                </div>
                </>
                ) :
                error.image === true && admin.image[0] !== "" ?
                (<div><p>LOADING...</p></div>) :
                (<><p>UPLOAD IMAGE</p>
                <input type="file" onChange={handleChange} className="border p-1"></input>
                
                </>)
              }
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
export default ClientConfig
