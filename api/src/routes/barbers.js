const express = require('express');
const server = express();
const { getAllBarbers,
        getByIdBarbers,
        getByNameBarbers,
        postBarbers,
        putBarbers,
        deleteBarbers,
        getTypeBarbers,
        relationServiceBarber,
        relationFaiceType, 
        relationHairType,
        relationStyle,
        getHFStypes, 
        loginBarbers,
        signin} = require('../controllers/barbers');


// Ruta que devuelve a todos los barberos   

server.get('/all', getAllBarbers);

// filtra a los barberos por faceType hairType Style
server.get('/FHStype', getHFStypes)

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

// Agregar un tipo de cara a un barbero
server.post('/addFaceType',relationFaiceType)

// Agregar un tipo de pelo a un barbero
server.post('/addHairType',relationHairType)

// Agregar un estilo a un barbero
server.post('/addStyle',relationStyle)

// Ruta para modificar un barbero
server.put('/:id', putBarbers);


//Ruta para eliminar un Barbero  
server.delete('/:id', deleteBarbers);

// Ruta de login
server.post('/login', loginBarbers)







module.exports= server;
