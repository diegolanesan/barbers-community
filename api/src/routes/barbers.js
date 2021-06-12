const express = require('express');
const server = express();
const { getAllBarbers, getByIdBarbers, getByNameBarbers,postBarbers, putBarbers,deleteBarbers } = require('../controllers/barbers');

// Ruta que devuelve a todos los barberos   (AGUANTE BOCAAA !!!!)
server.get('/all', getAllBarbers);

//Ruta que devuelve los barbero según su id
server.get('/id/:id', getByIdBarbers);

//Ruta que devuelve a los barberos según su nombre (A ELLA LE GUSTA EL TECLADO DE PABLITO !!!)
server.get('/name/:name', getByNameBarbers);

//Ruta para crear  baberos
server.post('/', postBarbers);

// Ruta para modificar un barbero
server.put('/:id', putBarbers);

//Ruta para eliminar un Barbero  (AGUANTE DAMAS GRATIS !!!)
server.delete('/:id', deleteBarbers);



module.exports= server;
