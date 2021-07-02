import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Home from './components/container/Home/Home';
import './App.css';
// import NavBar from './components/content/navBar/NavBar';
import showBarberDetail from './components/content/barberDetail/BarberDetail';
import BarberTable from './components/content/barberTable/BarberTable';
import Register from './components/content/register/Register';
import RegisterClient from './components/content/register/Client';
import BarberEdit from './components/content/barberEdit/BarberEdit';
import BarberConfig from './components/content/barberConfig/BarberConfig';
import LoginBarbers from './components/content/loginBarber/LoginBarber';
import LoginClient from './components/content/loginClient/LoginClient';
import Recovery from './components/container/recovery/Recovery';
import BarberDashboard from './components/content/barberDashboard/barberDashboard';
import ClientDesk from './components/container/clientDesk/ClientDesk';
import CartLogged from './components/container/cart/CartLogged';
import Cart from './components/container/cart/Cart';
import AdminDesk from './components/content/admin/AdminDesk';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailsAppointment from "./components/content/barberDashboard/Appointments/DetailsAppointment";
//import Categories from "./components/container/createAdmin/categories/Categories";
import Reviews from "./components/content/reviews/Reviews";
import AddReview from "./components/content/reviews/AddReviews";
import Places from "./components/container/autocomplete/autocomplete";
import Style from "./components/container/createAdmin/HFStypes/Style";
import Services from "./components/container/createAdmin/services/Services";
import NavBar from "./components/content/navBarSeba/NavBar"
import newCatalog from "./components/content/catalog/newCatalog"
import Error from "./components/content/error/Error"
import Validation from "./components/content/admin/Validation"
import jwtDecode from "jwt-decode";
// import NavBarClient from "./components/content/navBarSeba/NavBarClient";
// import NavBarAdmin from "./components/content/navBarSeba/NavBarAdmin";
// import NavBarBarber from "./components/content/navBarSeba/NavBarBarber";
import ContainerCRUD from "./components/container/createAdmin/container/ContainerCRUD";
import RecoveryClient from "./components/container/recovery/recoveryClient/RecoveryClient";


function App() {
	const clientToken = localStorage.getItem("clientToken") || false
	const barberToken = localStorage.getItem("barberToken") || false
	const admin = clientToken ? jwtDecode(clientToken) : false
    
	console.log(admin)
	return (
		<div className="App">

			<Route path="/" component={NavBar}/>
			<Route exact path="/" component={Home} />
			<Route path="/catalog" component={newCatalog} /> 
			<Route exact path="/loginBarbers" component={LoginBarbers} />
			<Route exact path="/loginClients" component={LoginClient} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/clients/register" component={RegisterClient} />
			{/* <Route exact path="/newCatalog" component={newCatalog} /> */}
			<Route exact path="/guest/cart" component={Cart} />
			<Route exact path="/barbers/recovery/:token" component={Recovery} />
			<Route exact path="/clients/recovery/:token" component={RecoveryClient} />
			
			<Route path="/Detail/:id" component={showBarberDetail} />

			<Route exact path="/clients/dashboard" component={admin.rol === "client" || admin.rol !== "admin" && admin ? ClientDesk : Error} />
			<Route exact path="/cart" component={clientToken ? CartLogged : Error} />
			<Route exact path="/reviews/:id" component={admin.rol === "client" ? Reviews : Error} />
			<Route exact path="/reviews/new/:id" component={admin.rol === "client" ? AddReview : Error} />
			<Route exact path="/recovery/:token" component={Recovery} />
			<Route exact path="/validation" component={Validation} />
			{/* <Route exact path="/admin/dashboard" component={AdminDesk} /> */}
			<Route exact path="/places" component={	Places} />
			<Route exact path="/admin/barbers" component={barberToken ? BarberTable : Error} />
			<Route exact path="/BarberConfig/:id" component={barberToken ? BarberConfig : Error} />
			<Route exact path="/barbers/dashboard" component={barberToken ? BarberDashboard : Error} />
			<Route exact path="/barbers/dashboard/:id" component={barberToken ? DetailsAppointment : Error} />
			<Route exact path="/admin/dashboard" component={admin.rol === "admin" ? ContainerCRUD : Error} />
			<Route exact path="/admin/barbers/edit/:id" component={admin.rol === "admin" ? BarberEdit : Error} />
			<Route exact path="/404" component={Error} />
			<ToastContainer />
		</div>
	);
}

export default App;
