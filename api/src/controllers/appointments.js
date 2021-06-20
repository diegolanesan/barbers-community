const { Client, Barber, DetailAppointment, Appointment, ServiceBarber, Service} = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');

const addAppointment = (req, res, next) => {
    const {
        barberId,
        clientId,
        date,
        time,
        status,
        total,
        serviceBarberId
    } = req.body
    Appointment.findOrCreate({
        where: {
            barberId,
            clientId,
            date,
            time,
            status,
            total,
        }
    }).then((resp) => {
        for (let i = 0; i < serviceBarberId.length; i++) {
            const element = serviceBarberId[i];
            DetailAppointment.findOrCreate({
                where: {
                appointmentId: resp[0].id,
                serviceBarberId: Number(element),
                price: 100
                }})
                console.log(element)
        }
        res.send(resp)
    })
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

