const express = require('express');
const server = express();
const {getAllFaceTypes,getAllHairTypes,getAllStyles, postStyle,  putStyle, deleteStyle} = require('../controllers/typesHFS');

server.get('/Face', getAllFaceTypes);
server.get('/Hair', getAllHairTypes);

// RUTA PARA TRAERSE TODOS LS ESTILOS
server.get('/styles', getAllStyles);

// RUTA PARA CREAR ESTILOS
server.post("/styles", postStyle);

// RUTA PARA EDITAR ESTILOS
server.put("/styles", putStyle);

// RUTA PARA ELIMINAR ESTILOS
server.delete("/styles/:styleId",deleteStyle);

module.exports = server;