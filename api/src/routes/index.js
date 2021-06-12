const { Router } = require("express");

// Rutas del crud del cliente (ATR PERRO CUMBIA CAGETEALA PIOLA GATOOO !!!)
const clients = require('./clients');

// Rutas del crud de barberos
const barbers = require('./barbers');

// Rutas para crear los servicios de un barbero
const service = require('./service');

const barbersRoutes = require("./barbers.js");
const appointments = require("./appointments");
const detailAppointments = require('./detailAppointments');
// const usuarioRutas = require('./usuarioRuta');
// const comentariosRutas = require('./comentariosRutas');
// const categoriesRoutes = require("./categories.js");
// const clientRoutes = require("./clients.js");
// const faceTypesRoutes = require("./faceTypes.js");
// const hairTypesRoutes = require("./hairTypes.js");
// const BarberServicesRoutes = require("./barberServices.js");
// const stylesRoutes = require("./styles.js");
// const subscriptionsRoutes = require("./subscriptions.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// router.use("/appointments", appointments);


// router.use(publicacionesRutas);
// router.use(usuarioRutas);
// router.use(comentariosRutas);



// router.use('/categories', categoriesRoutes);
// router.use('/clients', clientRoutes);
// router.use('/facetypes', faceTypesRoutes);
// router.use('/hairtypes', hairTypesRoutes);
// router.use('/barberservices', BarberServicesRoutes);
// router.use('/styles', stylesRoutes);
// router.use('/subscriptions', subscriptionsRoutes);

router.use('/barbers', barbersRoutes);
router.use('/clients', clients);
router.use('/appointments', appointments);
router.use('/detailAppointments', detailAppointments);

module.exports = router;
