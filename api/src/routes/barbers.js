const express = require('express');
const server = express();
const { getAllBarbers, getByIdBarbers, getByNameBarbers,postBarbers, putBarbers,deleteBarbers,getTypeBarbers,relationServiceBarber } = require('../controllers/barbers');


// Ruta que devuelve a todos los barberos   

server.get('/all', getAllBarbers);

//Ruta que devuelve los barbero según su id
server.get('/id/:id', getByIdBarbers);


//Ruta que devuelve a los barberos según su nombre

server.get('/name/:name', getByNameBarbers);

// Ruta que devuelve todos los barberos según su type
server.get('/type/:type', getTypeBarbers);

//Ruta para crear  baberos
server.post('/', postBarbers);

// Agregar un servicio al barbero 
server.post('/addService', relationServiceBarber);

// Ruta para modificar un barbero
server.put('/:id', putBarbers);


//Ruta para eliminar un Barbero  

server.delete('/:id', deleteBarbers);








module.exports= server;
