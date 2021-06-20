const { Client, Barber, DetailInvoice, Invoice, Service } = require("../db");
require("dotenv").config();
//const { Op } = require("sequelize");
const { QueryTypes, json } = require("sequelize");

const addInvoice = async (req, res, next) => {
	const { barberId, clientId, date, total, statusPay, statusOrder } = req.body;
	try {
		const createdInvoice = await Invoice.create({
			barberId,
			clientId,
			date,
			total,
			statusPay,
			statusOrder,
		});
		return res.send(createdInvoice);
	} catch (error) {
		res.send(error);
		next(error);
	}
};
// const tasks = await Task.findAll({ include: User });
// console.log(JSON.stringify(tasks, null, 2));
// const clientAll = await Client.findAll({include: [ { model: FaceType }, {model: HairType}, { model: Style } ]})
// return res.send(clientAll); // A MODIFICAR PARA ENVIAR TODOS LOS CLIENTS PARA FACILITARLE LA TAREA AL FRONT

const getInvoices = async (req, res, next) => {
	try {
		//Invoice.findAll({ include: { all: true } })
		let invoiceAll = await Invoice.findAll({ include: { all: true } });

		if (invoiceAll) {
			let jsonInvoices = [];
			for (let i = 0; i < invoiceAll.length; i++) {
				let aux = {};
				//invoiceId
				aux["invoiceId"] = invoiceAll[i].dataValues.id;

				aux["date"] = invoiceAll[i].dataValues.date;
				aux["statusOrder"] = invoiceAll[i].dataValues.statusOrder;
				aux["statusPay"] = invoiceAll[i].dataValues.statusPay;

				//qryBarber
				aux["barberId"] = invoiceAll[i].dataValues.barberId;
				let barber = await Barber.findByPk(aux["barberId"]);
				aux["barberName"] = barber.name + " " + barber.lastname;

				//qryClient
				aux["clientId"] = invoiceAll[i].dataValues.clientId;
				let client = await Barber.findByPk(aux["clientId"]);
				aux["clientName"] = client.name + " " + client.lastname;

				//services
				let services = [];
				let detailInvoiceAll = await DetailInvoice.findAll({
					where: {
						invoiceId: aux["invoiceId"],
					},
				});

				if (detailInvoiceAll.length > 0) {
					let jsonInvoicesDetails = [];
					for (let j = 0; j < detailInvoiceAll.length; j++) {
						let auxServiceId = detailInvoiceAll[j].dataValues.serviceId;
						if (auxServiceId) {
							let auxServiceName = await Service.findByPk(auxServiceId);
							jsonInvoicesDetails.push(auxServiceName.dataValues);
						}
					}
					aux["service"] = jsonInvoicesDetails;
					console.log(jsonInvoicesDetails);
				}
				jsonInvoices.push(aux);
			}
			console.log(jsonInvoices);

			res.status(200).send(jsonInvoices);
		}
	} catch (e) {
		console.log(
			"[getInvoiceAll]The HTTP request could not be made successfully " + e
		);
	}
};

const getInvoiceById = (req, res, next) => {
	try {
		let queryId = req.params.id.toUpperCase();
		Invoice.findOne({
			where: { id: queryId },
			include: [{ model: Barber }, { model: Client }, { model: DetailInvoice }],
		}).then((result) => {
			res.status(200).send(result);
		});
	} catch (e) {
		console.log(
			"[getInvoice]The HTTP request could not be made successfully " + e
		);
	}
};

const updateInvoice = async (req, res, next) => {
	const invoiceId = req.params.id;
	const { invoiceModify } = req.body;
	let invoice = await Invoice.findByPk(invoiceId);
	if (invoice) {
		invoice = await invoice.update(invoiceModify);
		res.send(invoice);
	} else {
		res.send("The invoice could not be updated");
	}
};

const addRelation = async (req, res, next) => {
	// Establece la relacion entre Invoice y serviceBarber
	const { id, serviceId, invoiceId, price } = req.body;
	const resul = await DetailInvoice.create({
		id,
		serviceId,
		invoiceId,
		price,
	}); //resul.addCategory([idCategory]);
	if (resul) {
		res.send(resul);
	} else {
		res.status(400).send("The tables could not be related");
	}
};

const deleteInvoice = (req, res, next) => {
	const id = req.params.id;
	Invoice.destroy({
		where: {
			id,
		},
	})
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => next(error));
};

module.exports = {
	getInvoices,
	getInvoiceById,
	addInvoice,
	deleteInvoice,
	updateInvoice,
	addRelation,
};
//sql
// invoices (id, invoiceId, clientId, date, statusOrder, statusPay)
// 	clients (clientId, name, lastname)
// 	detailInvoices (invoiceId,serviceId)
// 	services (name);

// # Date 	StatusOrder 		Client.name	 Services.name, 	statusPay.

// SELECT invoices.id, invoices.date, invoices.statusOrder, clients.name, services.name, invoices.statusPay
// FROM invoices, clients, services,detailInvoice
// WHERE invoices.clientId=clients.id
// And invoices.Id= detailInvoice.invoiceId
// And detailsInvoice.serviceId= services.id
