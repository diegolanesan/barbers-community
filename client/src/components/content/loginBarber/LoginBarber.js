import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import hero from "../../../resources/other-hero.jpg";
import Swal from 'sweetalert2'
import { signInBarber, signInBarberWithGoogle } from '../../../redux/action/auth'
import { getBarbersBanned } from '../../../redux/action/barbers'
import {Link} from "react-router-dom"
import GoogleLogin from 'react-google-login';

function LoginBarbers() {
    const dispatch = useDispatch()
    const history = useHistory()
    const auth = useSelector(state => state.auth.barberUser)

    useEffect(() => {
      dispatch(getBarbersBanned())
    }, [])
    const barbersBanned = useSelector(state => state.barbers.barbersBanned)
    let emailsBanned = []
	for(let i = 0; i < barbersBanned.length; i++) {
		emailsBanned.push(barbersBanned[i].email)
	}
    const [creds, setCreds] = useState({
      email: "",
      password: "",
    })

    function handleChange(e) {
      setCreds({
        ...creds,
        [e.target.name]: e.target.value
      })
    }

    function onSubmit(e) {
      e.preventDefault()
      if(creds.email === "" || creds.password === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Empty camps, please complete them',
          })
      }
      if(emailsBanned.includes(creds.email.toString())) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This account is suspended',
          })
      } else {
        dispatch(signInBarber(history, creds))
      }
    }

    function responseGoogle(res) {
      const userData = {
        email: res.dt.Nt,
        name: res.dt.uU,
        lastname: res.dt.qS,
      }
      dispatch(signInBarberWithGoogle(history, userData))
    }

    return (
        <div class="flex flex-col md:flex-row h-full items-center font-lato text-primary">
        
          <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img src={hero} alt="" class="w-full h-full object-cover"/>
          </div>
        
          <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
        
            <div class="w-full h-full">
        
        
              <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
        
              <form class="mt-6" action="#" method="POST" onSubmit={onSubmit}>
                <div>
                  <label class="block">Email Address</label>
                  <input type="email" name="email" value={creds.email} onChange={handleChange} placeholder="Enter Email Address" class="w-full px-4 py-3 bg-gray-200 mt-2 border focus:border-secondary focus:bg-white focus:outline-none"/>
                </div>
        
                <div class="mt-4">
                  <label class="block">Password</label>
                  <input type="password" name="password" value={creds.password} onChange={handleChange} placeholder="Enter Password" minlength="2" class="w-full px-4 py-3 bg-gray-200 mt-2 border focus:border-secondary
                        focus:bg-white focus:outline-none"/>
                </div>
        
                <div class="text-right mt-2">
                  <Link to="/barbers/recovery/false" class="text-sm font-semibold text-gray-700 hover:text-secondary focus:text-secondary">Forgot Password?</Link>
                </div>

                <button
							type="submit"
							class="w-full block bg-secondary hover:bg-primary focus:bg-secondary text-white font-semibold 
                      px-4 py-3 mt-6"
						>
							Log In  <i className="fas fa-sign-in-alt ml-2" style={{fontSize: "20px"}} ></i>
						</button>

              </form>
        
              <hr class="my-6 border-gray-300 w-full"/>
        
              <GoogleLogin
                clientId="789841627890-pj14jctbj16a6uddmvs971j9572qt2rv.apps.googleusercontent.com"
                render={renderProps => (
                  <button
                type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}
                class="w-full block bg-white hover:bg-primary hover:text-white focus:bg-primary 
                focus:text-white text-primary font-semibold px-4 py-3 border border-primary"
                >
                <div class="flex items-center justify-center">
                  <span class="ml-4">Log in with Google</span><i className="fab fa-google ml-2 "></i>
                </div>
              </button>
                )}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
					    />
        
              <p class="mt-8">Need an account? <a href="http://localhost:3000/register" class="text-secondary hover:text-primary font-semibold">Create an
                      account</a></p>
        
        
            </div>
          </div>
        
        </div>
    )}

    export default LoginBarbers