import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import barbers from '../../../data';
import { getBarbers } from '../../../redux/action/barbers';
import style from './barber.module.css'

export default function Barber() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getBarbers())
      // getBarbers()
      // eslint-disable-next-line
    }, [])
    
    const barbersLoaded = useSelector(state => state.barbers.barbersLoaded)

    return (
      <div className={style.container} >
          {/* {barbersLoaded && barbersLoaded.map(barber => (
              <div>
                  <div>{barber.img}</div>
                  <div>{barber.name}</div>
                  <div>{barber.services}</div>
              </div>
          ))} */}
          {
              barbersLoaded && barbersLoaded.map(n => (
                <div key={n.name} >
                  <h4>{`${n.name} ${n.lastName} (${n.alias})`}</h4>
                  <img className={`rounded`} src="https://kingsbs.com/wp-content/uploads/2013/12/barber-gallery-7.jpg" alt="" width='150px' />
                  <h6>{n.status}</h6>
                  <h6>{n.rating}</h6>
              </div>
              ))
          }
      </div>
    )
  }