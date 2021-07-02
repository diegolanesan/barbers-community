const express = require('express');
const server = express();
const {
    getAllAdmins, validation
} = require('../controllers/admins');


server.get('/all', getAllAdmins);
server.post('/validation', validation);


module.exports= server;