import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Home from './components/container/Home/Home';
import './App.css';
// import NavBar from './components/content/navBar/NavBar';
import showBarberDetail from './components/content/barberDetail/BarberDetail';
import Catalog from './components/content/catalog/catalog';
import BarberTable from './components/content/barberTable/BarberTable';
import Register from './components/content/register/Register';
import RegisterClient from './components/content/register/Client';
import BarberEdit from './components/content/barberEdit/BarberEdit';
import Academic from './components/content/academic/Academic';
import Urban from './components/content/urban/Urban';
import BarberConfig from './components/content/barberConfig/BarberConfig';
import LoginBarbers from './components/content/loginBarber/LoginBarber';
import LoginClient from './components/content/loginClient/LoginClient';
import HairTechnician from './components/content/hairTechnician/HairTechnician';
import Recovery from './components/container/recovery/Recovery';
import AppointmentDate from './components/content/appointmentDate/AppointmentDate';
import BarberDashboard from './components/content/barberDashboard/barberDashboard';
import ClientDesk from './components/container/clientDesk/ClientDesk';
import CartLogged from './components/container/cart/CartLogged';
import Cart from './components/container/cart/Cart';
import AdminDesk from './components/content/admin/AdminDesk';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailsAppointment from "./components/content/barberDashboard/Appointments/DetailsAppointment";
import Categories from "./components/container/createAdmin/categories/Categories";
import Reviews from "./components/content/reviews/Reviews";
import AddReview from "./components/content/reviews/AddReviews";
import Places from "./components/container/autocomplete/autocomplete";
import Style from "./components/container/createAdmin/HFStypes/Style";
import Services from "./components/container/createAdmin/services/Services";
import NavBar from "./components/content/navBarSeba/NavBar"
import newCatalog from "./components/content/catalog/newCatalog"
import Error from "./components/content/error/Error"
import jwtDecode from "jwt-decode";
import NavBarClient from "./components/content/navBarSeba/NavBarClient";
import NavBarAdmin from "./components/content/navBarSeba/NavBarAdmin";
import NavBarBarber from "./components/content/navBarSeba/NavBarBarber";
import ContainerCRUD from "./components/container/createAdmin/container/ContainerCRUD";


function App() {
	const clientToken = localStorage.getItem("clientToken") || false
	const barberToken = localStorage.getItem("barberToken") || false
	const admin = clientToken ? jwtDecode(clientToken) : false
    //admin.role === 'admin' ? 
	return (
		<div className="App">

			<Route path="/" component={NavBar}/>
			<Route path="/Detail/:id" component={showBarberDetail} />
			<Route exact path="/" component={Home} />
			<Route path="/catalog" component={Catalog} /> 
			<Route exact path="/loginBarbers" component={LoginBarbers} />
			<Route exact path="/loginClients" component={LoginClient} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/clients/register" component={RegisterClient} />
			<Route exact path="/newCatalog" component={newCatalog} />
			<Route exact path="/guest/cart" component={Cart} />
			
			<Route exact path="/clients/dashboard" component={admin.rol === "client" || admin.rol !== "admin" && admin ? ClientDesk : Error} />
			<Route exact path="/cart" component={admin.rol === "client" ? CartLogged : Error} />
			<Route exact path="/reviews/:id" component={admin.rol === "client" ? Reviews : Error} />
			<Route exact path="/reviews/new/:id" component={admin.rol === "client" ? AddReview : Error} />
					
			<Route exact path="/admin/barbers" component={barberToken ? BarberTable : Error} />
			<Route exact path="/BarberConfig/:id" component={barberToken ? BarberConfig : Error} />
			<Route exact path="/barbers/dashboard" component={barberToken ? BarberDashboard : Error} />
			<Route exact path="/barbers/dashboard/:id" component={barberToken ? DetailsAppointment : Error} />
			<Route exact path="/barbers/recovery/:token" component={barberToken ? Recovery : Error} />
					
			<Route exact path="/admin/dashboard" component={admin.rol === "admin" ? AdminDesk : Error} />
			<Route exact path="/admin/barbers/edit/:id" component={admin.rol === "admin" ? BarberEdit : Error} />
			<Route exact path="/pruebaSeba" component={admin.rol === "admin" ? Style : Error} />
			<Route exact path="/pruebaServicios" component={admin.rol === "admin" ? Services : Error} />
		
			<Route exact path="/pruebaCOntainer" component={ContainerCRUD} />
			
				
			<Route exact path="/404" component={Error} />
				
			<Route exact path="/places" component={Places} />
			<ToastContainer />
		</div>
	);
}

export default App;
