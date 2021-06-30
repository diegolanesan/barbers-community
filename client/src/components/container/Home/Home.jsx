// importar Footer
import cutHair from "../../../resources/cut-hair.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../redux/action/services";
import { loadUser } from "../../../redux/action/auth";
import axios from "axios";
import About from "./components/About";
import Services from "./components/Services";
import heading from '../../../resources/heading-line.png'

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
		
	}, [dispatch]);
	

	const user = useSelector((state) => state.auth);

	return (
		<div>
			<div className="h-full w-full bg-secondary opacity-100">
				<div className="bg-hero h-screen bg-center bg-no-repeat bg-cover h-vh flex flex-col justify-center">
					<h1 className="text-3xl text-white font-prata font-bold text-center">
						{" "}
						Barber's Community{" "}
					</h1>
					<img class="w-36 mt-4 mb-4 mx-auto"src={heading} alt="line"></img>
					<div className="flex flex-row items-center justify-center">
						<button className="p-4 mt-12 bg-secondary text-white font-lato font-bold text-sm hover:bg-primary">
							<Link to="/register"> JOIN THE COMMUNITY </Link>
						</button>
					
					</div>
				</div>
			</div>

			<About />
			<Services />
		</div>
	);
}

export default Home;
