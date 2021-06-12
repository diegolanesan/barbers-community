const { Router } = require('express');
const router = Router();
const { getDetailAppointments, getDetailAppointmentById, addDetailAppointment, updateDetailAppointment, deleteDetailAppointment } = require('../controllers/detailAppointments'); // updateClient

router.get('/', getDetailAppointments);
router.get('/:id', getDetailAppointmentById);
router.put('/:id', updateDetailAppointment);
router.post('/add', addDetailAppointment);
router.delete('/:id', deleteDetailAppointment);

module.exports = router;