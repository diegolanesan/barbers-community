const { Invoice, DetailInvoice, Service } = require("../db");
require("dotenv").config();
const { Op } = require("sequelize");

const addDetailInvoice = async (req, res, next) => {
	const { invoiceId, serviceId, price } = req.body;
	try {
		const createdDetail = await DetailInvoice.create({
			invoiceId,
			serviceId,
			price,
		});
		return res.send(createdDetail);
	} catch (error) {
		res.send(error);
		next(error);
	}
};

/* ---- Los usuarios ( admin/client/barber ) acceden a ver Invoices ----*/
const getDetailInvoices = (req, res, next) => {
	try {
		DetailInvoice.findAll({
			//	include: [{ model: Barber }, { model: Client }, { model: Invoice }],
		}).then((result) => {
			res.status(200).send(result);
		});
	} catch (e) {
		console.log(
			"[getDetailInvoice]The HTTP request could not be made successfully " + e
		);
	}
};

const getDetailInvoiceById = (req, res, next) => {
	try {
		let queryId = req.params.id.toUpperCase();
		DetailInvoice.findOne({
			where: { id: queryId },
			//include: [{ model: Barber }, { model: Client }, { model: Invoice }],
		}).then((result) => {
			res.status(200).send(result);
		});
	} catch (e) {
		console.log(
			"[getDetailInvoice]The HTTP request could not be made successfully " + e
		);
	}
};

const updateDetailInvoice = async (req, res, next) => {
	const id = req.params.id;
	const { detailModified } = req.body;
	let detail = await DetailInvoice.findByPk(id);
	if (detail) {
		detail = await detail.update(detailModified);
		res.send(detail);
	} else {
		res.send("The detail invoice could not be updated");
	}
};

const deleteDetailInvoice = (req, res, next) => {
	const id = req.params.id;
	DetailInvoice.destroy({
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
	getDetailInvoices,
	getDetailInvoiceById,
	addDetailInvoice,
	updateDetailInvoice,
	deleteDetailInvoice,
};
