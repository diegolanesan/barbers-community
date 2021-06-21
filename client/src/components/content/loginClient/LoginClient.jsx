import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInClient } from "../../../redux/action/auth";
import { useHistory } from "react-router-dom";
import cutHair from "../../../resources/hero.jpg";

function LoginClient() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [creds, setCreds] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		setCreds({
			...creds,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(signInClient(creds, history));
	}

	return (
		<div class="flex flex-col md:flex-row h-screen items-center">
			<div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
				<img src={cutHair} alt="" class="w-full h-full object-cover" />
			</div>

			<div
				class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center"
			>
				<div class="w-full h-full">
					<h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
						Log in to your account
					</h1>

					<form class="mt-6" action="#" method="POST" onSubmit={handleSubmit}>
						<div>
							<label class="block text-gray-700">Email Address</label>
							<input
								type="email"
								name="email"
								onChange={handleChange}
								placeholder="Enter Email Address"
								class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
							/>
						</div>

						<div class="mt-4">
							<label class="block text-gray-700">Password</label>
							<input
								type="password"
								name="password"
								onChange={handleChange}
								placeholder="Enter Password"
								minlength="2"
								class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none"
							/>
						</div>

						<div class="text-right mt-2">
							<a
								href="#"
								class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
							>
								Forgot Password?
							</a>
						</div>

						<button
							type="submit"
							class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                      px-4 py-3 mt-6"
						>
							Log In
						</button>
					</form>

					<hr class="my-6 border-gray-300 w-full" />

					<button
						type="button"
						class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
					>
						<div class="flex items-center justify-center">
							<span class="ml-4">Log in with Google</span>
						</div>
					</button>

					<p class="mt-8">
						Need an account?{" "}
						<a
							href="http://localhost:3000/register"
							class="text-blue-500 hover:text-blue-700 font-semibold"
						>
							Create an account
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default LoginClient;
