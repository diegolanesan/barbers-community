const express = require('express');
const server = express();
const {getAllService}  = require('../controllers/service');


server.get("/", getAllService);

module.exports= server;
