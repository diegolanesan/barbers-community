const {
	Client,
	Appointment,
	DetailAppointment,
} = require("../db");

require("dotenv").config();
const { Op } = require("sequelize");

// const quantityAppointments= async(clientId)=>{
// 		console.log("qtyApp..")
// }

const getPanelClient = async (req, res, next) => {
	
	//Client.id	
	const primaryKey = req.body;	
	
	try {

		//qryClient
		let client = await Client.findByPk(primaryKey.id);
	//	console.log(client);

		const data = {			
		 		id:client.id,
			 	fullName:client.name + " " + client.lastname,
		};
		
		//JSQL Appointments
		let appointmentByClientId = await Appointment.findAll({
			where: {
				clientId: client.id,
			},
		});		
		console.log("--");

		console.log(data);
		console.log(appointmentByClientId);
				
		res.status(200).send(data);


	} catch (error) {}
};

module.exports = {getPanelClient}