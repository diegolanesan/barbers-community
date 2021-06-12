const { Router } = require("express");

// Rutas del crud de barberos
const barbers = require('./barbers');

// Rutas para crear los servicios de un barbero
const service = require('./service');
const barbers = require("./barbers.js");
const clients = require('./clients');
const appointments = require("./appointments");
const detailAppointments = require('./detailAppointments');
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
