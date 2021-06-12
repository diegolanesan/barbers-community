const express = require('express');
const server = express();
const {postCategory, deleteCategory, getAllCategory, getByIdCategory, getByNameCategory,putCategory} = require('../controllers/categories');

// Ruta que devuelve todas las categorias
server.get('/all', getAllCategory);

//Ruta que devuelve las categorias  según su id
server.get('/id/:id', getByIdCategory)

//Ruta que devuelve a las categorias según su nombre
server.get('/name/:name', getByNameCategory)

// Ruta para poder crear una categoria
server.post('/',postCategory);

// Ruta para modificar la categoria
server.put('/:id', putCategory)

// Ruta para eliminar categoria
server.delete('/:id',deleteCategory);


module.exports= server;