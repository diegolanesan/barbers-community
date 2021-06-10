const { Router } = require("express");
const barber = require('./barbers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// const appointmentsRoutes = require("./appointments");

// const publicacionesRutas = require('./publicacionesRutas');
// const usuarioRutas = require('./usuarioRuta');
// const comentariosRutas = require('./comentariosRutas');


// const barbersRoutes = require("./barbers.js");
// const categoriesRoutes = require("./categories.js");
// const clientRoutes = require("./clients.js");
// const faceTypesRoutes = require("./faceTypes.js");
// const hairTypesRoutes = require("./hairTypes.js");
// const BarberServicesRoutes = require("./barberServices.js");
// const stylesRoutes = require("./styles.js");
// const subscriptionsRoutes = require("./subscriptions.js");

// const barbersRoutes = require('./barbers.js')
// const categoriesRoutes = require('./categories.js')
// const clientRoutes = require('./clients.js')
// const faceTypesRoutes = require('./faceTypes.js')
// const hairTypesRoutes = require('./hairTypes.js')
// const BarberServicesRoutes = require('./barberServices.js')
// const stylesRoutes = require('./styles.js')
// const subscriptionsRoutes = require('./subscriptions.js')





const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// router.use("/appointments", appointments);


// router.use(publicacionesRutas);
// router.use(usuarioRutas);
// router.use(comentariosRutas);


router.use('/barbers', barber);
// router.use('/categories', categoriesRoutes);
// router.use('/clients', clientRoutes);
// router.use('/facetypes', faceTypesRoutes);
// router.use('/hairtypes', hairTypesRoutes);
// router.use('/barberservices', BarberServicesRoutes);
// router.use('/styles', stylesRoutes);
// router.use('/subscriptions', subscriptionsRoutes);



module.exports = router;
