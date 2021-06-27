const {
	Client,
	Barber,
	DetailAppointment,
	Appointment,
	ServiceBarber,
	Service,
} = require("../db");
require("dotenv").config();
const { Op } = require("sequelize");

const addAppointment = (req, res, next) => {
	const { barberId, clientId, date, time, status, total, serviceBarberId } =
		req.body;

	console.log(req.body)
	Appointment.findOrCreate({
		where: {
			barberId,
			clientId,
			date,
			time,
			status,
			total,
		},
	}).then(async (resp) => {
		for (let i = 0; i < serviceBarberId.length; i++) {
			const element = serviceBarberId[i];
			await DetailAppointment.findOrCreate({
				where: {
					appointmentId: resp[0].id,
					serviceBarberId: Number(element),
					price: 100,
				},
			});
			console.log(element);
		}
		res.send(resp);
	});
};

// const getAppointments = (req, res, next) => {
// 	/* ---- El usuario ( administrador/cliente/barbero ) busca todas los appointments ----*/
// 	try {
// 		//
// 		Appointment.findAll({
// 			include: { all: true },
// 		}).then((result) => {
// 			res.status(200).send(result);
// 		});
// 	} catch (e) {
// 		console.log("No se pudo realizar la petición HTTP correctamente " + e);
// 	}
// };

//-🦖
const getAppointments = async (req, res, next) => {
	try {
		let appointmentAll = await Appointment.findAll({ include: { all: true } });

		if (appointmentAll) {
			let jsonAppointments = [];
			for (let i = 0; i < appointmentAll.length; i++) {
				let aux = {};
				//appointmentId
				aux["appointmentId"] = appointmentAll[i].dataValues.id;

				aux["date"] = appointmentAll[i].dataValues.date;
				aux["time"] = appointmentAll[i].dataValues.time;
				aux["status"] = appointmentAll[i].dataValues.status;
				aux["total"] = appointmentAll[i].dataValues.total;

				//qryBarber
				aux["barberId"] = appointmentAll[i].dataValues.barberId;
				let barber = await Barber.findByPk(aux["barberId"]);
				aux["barberName"] = barber.name + " " + barber.lastname;

				//qryClient
				aux["clientId"] = appointmentAll[i].dataValues.clientId;
				let client = await Client.findByPk(aux["clientId"]);
				aux["name"] = client.name + " " + client.lastname;

				//JSQL Services
				let detailAppointmentAll = await DetailAppointment.findAll({
					where: {
						appointmentId: aux["appointmentId"],
					},
				});
				// console.log(detailAppointmentAll);

				if (detailAppointmentAll.length > 0) {
					let jsonAppointmentsDetails = [];
					for (let j = 0; j < detailAppointmentAll.length; j++) {
						let auxServiceId = detailAppointmentAll[j].dataValues.serviceBarberId;
						if (auxServiceId) {
							let auxServiceName = await Service.findByPk(auxServiceId);
							//-🚏
							//JSQL categoryServices
							// let categoryServicesAll = await categoryService.findAll({
							// 	where: {
							// 		serviceId: auxServiceId,
							// 	},
							// });
							// if (detailAppointmentAll.length > 0) {
							// 	let jsonAppointmentsDetails = [];
							// 	for (let j = 0; j < detailAppointmentAll.length; j++) {
							// 		let auxServiceId = detailAppointmentAll[j].dataValues.serviceId;
							// 		if (auxServiceId) {
							// 			let auxServiceName = await Service.findByPk(auxServiceId);
							// 			jsonAppointmentsDetails.push(auxServiceName.dataValues);
							// 		}
							//--🦖
							jsonAppointmentsDetails.push(auxServiceName.dataValues);
						}
					}
					aux["service"] = jsonAppointmentsDetails;
					// console.log(jsonAppointmentsDetails);
				}
				jsonAppointments.push(aux);
			}
			// console.log(jsonAppointments);

			res.status(200).send(jsonAppointments);
		}
	} catch (e) {
		console.log(
			"[getAppointmentAll]The HTTP request could not be made successfully\n" + e
		);
	}
};

//--🦖

// const getAppointmentById = (req, res, next) => {
// 	try {
// 		let queryId = req.params.id.toUpperCase();
// 		Appointment.findOne({
// 			where: { id: queryId },
// 			include: [
// 				{ model: Barber },
// 				{ model: Client },
// 				{ model: DetailAppointment },
// 			],
// 		}).then((result) => {
// 			res.status(200).send(result);
// 		});
// 	} catch (e) {
// 		console.log("No se pudo realizar la petición HTTP correctamente " + e);
// 	}
// };

//-🦖
const getAppointmentById = async (req, res, next) => {
	console.log(req.params.id);
	// try {
	// 	let queryId = req.params.id.toUpperCase();
	// 	//let appointmentById = await Appointment.findOne({ where: { id: queryId } });

	// 	// if (appointmentById) {
	// 	// 	let aux = {};
	// 	// 	//appointmentId
	// 	// 	aux["appointmentId"] = appointmentById.dataValues.id;

	// 	// 	aux["date"] = appointmentById.dataValues.date;
	// 	// 	aux["time"] = appointmentById.dataValues.time;
	// 	// 	aux["status"] = appointmentById.dataValues.status;
	// 	// 	aux["total"] = appointmentById.dataValues.total;

	// 	//
	// 	// 	//qryBarber
	// 	// 	aux["barberId"] = appointmentById.dataValues.barberId;
	// 	// 	let barber = await Barber.findByPk(aux["barberId"]);
	// 	// 	aux["barberName"] = barber.name + " " + barber.lastname;

	// 	// 	//qryClient
	// 	// 	aux["clientId"] = appointmentById.dataValues.clientId;
	// 	// 	let client = await Barber.findByPk(aux["clientId"]);
	// 	// 	aux["name"] = client.name + " " + client.lastname;

	// 	// 	//services
	// 	// 	let services = [];
	// 	// 	let detailAppointmentAll = await DetailAppointment.findAll({
	// 	// 		where: {
	// 	// 			appointmentId: aux["appointmentId"],
	// 	// 		},
	// 	// 	});

	// 	// 	if (detailAppointmentAll.length > 0) {
	// 	// 		let jsonAppointmentsDetails = [];
	// 	// 		for (let j = 0; j < detailAppointmentAll.length; j++) {
	// 	// 			let auxServiceId = detailAppointmentAll[j].dataValues.serviceId;
	// 	// 			if (auxServiceId) {
	// 	// 				let auxServiceName = await Service.findByPk(auxServiceId);
	// 	// 				jsonAppointmentsDetails.push(auxServiceName.dataValues);
	// 	// 			}
	// 	// 		}
	// 	// 		aux["service"] = jsonAppointmentsDetails;
	// 	// 		console.log(jsonAppointmentsDetails);
	// 	// 	}

	// 	// 	console.log(aux);

	// 	// 	res.status(200).send(aux);
	// 	// }
	// } catch (e) {
	// 	console.log(
	// 		"[getAppointmentById]The HTTP request could not be made successfully\n" +
	// 			e
	// 	);
	// }
};
//--🦖

const updateAppointment = async (req, res, next) => {
	const idAppointment = req.params.id;
	const { appointmentModify } = req.body;
	let appointment = await Appointment.findByPk(idAppointment);
	if (appointment) {
		appointment = appointment.update(appointmentModify);
		res.send(appointment);
	} else {
		res.send("No se ha podido modificar al barbero");
	}
};

const addRelation = async (req, res, next) => {
	// Establece la relacion entre appointment y serviceBarber
	const { id, serviceBarberId, appointmentId, price } = req.body;
	const resul = await DetailAppointment.create({
		id,
		serviceBarberId,
		appointmentId,
		price,
	}); //resul.addCategory([idCategory]);
	if (resul) {
		res.send(resul);
	} else {
		res.status(400).send("No se pudo relacionar las tablas");
	}
};

const deleteAppointment = (req, res, next) => {
    const id = req.params.id;
    Appointment.destroy({
        where: {
            id,
        }
    })
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => next(error));
}
// const addItem = async (req, res) => {
// 	const { services} = req.body;
// 	const userId = req.params.id;
// 	const cart = await Cart.findOrCreate({where : {clientId: userId, state: "Active"}})
// 	let total = 0;
// 	const items = services.map( async s => {
// 		 console.log("Service name = " + s.serviceName)
// 		  await Item.create({
// 			  cartId: cart.id,
// 			  clientId: userId,
// 			  serviceName: s.name,
// 			  servicePrice: s.price
// 		  });
// 		  total += s.price;
// 	  })
// 	  Cart.findByPk(cart.id)
// 	  .then((resp) => {
// 		  // resp.update({totalAmount: total})
// 		  res.send(resp);
// 	  })
//   }


const getAppointmentsByClientId = async (req, res, next) => {
    try {
        let id = req.params.id;
        let appointmentsOfClient = await Appointment.findAll({
             where: {
                 clientId: id
             },
             include : {all: true} // {all: true, nested: true}
             });
             res.status(200).send(appointmentsOfClient);
    } catch (e){
        console.log("The appointment couldn’t be fetched properly" + e);
    }
}

/* 
({
  include: [
    {model: models.comments, include: [models.comments.users] }
  ]
})
*/

module.exports = {
	getAppointments,
	getAppointmentById,
	addAppointment,
	deleteAppointment,
	updateAppointment,
	addRelation,
	getAppointmentsByClientId
};
