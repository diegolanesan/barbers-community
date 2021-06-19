const { Client, Barber, DetailAppointment, Appointment, ServiceBarber, Service, AppointmentDetail} = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');

const addAppointment = async (req, res, next) => {
    const { 
        id,
        barberId,
        clientId,
        date,
        status,
        total,
         } = req.body;
    try {
        const createdAppointment = await Appointment.create({
            barberId,
            clientId,
            date,
            status,
            total
        })
        return res.send(createdAppointment);// ¿Le respondo con la cita creada, o con todas las citas?
    } catch (error) {
        next(error);
    }

}

const getAppointments = (req, res, next) => {
    /* ---- El usuario ( administrador/cliente/barbero ) busca todas los appointments ----*/
    try { //
        Appointment.findAll({
            include: {all: true}
        })
        .then((result) => {
            res.status(200).send(result);
        })
    } catch(e){
        console.log("No se pudo realizar la petición HTTP correctamente " + e);
    }
}


const getAppointmentById = (req, res, next) => {
    try {
        let queryId = req.params.id.toUpperCase();
        Appointment.findOne({
            where: {id: queryId},
            include: [ { model: Barber }, {model: Client}, { model: DetailAppointment } ]
        })
        .then((result) => {
            res.status(200).send(result);
        })
        } catch(e){
        console.log("No se pudo realizar la petición HTTP correctamente " + e);
    }
}


const updateAppointment = async (req, res, next ) => {
    const idAppointment = req.params.id;
	const { appointmentModify } = req.body;
	let appointment = await Appointment.findByPk(idAppointment);
	if (appointment) {
		appointment = appointment.update(appointmentModify);
		res.send(appointment);
	} else {
		res.send("No se ha podido modificar al barbero");
	}
}


const addRelation = async (req, res, next ) => { // Establece la relacion entre appointment y serviceBarber
    const {id, serviceBarberId, appointmentId, price } = req.body;
    const resul = await DetailAppointment.create({id, serviceBarberId, appointmentId, price});  //resul.addCategory([idCategory]);
    if(resul){
        res.send(resul);
    }else{
        res.status(400).send("No se pudo relacionar las tablas")
    }
}

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
    addRelation
}

