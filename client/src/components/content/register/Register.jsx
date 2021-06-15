import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postBarber } from "../../../redux/action/barbers";

const Register = () => {
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

	const handleInputChange = (e) => {
		setBarber({
			...barber,
			[e.target.name]: e.target.value,
		});
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
	console.log(barberImg);

	console.log(barber);
	const dispatch = useDispatch();
	const handleSubmit = () => {
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
				location: barber.location,
				mobile: barber.mobile,
				image: barberImg,
				type: barber.type,
			},
		};
		console.log(barberSend);
		dispatch(postBarber(barberSend));
		alert("Register Sucessfull");
		window.location.replace("/catalog");
	};
	// const handleSelect = () => {
	//     let select = document.getElementById("");

	//     if (select) {
	//         let selectValue = select.options[select.selectedIndex].value;
	//         let selectedCategoryNames = select.options[select.selectedIndex].innerText;

	//         setSelectedName({
	//             ...selectedName,
	//             categoryName: selectedName.categoryName.concat(selectedCategoryNames)
	//         });

	//         let selectCategory = product.category.concat(selectValue);
	//         setProduct({ ...product, category: selectCategory });

	//     }
	// };

	// useEffect(() => {
	//     dispatch(postBarber(newBarber))
	// }, [])

	return (
		<body class=" bg-gray-200">
			{/* <!-- Container --> */}
			<div class="container mx-auto">
				<div class="flex justify-center py-10 px-6 ">
					{/* <!-- Row --> */}
					<div class="w-full justify-center xl:w-3/4 lg:w-11/12 flex">
						{/* <!-- Col --> */}
						{/* <div
                            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url('https://www.bu.edu/files/2019/04/resize-19-1292-BARBER2-076.jpg')" }}
                        ></div> */}
						{/* <!-- Col --> */}
						<div class="w-full  lg:w-7/12 bg-white p-5 rounded-lg">
							<h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
							<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="firstName"
										>
											First Name
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="firstName"
											type="text"
											placeholder="First Name"
											name="name"
											value={barber.name}
											onChange={handleInputChange}
										/>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="lastName"
										>
											Last Name
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="lastName"
											type="text"
											placeholder="Last Name"
											name="lastname"
											value={barber.lastname}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="firstName"
										>
											Username
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="userName"
											type="text"
											placeholder="Username"
											name="alias"
											value={barber.alias}
											onChange={handleInputChange}
										/>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="lastName"
										>
											Location
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="location"
											type="text"
											placeholder="location"
											name="location"
											value={barber.location}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="firstName"
										>
											Phone
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="phone"
											type="number"
											placeholder="phone"
											name="mobile"
											value={barber.mobile}
											onChange={handleInputChange}
										/>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="lastName"
										>
											Biography
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="biography"
											type="text"
											placeholder="Short Biography"
											name="bio"
											value={barber.bio}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="mb-4">
									<label
										class="block mb-2 text-sm font-bold text-gray-700"
										for="email"
									>
										Resume
									</label>
									<textarea
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="resume"
										type="text"
										placeholder="About You"
										name="resume"
										value={barber.resume}
										onChange={handleInputChange}
									/>
								</div>
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="firstName"
										>
											Type
										</label>
										<select
											name="type"
											value={barber.type}
											onChange={handleInputChange}
										>
											<option value="Urban">Urbano</option>
											<option value="Academy">Academico</option>
											<option value="Hair technician">Tecnico Capilar</option>
											<option value="Seminary">Seminarios</option>
										</select>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="email"
										>
											Profile Image
										</label>
										<input
											class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="image"
											type="file"
											name="image"
											//value={barber.img}
											onChange={(e) => setImage(e.target.files[0])}
										/>
										<button onClick={(e) => uploadImage(e)}>Upload</button>
									</div>
								</div>
								<div class="mb-4">
									<label
										class="block mb-2 text-sm font-bold text-gray-700"
										for="email"
									>
										Email
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email"
										name="email"
										value={barber.email}
										onChange={handleInputChange}
									/>
								</div>
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="password"
										>
											Password
										</label>
										<input
											class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="password"
											type="password"
											placeholder="******************"
											name="password"
											value={barber.password}
											onChange={handleInputChange}
										/>
										<p class="text-xs italic text-red-500">
											Please choose a password.
										</p>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="c_password"
										>
											Confirm Password
										</label>
										<input
											class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="c_password"
											type="password"
											placeholder="******************"
											name="confirmedPassword"
											value={barber.confirmedPassword}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class=" text-center">
									<button
										onClick={() => handleSubmit()}
										class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
										type="button"
									>
										Register Account
									</button>
								</div>
								{/* <hr class="mb-6 border-t" /> */}
								{/* <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};

export default Register;
