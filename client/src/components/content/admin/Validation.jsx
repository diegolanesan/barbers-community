import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validation } from "../../../redux/action/admin";
import jwtDecode from "jwt-decode"
import Swal from 'sweetalert2'

const Validation = () => {
  const [creds, setCreds] = useState("");
  const dispatch = useDispatch()
  const { validationCode } = useSelector(state => state.admins)
  const token = localStorage.getItem("clientToken")
  let user = jwtDecode(token)
  console.log(user)
  const body = {
    email: user.email
  }
  useEffect(() => {
    dispatch(validation(body))
  }, [])

  function handleChange(e) {
    setCreds(e.target.value);
  }
  console.log(validationCode, creds)
  function handleSubmit(e) {
    e.preventDefault();
    if (validationCode.toString() !== creds) {
      Swal.fire({
        title: 'Wrong Code, Please Try Again',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    } else {
      Swal.fire({
        title: 'Welcome!!!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continue'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "https://barberscommunity-g8.netlify.app/admin/dashboard";
        }
      })

    }
  }

  return (
    <div className="recoveryContainer">
      <div className="recoveryColor"></div>
      <div className="conteinerForm">
        <form
          action=""
          className="recoveryForm"
          onSubmit={handleSubmit}
        >
          <label htmlFor="">Enter Your Code</label>
          <input type="text" value={creds} onChange={handleChange} placeholder="Write your code here" />
          <button>CHECK</button>
        </form>
      </div>
    </div>
  );
}

export default Validation;

