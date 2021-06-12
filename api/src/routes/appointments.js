const { Router } = require('express');
const router = Router();
const { getAppointments, getAppointmentById, addAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointments'); // updateClient

<<<<<<< Updated upstream
router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.post('/add', addAppointment);
router.delete('/:id', deleteAppointment);

=======
module.exports= server;
// const { Router } = require('express');
// const router = Router();
// const { getClients, addClient, deleteClient, getClientById} = require('../controllers/clients'); // updateClient
const { Router } = require('express');
const router = Router();
const { getAppointments, getAppointmentById, addAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointments'); // updateClient

router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.post('/add', addAppointment);
router.delete('/:id', deleteAppointment);

// module.exports = router;
>>>>>>> Stashed changes
module.exports = router;
