import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBarbersByName } from "../../../redux/action/barbers";

function SearchBar() {
	const [input, setinput] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	function onChange(e) {
		setinput(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		dispatch(getBarbersByName(input));
		history.push("/catalog");
		setinput("");
	}

	return (
		<form onSubmit={onSubmit} className="">
			<input
				value={input}
				type="text"
				placeholder="Your barber"
				onChange={onChange}
				className="w-80 py-1 px-3 px-2 mr-2 ml-4 text-black rounded-3xl"
			/>
			<input
				type="submit"
				value="Search"
				className="bg-blue-800 text-white py-1 px-3 rounded-3xl"
			/>
		</form>
	);
}

export default SearchBar;
