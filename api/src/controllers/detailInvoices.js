const { Client, Barber, Invoice, DetailInvoice } = require("../db");
require("dotenv").config();
const { Op } = require("sequelize");

const getDetailInvoices = (req, res, next) => {
	/* ---- El usuario ( administrador/cliente/barbero ) busca todas los Invoices ----*/
	try {
		DetailInvoice.findAll({
			include: [{ model: Barber }, { model: Client }, { model: Invoice }],
		}).then((result) => {
			res.status(200).send(result);
		});
	} catch (e) {
		console.log("No se pudo realizar la petición HTTP correctamente " + e);
	}
};

const getDetailInvoiceById = (req, res, next) => {
	try {
		let queryId = req.params.id.toUpperCase();
		DetailInvoice.findOne({
			where: { id: queryId },
			include: [{ model: Barber }, { model: Client }, { model: Invoice }],
		}).then((result) => {
			res.status(200).send(result);
		});
	} catch (e) {
		console.log("No se pudo realizar la petición HTTP correctamente " + e);
	}
};

const addDetailInvoice = (req, res, next) => {
	const {
		idBarber, // Revisar cómo vienen estos datos de Sequelize!
		idClient,
		date,
		status,
		total,
	} = req.body;
	try {
		const createdDetail = DetailInvoice.create({
			idBarber,
			idClient,
			date,
			status,
			total,
		});
		return res.send(createdDetail); // ¿Le respondo con la cita creada, o con todas las citas?
	} catch (error) {
		next(error);
	}
};

const updateDetailInvoice = async (req, res, next) => {
	const id = req.params.id;
	const { detailModified } = req.body;
	let detail = await DetailInvoice.findByPk(id);
	if (detail) {
		detail = detail.update(detailModified);
		res.send(detail);
	} else {
		res.send("No se ha podido modificar el detalle de la cita");
	}
	return res.send(detailModified);
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
