const express = require('express');
const server = express();
const {getAllService, postService, getBarbersService, relationService}  = require('../controllers/service');

// ruta para buscar todos los servicios
server.get("/", getAllService);

// ruta que devuelve los servicios según el barbero 
server.get("/barbers/:id", getBarbersService)

// ruta para crear un servicio
server.post("/",postService);

// ruta para relacinar un barbero con un servicios
server.post("/relationService", relationService)



module.exports= server;
