import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Home from './components/container/Home/Home';
import './App.css';
import NavBar from './components/content/navBar/NavBar';
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

function App() {
	const location = useLocation();
	return (
		<div className="App">
			{/* {location.pathname === "/" ||
				location.pathname === "/catalog" ||
				location.pathname === "/dashboard" ||
				location.pathname === "//admin/dashboard" ||
				location.pathname === "/loginBarbers" ||
				location.pathname === "/loginClients" ||
				location.pathname === "/barbers/dashboard" && (
				<Route path="/" component={NavBar} />
			)} */}
			<Route path="/" component={NavBar}/>
			<Route path="/Detail/:id" component={showBarberDetail} />
			<Route exact path="/" component={Home} />
			<Route path="/catalog" component={Catalog} /> {/*hecho para pruebas*/}
			<Route exact path="/admin/barbers" component={BarberTable} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/clients/register" component={RegisterClient} />
			<Route exact path="/BarberConfig/:id" component={BarberConfig} />
			<Route exact path="/loginBarbers" component={LoginBarbers} />
			<Route exact path="/loginClients" component={LoginClient} />
			<Route exact path="/admin/barbers/edit/:id" component={BarberEdit} />
			<Route exact path="/academic" component={Academic} />
			<Route exact path="/urban" component={Urban} />
			<Route exact path="/hair-technician" component={HairTechnician} />
			<Route exact path="/recovery/:token" component={Recovery} />
			<Route exact path="/appointment/date" component={AppointmentDate} />
			<Route exact path="/barbers/dashboard" component={BarberDashboard} />
			<Route exact path="/barbers/dashboard/:id" component={DetailsAppointment} />
			<Route exact path="/clients/dashboard" component={ClientDesk} />
			<Route exact path="/cart" component={CartLogged} />
			<Route exact path="/guest/cart" component={Cart} />
			<Route exact path="/admin/dashboard" component={AdminDesk} />
			<Route exact path="/reviews/:id" component={Reviews} />
			<Route exact path="/reviews/new/:id" component={AddReview} />
			<Route exact path="/places" component={	Places} />
			<Route exact path="/pruebaSeba" component={Services} />
			<ToastContainer />
		</div>
	);
}

export default App;
