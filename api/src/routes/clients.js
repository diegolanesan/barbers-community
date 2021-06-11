const { Router } = require('express');
const router = Router();
const { getClients, addClient, deleteClient, getClientById, updateClient} = require('../controllers/clients'); // updateClient

router.get('/:id', getClientById);
router.get('/', getClients);
router.put('/:id', updateClient);
router.post('/addClients', addClient);
router.delete('/:id', deleteClient);

module.exports = router;