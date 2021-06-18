const { Client, Barber, Appointment, DetailAppointment } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');


const getDetailAppointments = (req, res, next) => {
    /* ---- El usuario ( administrador/cliente/barbero ) busca todas los appointments ----*/
    try {
        DetailAppointment.findAll({
            include: [ { model: Barber }, {model: Client}, { model: Appointment } ]  // ¿Esta bien incluir estos datos?
        })
        .then((result) => {
            res.status(200).send(result);
        })
    } catch(e){
        console.log("No se pudo realizar la petición HTTP correctamente " + e);
    }
}


const getDetailAppointmentById = (req, res, next) => {
    try {
        let queryId = req.params.id.toUpperCase();
        DetailAppointment.findOne({
            where: {id: queryId},
            include: [ { model: Barber }, {model: Client}, { model: Appointment } ]
        })
        .then((result) => {
            res.status(200).send(result);
        })
        } catch(e){
        console.log("No se pudo realizar la petición HTTP correctamente " + e);
    }
}

const addDetailAppointment = (req, res, next) => {
    const { 
        idBarber,   // Revisar cómo vienen estos datos de Sequelize!
        idClient,
        date,
        status,
        total,
         } = req.body;
    try {
        const createdDetail = DetailAppointment.create({
            idBarber,
            idClient,
            date,
            status,
            total
        });
        return res.send(createdDetail);// ¿Le respondo con la cita creada, o con todas las citas?
    } catch (error) {
        next(error);
    }

}

const updateDetailAppointment = async (req, res, next ) => {

    const id = req.params.id;
	const { detailModified } = req.body;
	let detail = await DetailAppointment.findByPk(id);
	if (detail) {
		detail = detail.update(detailModified);
		res.send(detail);
	} else {
		res.send("No se ha podido modificar el detalle de la cita");
	}
        return res.send(detailModified);
}


const deleteDetailAppointment = (req, res, next) => {
    const id = req.params.id;
    DetailAppointment.destroy({
        where: {
            id,
        }
    })
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => next(error));
}


module.exports = {
    getDetailAppointments,
    getDetailAppointmentById,
    addDetailAppointment,
    updateDetailAppointment,
    deleteDetailAppointment
}

