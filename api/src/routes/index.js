const { Router } = require("express");

// Rutas del crud del cliente (ATR PERRO CUMBIA CAGETEALA PIOLA GATOOO !!!)
const clients = require('./clients');

// Rutas del crud de barberos
const barbers = require('./barbers');

// Rutas para crear los servicios de un barbero
const serviceBarbers = require('./serviceBabers');

// const barbersRoutes = require("./barbers.js");
const clients = require('./clients');
const appointments = require("./appointments");
const detailAppointments = require('./detailAppointments');
const categories = require('./categories')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/clients', clients);
router.use('/appointments', appointments);
router.use('/detailAppointments', detailAppointments);
router.use('/barbers', barbers);
router.use('/serviceBarbers', serviceBarbers);
router.use('/catgories', categories);

module.exports = router;
