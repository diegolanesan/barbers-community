const express = require('express');
const server = express();
const { getAllBarbers, getByIdBarbers, getByNameBarbers,postBarbers, putBarbers,deleteBarbers } = require('../controllers/barbers');

// Ruta que devuelve a todos los barberos
server.get('/all', getAllBarbers);

//Ruta que devuelve los barbero según su id
server.get('/id/:id', getByIdBarbers);

//Ruta que devuelve a los barberos según su nombre
server.get('/name/:name', getByNameBarbers);

//Ruta para crear todos los baberos
server.post('/', postBarbers);

// Ruta para modificar un barbero
server.put('/:id', putBarbers);

//Ruta para eliminar un Barbero
server.delete('/:id', deleteBarbers);



module.exports= server;
