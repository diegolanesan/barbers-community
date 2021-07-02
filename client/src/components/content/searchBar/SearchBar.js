import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBarbersByName } from "../../../redux/action/barbers";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SearchBar() {
	const [input, setinput] = useState("");
	const [listen, setListen] = useState(false)
	const dispatch = useDispatch();
	const history = useHistory();
	// const {transcript, resetTranscript} = useSpeechRecognition()

	function onChange(e) {
		setinput(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		dispatch(getBarbersByName(input));
		history.push("/catalog");
		setinput("");
	}
	// console.log(transcript)
	// const handleListen  = ()=>{
	// 	SpeechRecognition.startListening()
	// 	setListen(true)
	// 	setinput(transcript)
	// }
	
	// const handleStopListen = ()=>{
	// 	SpeechRecognition.stopListening()
	// 	// dispatch(getBarbersByName(input));
	// 	setinput("");
	// 	resetTranscript()
	// 	setListen(false)
	// };

	
	return (
		<form onSubmit={onSubmit} className="containerSearch w-full">
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
				className="bg-secondary text-white py-1 px-3 rounded-3xl"
			/>
			{/* <i class={!listen ? ("far fa-microphone"):("far fa-hand-paper")} onChange={!listen ? (handleListen):(handleStopListen)}></i> */}
		</form>
	);
}

export default SearchBar;
