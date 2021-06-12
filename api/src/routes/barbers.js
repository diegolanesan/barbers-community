const express = require('express');
const server = express();
const { getAllBarbers, getByIdBarbers, getByNameBarbers,postBarbers, putBarbers,deleteBarbers } = require('../controllers/barbers');

<<<<<<< Updated upstream
// Ruta que devuelve a todos los barberos   
=======
// Ruta que devuelve a todos los barberos   (AGUANTE BOCAAA !!!!)
>>>>>>> Stashed changes
server.get('/all', getAllBarbers);

//Ruta que devuelve los barbero según su id
server.get('/id/:id', getByIdBarbers);

<<<<<<< Updated upstream
//Ruta que devuelve a los barberos según su nombre
=======
//Ruta que devuelve a los barberos según su nombre (A ELLA LE GUSTA EL TECLADO DE PABLITO !!!)
>>>>>>> Stashed changes
server.get('/name/:name', getByNameBarbers);

//Ruta para crear  baberos
server.post('/', postBarbers);

// Ruta para modificar un barbero
server.put('/:id', putBarbers);

<<<<<<< Updated upstream
//Ruta para eliminar un Barbero  
=======
//Ruta para eliminar un Barbero  (AGUANTE DAMAS GRATIS !!!)
>>>>>>> Stashed changes
server.delete('/:id', deleteBarbers);



module.exports= server;
