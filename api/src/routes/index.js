const { Router } = require("express");


// Rutas para crear los servicios de un barbero

// Rutas del crud de servicio
const service = require('./service');

// Rutas del crud de barberos
const barbers = require("./barbers.js");

// ruta del crud del cliente
const clients = require('./clients');

// ruta del crud de la cita
const appointments = require("./appointments");

// ruta del crud del detalle de cita 
const detailAppointments = require('./detailAppointments');

// ruta del crud de categories
const categories = require("./categories.js");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/clients', clients);
router.use('/appointments', appointments);
router.use('/detailAppointments', detailAppointments);
router.use('/barbers', barbers);
router.use('/admin/service', service);
router.use('/admin/categories', categories);

module.exports = router;
