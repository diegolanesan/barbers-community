import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { addToCart, changeCartState, getActiveCartFromUserId, removeFromCart } from '../../../redux/action/cart'
import axios from 'axios'
import Datetime from "react-datetime";
import moment from "moment";
import appointmentReducer from '../../../redux/reducer/appointment'
import { postAppointment } from '../../../redux/action/appointment'


export const CartLogged = () => {
  const dispatch = useDispatch()
  const token = jwtDecode(localStorage.getItem("clientToken"))
  const services = useSelector(state => state.cart.activeCart)
  const localCart = JSON.parse(localStorage.getItem("cart"))

  const cart = useSelector(state => state.cart.activeCart)
  const barber = useSelector(state => state.barberDetail.resp)
  const slots = useSelector(state => state.barberDetail.resp.slots)
  const appointments = useSelector(state => state.appointments.appointmentsById)
  console.log(slots, appointments)


  const totalAmount = cart.totalAmount
  const serviceBarbers = cart.serviceBarbers

  useEffect(() => {
    dispatch(getActiveCartFromUserId(token.id))

  }, [])

  let [fecha, setFecha] = useState({ fecha: "" })

  function onchange(args) {
    setAppointment({ ...appointment, date: `${args._d}` })
  }

  const [appointment, setAppointment] = useState({
    barberId: barber.id,
    clientId: token.id, //traer del localstorage
    date: "",
    time: "",
    status: "Pending",
    total: 100,
    serviceBarberId: [1]
  })

  var yesterday = moment().subtract(1, "day");

  function valid(current) {
    return current.isAfter(yesterday);
  }

  // Map de fechas
  const slotsLlenos = appointments.map(app => app.time)
  let slotsCopy = slots

  const dates = appointments.map(app => {

    const date = appointment.date.slice(0, 15)
    if (app.date.includes(date)) {
      slotsCopy = slotsCopy.filter(slot => app.time !== slot)
    }
  })
  // Map de fechas

  function onChange(e) {
    setAppointment({
      ...appointment,
      time: e.target.value
    })
  }

  const paymentGenerator = (user, products) => {
    axios
      .post("http://localhost:3001/checkout/create_preference", {
        user,
        products,
      })
      .then((data) => {
        window.location.href = data.data.response.sandbox_init_point;
      });
  };

  function removeItem(id) {
    dispatch(removeFromCart(token.id, id)).then(() =>
      dispatch(getActiveCartFromUserId(token.id)))
  }

  return (
    <div class="bg-gray-200 h-full md:h-screen">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">

          {
            services.serviceBarbers && services.serviceBarbers.map(service => {
              return <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                <div class="flex justify-between px-4 items-center">
                  <div class="text-lg font-semibold">
                    <p>{service.item.serviceName}</p>
                    <p class="text-gray-400 text-base"> {service.price} </p>
                  </div>
                  <div class="text-lg font-semibold transform rotate-45">
                    <button onClick={() => removeItem(service.id)} class="focus:outline-none bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            })
          }

        </div>
        <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          {/* <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4"> */}
          {/* <!-- classic add --> */}
          {/* <div class="flex justify-between border-b-2 mb-2">
              <div class="text-lg py-2">
                <p>Classic Ads</p>
              </div>
              <div class="text-lg py-2">
                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button class="focus:outline-none bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  </button>
                  <p> 0 </p>
                  <button class="focus:outline-none bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div> */}
          {/* <!-- End classic add --> */}


          {/* <!-- Total Item --> */}
          <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">

            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <Datetime className="border-4 border-blue-400" onChange={onchange} isValidDate={valid} input={false} timeConstraints={{ hours: { min: 9, max: 22, step: 1 } }} timeFormat={false} />
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">

            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">

                <div>

                  {slotsCopy && slotsCopy.length > 0 ?
                    slotsCopy.map(e => <button value={e} onClick={(event) => onChange(event)} className="mr-4 bg-blue-300 mb-4 px-2">{e}</button>) : ""}

                </div>
              </div>
            </div>

          </div>
          <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
            {/* <!-- Total Price --> */}
            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p>Total Price</p>
                <p class="text-5xl">${services.totalAmount}</p>
              </div>
            </div>
            {/* <!-- End Total PRice --> */}
          </div>
          <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <button onClick={() => {
                  dispatch(changeCartState(token.id, { state: "Pending", date: appointment.date, time: appointment.time, barberId: appointment.barberId }))
                  paymentGenerator({ name: token.name, email: token.email }, services.serviceBarbers)
                }
                }
                  className="bg-green-400 px-4 rounded py-2">
                  Checkout
                </button>
                {/* paymentGenerator({firstName:"seba",lastName:"ciare", email: "s@gmail.com"}, [{name: "mohicano", id: 2, quantity: 2, price: 100 }]) */}
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartLogged;