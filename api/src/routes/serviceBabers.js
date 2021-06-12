const express = require('express');
const server = express();
const {getAllService}  = require('../controllers/serviceBarbers');


server.get("/", getAllService);

module.exports= server;
