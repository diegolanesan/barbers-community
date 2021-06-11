import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export default function Barber() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getBarbers())
    //     // eslint-disable-next-line
    // }, [])
    // const barbersLoaded = useSelector(state => state.Barbers)

    return (
      <div>
          <div>
              <h1>Tarjeta de barberos</h1>
          </div>
          {/* {barbersLoaded && barbersLoaded.map(barber => (
              <div>
                  <div>{barber.img}</div>
                  <div>{barber.name}</div>
                  <div>{barber.services}</div>
              </div>
          ))} */}
      </div>
    )
  }