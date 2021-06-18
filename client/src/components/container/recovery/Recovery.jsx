import React from "react";
import "./Recovery.css";
import { useParams } from "react-router-dom";
const Recovery = ()=>{
    // Constantes que seviran para autenticar a un usuario
    const tokenUser = localStorage.getItem("token");
    const tokenMail = useParams().token;

    // Funciones para atrapar los datos y enviarselos al back
    const [form, setForm ] = React.useState({
        new: "",
        confirm: "",
    })

    const handleChange = (v)=>{
        const name = v.target.name;
        const value = v.target.value
        setForm({
            [name]: value
        })
    };
    const handleKeyUp = (v)=>{
        const key = v.key;
    }
    const handleSubmit = ()=>{}

    return(
    <div className="recoveryContainer">
        <div className="recoveryColor"></div>
        {
            tokenMail !== tokenUser ? (<h1>ERROR</h1>):(
                <div className="conteinerForm">
                <form action="" className="recoveryForm" onChange={handleChange} onSubmit={handleSubmit} onKeyUp={handleKeyUp}>
                    <div>
                    <h1>Reset Password</h1>
                    </div>
                    <label>New Password</label>
                    <input type="password" name="new" id="" />
                    <label>Confirm New Password</label>
                    <input type="password" name="confirm" id="" />
                    <button>SEND</button>
                </form>
            </div>
            )
        }
    </div>)
}

export default Recovery;