const express = require('express');
const server = express();
const {getAllService, postService}  = require('../controllers/service');

// ruta para buscar todos los servicios
server.get("/", getAllService);

// ruta para crear un servicio
server.post("/",postService);

module.exports= server;
