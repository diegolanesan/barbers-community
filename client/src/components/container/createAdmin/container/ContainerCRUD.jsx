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

const ContainerCRUD = ()=>{
    const [option, setOption] = React.useState({})
    const handleChange = (v)=>{
        const value =  v.target.innerText;
        setOption({
            [value]: true 
        })
    };
    return(
        <div className="cntContainer">
            <input type="checkbox" id="check" className="checkbox"/>
            <label className="menu" for="check"></label>
            <div className="left-panel">
                <ul className="listOptions" onClick={handleChange}>

                    <li className={option.DASHBOARD ? "active": "" }>DASHBOARD</li>
                    <li className={option.CATEGORY ? "active": ""}>CATEGORY</li>
                    <li className={option.STYLE ? "active": ""}>STYLE</li>
                    <li className={option.SERVICE ? "active": ""}>SERVICE</li>
                    <li className={option.BARBERS ? "active": ""}>BARBERS</li>
                    <li className={option.CLIENTS ? "active": ""}>CLIENTS</li>
                    <li className={option.ADMIN ? "active": ""}>ADMIN</li>
                    <li className={option.CONFIG ? "active": ""} className="cntConfig" id="CONFIG"><h1>CONFIG</h1></li>

                </ul>
            </div> 
            

            <div className="contentList">
            { option.DASHBOARD && (
                    <AdminDashboard/>
                )}
                {option.CATEGORY && (
                    <Categories/>
                )}
                {option.STYLE&& (
                    <Style/>
                )}
                {option.SERVICE&& (
                    <Service/>
                )}
                {option.BARBERS && (
                    <AdminBarbers/>
                )}
                {option.CLIENTS && (
                    <AdminClients/>
                )}
                {option.ADMIN && (
                    <AdminAdmins/>
                )}
                {option.CONFIG && (
                    <AdminConfig/>
                )}
            </div>
        </div>
    )
}

export default ContainerCRUD;