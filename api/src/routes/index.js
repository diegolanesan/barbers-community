const { Router } = require("express");

const clients = require('./clients');
const barbers = require('./barbers');



const router = Router();

router.use('/clients', clients);
router.use('/barbers', barbers)

module.exports = router;
