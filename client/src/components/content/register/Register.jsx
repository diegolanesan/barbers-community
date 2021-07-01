import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { signUpBarber } from "../../../redux/action/auth";
import Swal from 'sweetalert2'
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';

const validate = (input) => {
	let errors = {};
	// name
	if (!input.name) errors.name = "First name is required.";
	else if (/(?=.*[0-9])/.test(input.name))
		errors.name = "Must contain only letters.";
	// lastname
	if (!input.lastname) errors.lastname = "Last name is required.";
	else if (/(?=.*[0-9])/.test(input.lastname))
		errors.lastname = "Must contain only letters.";
	// email
	if (!input.email) errors.email = "E-mail is required.";
	else if (
		!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
			input.email
		)
	)
		errors.email = "Must be a valid E-mail.";
	// password
	if (!input.password) errors.password = "Please choose a password.";
	else if (!/^[A-Za-z0-9]+$/g.test(input.password))
		errors.password = "Must contain only letters and numbers.";
	else if (!/(?=.*[A-Za-z])/.test(input.password))
		errors.password = "Must contain at least one letter.";
	else if (!/(?=.*[0-9])/.test(input.password))
		errors.password = "Must contain at least one number.";
	if (!input.confirmedPassword)
		errors.confirmedPassword = "Please confirm your password.";
	else if (input.password !== input.confirmedPassword)
		errors.confirmedPassword = "Passwords must match.";
	// type
	if (!input.type) errors.type = "Shuold choose at least one.";

	return errors;
};

const Register = () => {
	const history = useHistory()
	const [barberImg, setBarberImg] = useState([]);

	const newBarber = {
		name: "",
		lastname: "",
		bio: "",
		resume: "",
		email: "",
		password: "",
		confirmedPassword: "",
		alias: "",
		location: "",
		mobile: "",
		img: barberImg,
		type: "",
	};

	const [barber, setBarber] = useState(newBarber);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		setBarber({
			...barber,
			[e.target.name]: e.target.value,
		});

		setErrors(
			validate({
				...barber,
				[e.target.name]: e.target.value,
			})
		);
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


	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		const barberSend = {
			barber: {
				status: true,
				rating: 0,
				name: barber.name,
				lastname: barber.lastname,
				bio: barber.bio,
				resume: barber.resume,
				email: barber.email,
				password: barber.confirmedPassword,
				alias: barber.alias,
				address: barber.address,
				number: barber.number,
				city: barber.city,
				state: barber.state,
				country: barber.country,
				mobile: barber.mobile,
				image: barberImg,
				type: barber.type,
			},
		};
		// if (errors || !barberSend.barber.name) {
		// 	e.preventDefault()
		// 	return alert("There's some required fields empty, check please.")
		// }
		console.log(barberSend);
		dispatch(signUpBarber(barberSend)); // Reemplazar por la nueva action que almacena el JWT
		Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Register Sucessfull',
            showConfirmButton: false,
            timer: 1500
          })
		window.location.href = "http://localhost:3000/loginBarbers";
	};
	};

	return (
		<body className="bg-background font-lato text-primary">
			{/* <!-- Container --> */}
			<div className="container mx-auto">
				<div className="flex justify-center py-10 px-6 ">
					{/* <!-- Row --> */}
					<div className="w-full justify-center xl:w-3/4 lg:w-11/12 flex">

						<div className="w-full  lg:w-7/12 bg-white p-5">
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
											className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.name && "border-red-500"
												} shadow appearance-none focus:outline-none focus:shadow-outline`}
											// id="firstName"
											type="text"
											placeholder="First Name"
											name="name"
											value={barber.name}
											onChange={handleInputChange}
										/>
										{errors.name && (
											<p className="text-xs italic text-red-500">
												{errors.name}
											</p>
										)}
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold"
										// for="lastName"
										>
											Last Name
										</label>
										<input
											className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.lastname && "border-red-500"
												} shadow appearance-none focus:outline-none focus:shadow-outline`}
											id="lastName"
											type="text"
											placeholder="Last Name"
											name="lastname"
											value={barber.lastname}
											onChange={handleInputChange}
										/>
										{errors.lastname && (
											<p className="text-xs italic text-red-500">
												{errors.lastname}
											</p>
										)}
									</div>
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold"
										// for="firstName"
										>
											Username
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="userName"
											type="text"
											placeholder="Username"
											name="alias"
											value={barber.alias}
											onChange={handleInputChange}
										/>
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold"
										// for="lastName"
										>
											Address
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="address"
											type="text"
											placeholder="Address"
											name="address"
											value={barber.address}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold"
										// for="firstName"
										>
											Number
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="number"
											type="number"
											min="0"
											placeholder="Number"
											name="number"
											value={barber.number}
											onChange={handleInputChange}
										/>
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold"
										// for="lastName"
										>
											City
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="city"
											type="text"
											placeholder="City"
											name="city"
											value={barber.city}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold"
										// for="firstName"
										>
											State
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="state"
											type="text"
											placeholder="State"
											name="state"
											value={barber.state}
											onChange={handleInputChange}
										/>
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold"
										// for="lastName"
										>
											Country
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="country"
											type="text"
											placeholder="Country"
											name="country"
											value={barber.country}
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
											Phone
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="phone"
											type="number"
											placeholder="phone"
											name="mobile"
											value={barber.mobile}
											onChange={handleInputChange}
										/>
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold"
										// for="lastName"
										>
											Biography
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border 
											 shadow appearance-none focus:outline-none focus:shadow-outline"
											id="biography"
											type="text"
											placeholder="Short Biography"
											name="bio"
											value={barber.bio}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div className="mb-4">
									<label
										className="block mb-2 text-sm font-bold"
									// for="email"
									>
										Resume
									</label>
									<textarea
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border
										 shadow appearance-none focus:outline-none focus:shadow-outline"
										id="resume"
										type="text"
										placeholder="About You"
										name="resume"
										value={barber.resume}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold"
										// for="firstName"
										>
											Type
										</label>
										<select
											name="type"
											value={barber.type}
											onChange={handleInputChange}
										>
											<option value="" defaultChecked >Choose one...</option>
											<option value="Urban">Urban</option>
											<option value="Academy">Academy</option>
											<option value="Hair technician">Hair technician</option>
											<option value="Seminary">Seminary</option>
										</select>
										{errors.type && (
											<p className="text-xs italic text-red-500">
												{errors.type}
											</p>
										)}
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
										// for="email"
										>
											Profile Image
										</label>
										<input
											className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  shadow appearance-none focus:outline-none focus:shadow-outline"
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
										className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border ${errors.email && "border-red-500"
											} shadow appearance-none focus:outline-none focus:shadow-outline`}
										id="email"
										type="email"
										placeholder="Email"
										name="email"
										value={barber.email}
										onChange={handleInputChange}
									/>
									{errors.email && (
										<p className="text-xs italic text-red-500">
											{errors.email}
										</p>
									)}
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
											className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border ${errors.password && "border-red-500"
												} shadow appearance-none focus:outline-none focus:shadow-outline`}
											id="password"
											type="password"
											placeholder="*********"
											name="password"
											value={barber.password}
											onChange={handleInputChange}
										/>
										{errors.password && (
											<p className="text-xs italic text-red-500">
												{errors.password}
											</p>
										)}
										{/* <p className="text-xs italic text-red-500">
											Please choose a password.
										</p> */}
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold"
										// for="c_password"
										>
											Confirm Password
										</label>
										<input
											className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border ${errors.confirmedPassword && "border-red-500"
												} shadow appearance-none focus:outline-none focus:shadow-outline`}
											id="c_password"
											type="password"
											placeholder="*********"
											name="confirmedPassword"
											value={barber.confirmedPassword}
											onChange={handleInputChange}
										/>
										{errors.confirmedPassword && (
											<p className="text-xs italic text-red-500">
												{errors.confirmedPassword}
											</p>
										)}
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

export default Register;
