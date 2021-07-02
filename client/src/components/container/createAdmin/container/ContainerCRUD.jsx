import React from "react";
import "./Container.css";
import Categories from '../categories/Categories';
import Style from "../HFStypes/Style";
import Service from "../services/Services";
import AdminDashboard from "../../../content/admin/AdminDashboard";
import AdminConfig from "../../../content/admin/AdminConfig";
import AdminBarbers from "../../../content/admin/Users/Barbers";
import AdminClients from "../../../content/admin/Users/Clients";
import AdminAdmins from "../../../content/admin/Users/Admins";
import Error from "../../../content/error/Error";
import jwtDecode from "jwt-decode";

const ContainerCRUD = () => {
    const [option, setOption] = React.useState({
        DASHBOARD: true
    })
    const idUser = localStorage.getItem("clientToken") ? jwtDecode(localStorage.getItem("clientToken")) : false;
    const handleChange = (v) => {
        const value = v.target.innerText;
        setOption({
            [value]: true
        })
    };
    //if (idUser && idUser.rol === "admin") {
    return (
        <div className="cntContainer">
            <input type="checkbox" id="check" className="checkbox" />
            <label className="menu" for="check"><svg xmlns="http://www.w3.org/2000/svg" className="mt-2 ml-2" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg></label>
            <div className="left-panel">
                <ul className="listOptions" onClick={handleChange}>

                    <li className={option.DASHBOARD ? "active" : ""}>DASHBOARD</li>
                    <li className={option.CATEGORY ? "active" : ""}>CATEGORY</li>
                    <li className={option.STYLE ? "active" : ""}>STYLE</li>
                    <li className={option.SERVICE ? "active" : ""}>SERVICE</li>
                    <li className={option.BARBERS ? "active" : ""}>BARBERS</li>
                    <li className={option.CLIENTS ? "active" : ""}>CLIENTS</li>
                    <li className={option.ADMIN ? "active" : ""}>ADMIN</li>
                    <li className={option.CONFIG ? "active" : ""} className="cntConfig" id="ACCOUNT"><h1>ACCOUNT</h1></li>

                </ul>
            </div>


            <div className="contentList">
                {option.DASHBOARD && (
                    <AdminDashboard />
                )}
                {option.CATEGORY && (
                    <Categories />
                )}
                {option.STYLE && (
                    <Style />
                )}
                {option.SERVICE && (
                    <Service />
                )}
                {option.BARBERS && (
                    <AdminBarbers />
                )}
                {option.CLIENTS && (
                    <AdminClients />
                )}
                {option.ADMIN && (
                    <AdminAdmins />
                )}
                {option.ACCOUNT && (
                    <AdminConfig />
                )}
            </div>
        </div>
    )
}
//  else {
//     return (
//         <Error />
//     )
// }
// }

export default ContainerCRUD;