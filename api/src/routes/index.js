const { Router } = require("express");

const clients = require('./clients');
const appointments = require("./appointments");
// const publicacionesRutas = require('./publicacionesRutas');
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

router.use('/clients', clients);
router.use('/appointments', appointments);

module.exports = router;
