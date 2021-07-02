import React from "react";
import "./RecoveryClient.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendEmailBarber } from "../../../../redux/action/recovery";
import { putBarber } from "../../../../redux/action/barbers";
import { Link } from "react-router-dom";

const RecoveryClient = () => {
	const { loading, resp, err } = useSelector((state) => state.recovery);
	const tokenMail = useParams().token;
	const token = JSON.parse(localStorage.getItem("tokenClientRecovery"));
	const dispatch = useDispatch();
	const [fase, setFase] = React.useState({
		fase: 0,
	});

	React.useEffect(() => {
		if (tokenMail !== "false") {
			setFase({ fase: 2 });
		}
	}, []);

	const [form, setForm] = React.useState({
		to: false,
		new: false,
		confirm: false,
		error: false,
	});

	const handleChangeCero = (v) => {
		const value = v.target.value;
		setForm({
			...form,
			to: value,
		});
	};

	const handleSubmitCero = (v) => {
		v.preventDefault();
		//Tenemos que dispachar una acción de redux
		dispatch(sendEmailBarber(form));
		setFase({
			fase: 1,
		});
	};
	const handleChangeDos = (v) => {
		const name = v.target.name;
		const value = v.target.value;
		setForm({
			...form,
			[name]: value,
		});
	};
	const handleKeyUpDos = (k) => {
		const name = k.target.name;

		if (name === "confirm" && form.new !== form.confirm) {
			setForm({
				...form,
				error: "Passwords do not match",
			});
		} else {
			setForm({
				...form,
				error: false,
			});
		}
	};

	const handleSubmitDos = (e) => {
		e.preventDefault();
		const id = token.barber[0].id;
		token.barber[0].password = form.new;
		dispatch(putBarber(id, { barberModify: token.barber[0] }));
		console.log(token.barber[0]);
		localStorage.clear();
		window.location.href = "https://barberscommunity-g8.netlify.app/";
	};

	return (
		<div className="recoveryContainers">
			<div className="recoveryColor"></div>
			<div className="conteinerForm">
				{fase.fase === 0 ? (
					<form
						action=""
						className="recoveryForm"
						onChange={handleChangeCero}
						onSubmit={handleSubmitCero}
					>
						<label htmlFor="">Enter your email</label>
						<input type="text" placeholder="Write your email here" />
						<button>SEND</button>
					</form>
				) : loading ? (
					<h1 style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
						LOADING...
					</h1>
				) : err ? (
					<h1 style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
						{err.toUpperCase()}
					</h1>
				) : fase.fase === 1 ? (
					<>
						<h1 style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
							Se envio un mail para confirmar
						</h1>

						{localStorage.setItem("tokenClientRecovery", JSON.stringify(resp))}
					</>
				) : fase.fase === 2 ? (
					<form
						action=""
						className="recoveryForm"
						onChange={handleChangeDos}
						onSubmit={handleSubmitDos}
						onKeyUp={handleKeyUpDos}
					>
						<div>
							<h1>Reset Password</h1>
						</div>
						<label>New Password</label>
						<input type="password" name="new" id="" />
						<label>Confirm New Password</label>
						<input type="password" name="confirm" id="" />
						{form.error ? (
							<p style={{ color: "red" }}>{form.error}</p>
						) : (
							<button>SEND</button>
						)}
					</form>
				) : (
					""
				)}
			</div>
		</div>
	);
};


export default RecoveryClient;
