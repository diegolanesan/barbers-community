const { Router } = require('express');
const router = Router();
const { getClients, 
        addClient, 
        deleteClient, 
        getClientById, 
        updateClient, 
        loginClient,
        googleLoginClients,
        getBannedClients} = require('../controllers/clients'); // updateClient

router.get('/:id', getClientById);
router.get('/', getClients);
router.get('/baned/:id', getBannedClients);
router.put('/:id', updateClient);
router.post('/add', addClient);
router.delete('/:id', deleteClient);
router.post('/login',loginClient);
router.post('/login/google', googleLoginClients)

module.exports = router;