const { Client, Barber, DetailInvoice, Invoice } = require("../db");
require("dotenv").config();
const { Op } = require("sequelize");

const addInvoice = async (req, res, next) => {
	const { id, barberId, clientId, date, status, total } = req.body;
	try {
		const createdInvoice = await Invoice.create({
			barberId,
			clientId,
			date,
			status,
			total,
		});
		return res.send(createdInvoice);
	} catch (error) {
		next(error);
	}
};

const getInvoices = (req, res, next) => {
	try {
		Invoice.findAll({
			include: { all: true },
		}).then((result) => {
			res.status(200).send(result);
		});
	} catch (e) {
		console.log("The HTTP request could not be made successfully " + e);
	}
};

const getInvoiceById = (req, res, next) => {
	try {
		let queryId = req.params.id.toUpperCase();
		Invoice.findOne({
			where: { id: queryId },
<<<<<<< HEAD
			include: [{ model: Barber }, { model: Client }, { model: DetailInvoice }],
=======
			//	include: [{ model: Barber }, { model: Client }, { model: DetailInvoice }],
>>>>>>> 6740ba57322b30405f8f3bdc849d16c27e4ef361
		}).then((result) => {
			res.status(200).send(result);
		});
	} catch (e) {
		console.log("The HTTP request could not be made successfully " + e);
	}
};

const updateInvoice = async (req, res, next) => {
	const invoiceId = req.params.id;
<<<<<<< HEAD
	const { InvoiceModify } = req.body;
	let Invoice = await Invoice.findByPk(invoiceId);
	if (Invoice) {
		Invoice = Invoice.update(InvoiceModify);
		res.send(Invoice);
	} else {
		res.send("The invoice could not be modified");
	}
=======
	const { invoiceModify } = req.body;
	let invoice = await Invoice.findByPk(invoiceId);
	console.log(invoice);
	console.log("Invoice modify");
	console.log(invoiceModify);
	console.log("Invoice req");
	console.log(req.body);
	if (invoice) {
		invoice = invoice.update(invoiceModify);
		res.send(invoice);
	} else {
		res.send("The invoice could not be modified");
	}
	return res.send(invoiceModify);
>>>>>>> 6740ba57322b30405f8f3bdc849d16c27e4ef361
};

const addRelation = async (req, res, next) => {
	// Establece la relacion entre Invoice y serviceBarber
	const { id, serviceBarberId, InvoiceId, price } = req.body;
	const resul = await DetailInvoice.create({
		id,
		serviceBarberId,
		InvoiceId,
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
