const { Router } = require('express');
const router = Router();
const { getAppointments, getAppointmentById, addAppointment, updateAppointment, deleteAppointment } = require('../controllers/clients'); // updateClient

router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.post('/addAppointment', addAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;