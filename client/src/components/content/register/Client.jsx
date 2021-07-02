import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { postBarber } from "../../../redux/action/barbers";
import { signUpClient } from "../../../redux/action/auth";
import Swal from 'sweetalert2'
import { getAllHairTypes, getAllFaceTypes, getAllStyles } from "../../../redux/action/types";

const validate = (input) => {
	let errors = {}
	// name
	if (!input.name) errors.name = "First name is required."
	else if (/(?=.*[0-9])/.test(input.name)) errors.name = "Must contain only letters."
	// lastname
	if (!input.lastname) errors.lastname = "Last name is required."
	else if (/(?=.*[0-9])/.test(input.lastname)) errors.lastname = "Must contain only letters."
	// email
	if (!input.email) errors.email = "E-mail is required."
	else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.email)) errors.email = "Must be a valid E-mail."
	// password
	if (!input.password) errors.password = "Please choose a password."
	else if (!/^[A-Za-z0-9]+$/g.test(input.password)) errors.password = "Must contain only letters and numbers."
	else if (!/(?=.*[A-Za-z])/.test(input.password)) errors.password = "Must contain at least one letter."
	else if (!/(?=.*[0-9])/.test(input.password)) errors.password = "Must contain at least one number."
	if (!input.confirmedPassword) errors.confirmedPassword = "Please confirm your password."
	else if (input.password !== input.confirmedPassword) errors.confirmedPassword = "Passwords must match."
	// type
	if (!input.styleId) errors.styleId = "Should choose at least one."
	if (!input.faceTypeId) errors.faceTypeId = "Should choose at least one."
	if (!input.hairTypeId) errors.hairTypeId = "Should choose at least one."

	return errors
}

const RegisterClient = () => {
	const dispatch = useDispatch();
	const [barberImg, setBarberImg] = useState([]);

	const newClient = {
		name: "",
		lastname: "",
		email: "",
		img: barberImg,
		mobile: "",
		location: "",
		password: "",
		confirmedPassword: "",
		status: "",
		styleId: "",
		faceTypeId: "",
		hairTypeId: ""
	};
	const { hair, face, style } = useSelector(state => state.types)
	const [client, setClient] = useState(newClient);
	const [errors, setErrors] = useState({})
	useEffect(() => {
		dispatch(getAllHairTypes())
		dispatch(getAllFaceTypes())
		dispatch(getAllStyles())
	}, [dispatch])
	const handleInputChange = (e) => {
		setClient({
			...client,
			[e.target.name]: e.target.value,
		});

		setErrors(validate({
			...client,
			[e.target.name]: e.target.value
		}))
	};

	const [image, setImage] = useState("");
	const [url, setUrl] = useState("");
	const uploadImage = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "rvmvdcdy");
		data.append("cloud_name", "dpvccwnjv");
		fetch("https://api.cloudinary.com/v1_1/dpvccwnjv/image/upload", {
			method: "post",
			body: data,
		})
			.then((resp) => resp.json())
			.then((data) => {
				setUrl(data.url);
				setBarberImg([...barberImg, data.url]);
			})
			.catch((err) => console.log(err));
	};

	const handleSubmit = (e) => {
		if (!client.name || !client.lastname ||
			!client.email || !client.password || !client.confirmedPassword ||
			!client.location || !client.mobile || !client.styleId || !client.faceTypeId
			|| !client.hairTypeId) {
			Swal.fire({
				title: 'Please complete all the fields',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
			})
		} else if (client.password !== client.confirmedPassword) {
			Swal.fire({
				title: 'password and confirm password must be the same',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
			})
		} else {
			const clientSend = {
				name: client.name,
				lastname: client.lastname,
				email: client.email,
				image: barberImg,
				mobile: client.mobile,
				location: client.location,
				password: client.confirmedPassword,
				status: "active",
				styleId: client.styleId,
				faceTypeId: client.faceTypeId,
				hairTypeId: client.hairTypeId,
				rol: "client",
			};

			dispatch(signUpClient(clientSend));
			Swal.fire({
				title: 'Register Sucessfull',
				icon: 'success',
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'Ok'
			}).then((result) => {
				if (result.isConfirmed) {
					window.location.href = "http://localhost:3000/loginClients";
				}
			})
		}
	};


	return (
		<body className="bg-background font-lato text-primary">
			{/* <!-- Container --> */}
			<div className="container mx-auto">
				<div className="flex justify-center py-10 px-6 ">
					{/* <!-- Row --> */}
					<div className="w-full justify-center xl:w-3/4 lg:w-11/12 flex">

						<div className="w-full lg:w-7/12 bg-white p-5">
							<h3 className="py-4 text-3xl font-prata font-bold text-center">Create an Account</h3>
							<form className="px-8 pt-6 pb-8 mb-4 bg-white">
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold"
										// for="firstName"
										>
											First Name
										</label>
										<input
											className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.name && 'border-red-500'} shadow appearance-none focus:outline-none focus:shadow-outline`}
											// id="firstName"
											type="text"
											placeholder="First Name"
											name="name"
											value={client.name}
											onChange={handleInputChange}
										/>
										{errors.name && (<p className="text-xs italic text-red-500" >{errors.name}</p>)}
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="lastName"
										>
											Last Name
										</label>
										<input
											className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.lastname && 'border-red-500'} shadow appearance-none focus:outline-none focus:shadow-outline`}
											id="lastName"
											type="text"
											placeholder="Last Name"
											name="lastname"
											value={client.lastname}
											onChange={handleInputChange}
										/>
										{errors.lastname && (<p className="text-xs italic text-red-500" >{errors.lastname}</p>)}
									</div>
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="firstName"
										>
											Phone
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											shadow appearance-none focus:outline-none focus:shadow-outline"
											id="phone"
											type="number"
											placeholder="phone"
											name="mobile"
											value={client.mobile}
											onChange={handleInputChange}
										/>
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="lastName"
										>
											Location
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="location"
											type="text"
											placeholder="location"
											name="location"
											value={client.location}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="firstName"
										>
											Type of Face
										</label>
										<select
											name="faceTypeId"
											value={client.faceTypeId}
											onChange={handleInputChange}
										>
											<option value="" defaultChecked >Choose one...</option>
											{face ? face.map(b => {
												return <option value={b.id}>{b.description}</option>
											}) : ""}
										</select>
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="lastName"
										>
											Type of Hair
										</label>
										<select
											name="hairTypeId"
											value={client.hairTypeId}
											onChange={handleInputChange}
										>
											<option value="" defaultChecked >Choose one...</option>
											{hair ? hair.map(b => {
												return <option value={b.id}>{b.description}</option>
											}) : ""}
										</select>
									</div>
								</div>
								<div className="mb-4 md:flex md:justify-between">
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="firstName"
										>
											Style
										</label>
										<select
											name="styleId"
											value={client.styleId}
											onChange={handleInputChange}
										>
											<option value="" defaultChecked >Choose one...</option>
											{style ? style.map(b => {
												return <option value={b.id}>{b.description}</option>
											}) : ""}
										</select>
										{errors.type && (<p className="text-xs italic text-red-500" >{errors.type}</p>)}
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="email"
										>
											Profile Image
										</label>
										<input
											className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
											id="image"
											type="file"
											name="image"
											//value={barber.img}
											onChange={(e) => setImage(e.target.files[0])}
										/>
										<button onClick={(e) => uploadImage(e)}>Upload</button>
									</div>
								</div>
								<div className="mb-4">
									<label
										className="block mb-2 text-sm font-bold text-gray-700"
									// for="email"
									>
										Email
									</label>
									<input
										className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border ${errors.email && 'border-red-500'} shadow appearance-none focus:outline-none focus:shadow-outline`}
										id="email"
										type="email"
										placeholder="Email"
										name="email"
										value={client.email}
										onChange={handleInputChange}
									/>
									{errors.email && (<p className="text-xs italic text-red-500" >{errors.email}</p>)}
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="password"
										>
											Password
										</label>
										<input
											className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border ${errors.password && 'border-red-500'} shadow appearance-none focus:outline-none focus:shadow-outline`}
											id="password"
											type="password"
											placeholder="*********"
											name="password"
											value={client.password}
											onChange={handleInputChange}
										/>
										{errors.password && (<p className="text-xs italic text-red-500" >{errors.password}</p>)}

									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="c_password"
										>
											Confirm Password
										</label>
										<input
											className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border ${errors.confirmedPassword && 'border-red-500'} shadow appearance-none focus:outline-none focus:shadow-outline`}
											id="c_password"
											type="password"
											placeholder="*********"
											name="confirmedPassword"
											value={client.confirmedPassword}
											onChange={handleInputChange}
										/>
										{errors.confirmedPassword && (<p className="text-xs italic text-red-500" >{errors.confirmedPassword}</p>)}
									</div>
								</div>
								<div className=" text-center">
									<button
										onClick={handleSubmit}
										className="w-full px-4 py-2 font-bold text-white bg-secondary
										 hover:bg-primary focus:outline-none focus:shadow-outline"
										type="button"
									>
										REGISTER ACCOUNT
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};

export default RegisterClient;