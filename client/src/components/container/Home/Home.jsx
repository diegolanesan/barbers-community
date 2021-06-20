// importar Footer
import cutHair from "../../../resources/cut-hair.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../redux/action/services";
import { loadUser } from '../../../redux/action/auth'

function Home() {
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth.token)
 
	useEffect(() => {
		dispatch(getServices())
		dispatch(loadUser())
	}, [dispatch]);
	const services = useSelector((state) => state.services.array);

    return (
        <div>
            <div className="h-full w-full bg-gray-800 opacity-100">
                <div className="bg-hero h-screen bg-center bg-no-repeat bg-cover h-vh flex flex-col justify-center">
                    <h1 className="pl-20 pb-4 text-6xl mb-8 text-white font-bold text-center"> Barber's Community </h1>
                    <div className="flex flex-row items-center justify-center">
                        <button className="w-1/5 ml-20 bg-blue-400 text-white font-bold text-xl hover:bg-blue-600 py-4 px-4 rounded h-16 mb-4">
                            <Link to="/catalog"> Find your next barber </Link>
                        </button>
                        <button className="w-1/5 ml-20 bg-blue-400 text-white font-bold text-xl hover:bg-blue-600 py-4 px-4 rounded h-16">
                            <Link to="/register"> Join the barber's community </Link>
                        </button>
                    </div>
                </div>
            </div>

			<div className="text-center mt-16 mb-16">
				<h2 className="text-3xl pb-4 font-bold">
					{" "}
					Explore Barber's Community{" "}
				</h2>
				<p className="w-2/5 mx-auto text-lg text-gray-600">
					{" "}
					Our expert barbers are classified into three large groups: hair
					technicians, academic and urban barbers. Find out which one is the
					best fit for you
				</p>
				<div className="grid-cols-3 gap-8 flex justify-center h-48 my-10">
					<div
						className="flex justify-center items-center bg-tecnico-capilar bg-center bg-no-repeat bg-cover w-1/5 rounded-md
                        opacity-100 transition duration-500 ease-in-out hover:shadow-xl transform hover:-translate-y-1 hover:scale-110"
					>
						<Link to="/hair-technician">
							{" "}
							<h3 className="text-white font-bold text-3xl cursor-pointer">
								{" "}
								Hair Technician{" "}
							</h3>{" "}
						</Link>
					</div>
					<div
						className="flex justify-center items-center bg-academico bg-center bg-no-repeat bg-cover w-1/5 rounded-md
                        opacity-100 transition duration-500 ease-in-out hover:shadow-xl transform hover:-translate-y-1 hover:scale-110"
					>
						<Link to="/academic">
							{" "}
							<h3 className="text-white font-bold text-3xl cursor-pointer">
								{" "}
								Academic Barbers
							</h3>{" "}
						</Link>
					</div>
					<div
						className="flex justify-center items-center bg-urbano bg-center bg-no-repeat bg-cover w-1/5 rounded-md
                        opacity-100 transition duration-500 ease-in-out hover:shadow-xl transform hover:-translate-y-1 hover:scale-110"
					>
						<Link to="/urban">
							{" "}
							<h3 className="text-white font-bold text-3xl cursor-pointer">
								{" "}
								Urban Barbers{" "}
							</h3>{" "}
						</Link>
					</div>
				</div>
			</div>

			{/* <div className="text-center mt-8">
                <h2 className="text-3xl pb-4 font-bold"> Services </h2>
                <p className="w-2/5 mx-auto text-lg text-gray-600"> Discover all our services
                </p>

                <div className="grid-cols-4 flex justify-center h-80 pt-12 gap-12 mb-12">
                    {
                        services && services.map(service => {
                            return <div className="border rounded transition duration-500 ease-in-out hover:shadow-xl 
                                transform hover:-translate-y-1 hover:scale-110">
                                <img className="max-h-48 rounded-md" src={cutHair} alt="cut-hair" />
                                <h3 className="text-lg font-bold pt-2"> {service.name} </h3>
                                <p className="text-sm text-gray-600"> {service.description} </p>
                            </div>
                        })
                    }
                </div>
            </div> */}
		</div>
	);
}

export default Home;
