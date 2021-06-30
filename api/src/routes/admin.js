const express = require('express');
const server = express();
const {
    getAllAdmins
} = require('../controllers/admins');


server.get('/all', getAllAdmins);


module.exports= server;