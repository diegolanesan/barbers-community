const express = require('express');
const server = express();
const {Barber} = require("../db");
const { 
    createBarber,
    createClient,
    createCategory,
    createService,
    createStyle
       } = require('../controllers/insertFile');

// insertar barberos a  la base de datos 
server.get("/barbers", createBarber)

// insertar clientes a la base de datos
server.get("/clients", createClient)

// insertar categorias a la base de datos
server.get("/categories", createCategory)

// insertar servicios a la base de datos 
server.get("/services", createService)

// insertar styles en la base de datos
server.get("/styles",  createStyle)

module.exports= server;