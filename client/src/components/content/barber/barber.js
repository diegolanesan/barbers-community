import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
//import { Link } from 'react-router-dom';
// import barbers from '../../../data';
import { getBarbers } from '../../../redux/action/barbers';

export default function Barber() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getBarbers())
      // getBarbers()
      // eslint-disable-next-line
    }, [])
    
    const barbersLoaded = useSelector(state => state.barbers.barbersLoaded)

    return (
      <div class="">
          {/* {barbersLoaded && barbersLoaded.map(barber => (
              <div>
                  <div>{barber.img}</div>
                  <div>{barber.name}</div>
                  <div>{barber.services}</div>
              </div>
          ))} */}
          {
              barbersLoaded && barbersLoaded.map(n => (
                <div key={n.name} class="text-center m-8 border rounded-xl pb-1 shadow-md">
                  <img class="rounded-lg" src="https://kingsbs.com/wp-content/uploads/2013/12/barber-gallery-7.jpg" alt="" width='200px' />
                  <h4 class="font-bold">{`${n.name} ${n.lastName} (${n.alias})`}</h4>
                  {/* <h6>{n.status}</h6> */}
                  <div class="flex justify-center pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h6 class="ml-4">{n.rating}</h6>
                  </div>
                  
              </div>
              ))
          }
      </div>
    )
  }